import React, { Component } from 'react';
import $ from 'jquery';
import InputCustom from './components/InputCustom';
import PubSub from 'pubsub-js';
import TratadorErros from './TratadorErros';

class FormularioItem extends Component{

    constructor() {
        super();

        this.state = {nome:'',email:'', senha:''};

        this.sendForm = this.sendForm.bind(this);
        
        //this.setNome = this.setNome.bind(this);
        //this.setEmail = this.setEmail.bind(this);
        //this.setSenha = this.setSenha.bind(this);
    }
/*
    setNome(evento) {
        this.setState({nome:evento.target.value});
    }
    setEmail(evento) {
        this.setState({email:evento.target.value});
    }
    setSenha(evento) {
        this.setState({senha:evento.target.value});
    }
*/
    // generic
    saveInputUpdate(nomeInput,evento) {
        let campoAlterado = {};
        campoAlterado[nomeInput] = evento.target.value;
        this.setState(campoAlterado);
    }

    sendForm(evento) {
        evento.preventDefault();

        $.ajax({
            url:"http//localhost:8080/api/items",
            contentType: 'application/json',
            dataType:'json',
            type:'post',
            data: JSON.stringify({nome:this.state.nome, email:this.state.email, senha:this.state.senha}),
            success: function(novaListagem){
                //this.setState({lista:resposta});
                //this.props.callbackAtualizaListagem(resposta);
                PubSub.publish('atualiza-listagem-items', novaListagem);
                this.setState({nome:'',email:'',senha:''});
            }.bind(this),
            error: function(resposta){
                if (resposta.status === 400) {
                    new TratadorErros().publicaErros(resposta.responseJSON);
                }
            }, 
            beforeSend: function() {
                PubSub.publish("limpa-erros",{});
            }
        });

    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">

            <form className="pure-form pure-form-aligned" onSubmit={this.sendForm} method="post">

              <InputCustom id="nome" type="text" name="nome" value={this.state.nome} onChange={this.saveInputUpdate.bind(this,'nome')} label="Nome"/>
              <InputCustom id="email" type="text" name="email" value={this.state.email} onChange={this.saveInputUpdate.bind(this,'email')} label="Email" />
              <InputCustom id="senha" type="password" name="senha" value={this.state.senha} onChange={this.saveInputUpdate.bind(this,'senha')} label="Senha" />

              <div className="pure-control-group">                                  
                <label></label> 
                <button type="submit" className="pure-button pure-button-primary">Save</button>                                    
              </div>
            </form>             

          </div> 
        );
    }

}

class TabelaItems extends Component {

    render() {
        return (
            <div>            
            <table className="pure-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>e-mail</th>
                </tr>
              </thead>
              <tbody>

                {
                  this.props.lista.map(function(item) {
                    return (
                      <tr key={item.id}>
                        <td>{item.nome}</td>                
                        <td>{item.email}</td>                
                      </tr>
                    );
                  })
                }                

              </tbody>
            </table> 
          </div> 
        );
    }
}

export default class ItemBox extends Component {

    constructor() {
        super();
        this.state = {lista : []};        
    }

    componentDidMount() {
/*
        $.ajax({
            url:"http://localhost:8080/api/items",
            dataType: 'json',
            success:function(resposta){
                this.setState({lista:resposta});
            }.bind(this)
        });   
*/

        PubSub.subscribe('atualiza-lista-items', function(topico, novaLista) {
            this.setState({lista:novaLista});
        }.bind(this));

    }
    
    render() {
        return(
            <div>
                <FormularioItem />
                <TabelaItems lista={this.state.lista} />
            </div>
        );
    }
}