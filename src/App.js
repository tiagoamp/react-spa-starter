import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import ItemBox from './Item';
import Page2 from './Page2';
import Page3 from './Page3';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (

      <div id="layout">
          <a href="#menu" id="menuLink" className="menu-link">
              <span></span>
          </a>

          <div id="menu">
              <div className="pure-menu">
                  <Link to="/home" className="pure-menu-heading">Company</Link>

                  <ul className="pure-menu-list">
                      <li className="pure-menu-item"><Link to="/home" className="pure-menu-link">Home</Link></li>
                      <li className="pure-menu-item"><Link to="/home/form" className="pure-menu-link">Inner Form</Link></li>
                      <li className="pure-menu-item"><Link to="/home/page2" className="pure-menu-link">Inner Page 2</Link></li>
                      <li className="pure-menu-item"><Link to="/home/page3" className="pure-menu-link">Inner Page 3</Link></li>
                      <li className="pure-menu-item"><Link to="/link" className="pure-menu-link">Another Link</Link></li>
                      <li className="pure-menu-item"><Link to="/about" className="pure-menu-link">About</Link></li>
                      
                  </ul>
              </div>
          </div>

          <div id="main">
            <div className="header">
              <h1>Form 1</h1>
            </div>
            <div className="content" id="content">

              {/* <ItemBox /> */}

              <Switch>
                <Route path="/" exact={true} />
                <Route path="/home" exact={true} />
                <Route path="/home/form" exact={true} component={ItemBox} />
                <Route path="/home/page2" component={Page2} />
                <Route path="/home/page3" component={Page3} />
              </Switch>

            </div>
          </div>            
      
      </div>

    );
  }

}

export default App;
