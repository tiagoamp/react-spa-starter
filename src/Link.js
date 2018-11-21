import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import { Link } from 'react-router-dom';

class LinkBox extends Component {
  
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
                      <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
                      <li className="pure-menu-item"><Link to="/link" className="pure-menu-link">Link</Link></li>
                      <li className="pure-menu-item"><Link to="/about" className="pure-menu-link">About</Link></li>
                  </ul>
              </div>
          </div>

          <div id="main">
            <div className="header">
              <h1>Link Box Component - page 2</h1>
            </div>            
          </div>            
      
      </div>

    );
  }

}

export default LinkBox;
