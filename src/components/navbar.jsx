import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import image from './../images/logo.png';
import menuOne from './../images/menuBckgrnd.png';
import menu from './../images/menu.png';
import closeMenu from './../images/closeMenu.png';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: 'Home',
      logout: sessionStorage.getItem('Authorization')
      // isVisible: true
    };
  }
  // let isVisible = true;
  navCollapse = e => {
    e.preventDefault();
    let isVisible = true;
    if (isVisible) {
      document.getElementById('navigation-menu').style =
        'display:block; transition: .6s ease-in-out; width: 100%; height:100%; position:fixed; overflow-y: scroll;';
      // this.state.isVisible = false;
      isVisible = false;

    } else {
      document.getElementById('navigation-menu').style =
        'display:none; transition: .6s ease-in-out; ';
      isVisible = true;
    }
  };

  navCollapseOut = e => {
    e.preventDefault();
    let isVisible = true;
    document.getElementById('navigation-menu').style =
      'display:none; transition: .6s ease-in-out; ';
    isVisible = true;
  };

  render() {
    const payload = jwt.decode(this.state.logout);
    return (
      <div>
        <div id="logo">
          <p style={{ color: 'white' }}>{this.state.logout != null ? payload.firstName : null}</p>{' '}
          <img src={image} height="100px" />
        </div>
        <div id="show-menu" onClick={this.navCollapse} style={{ backgroundImage: { menuOne } }}>
          {' '}
          <h1>Menu</h1>{' '}
        </div>
        <div className="navbar" id="navigation-menu">
          <div id="close-menu" onClick={this.navCollapseOut} title="Hide Menu">
            <img src={closeMenu} height="80px" />
          </div>
          <br />
          <ul>
            <li>
              <Link to="/" className="active">
                {this.state.home}
              </Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <a href="/#contact"> Contact </a>
            </li>
            {this.state.logout != null ? (
              <li>
                <Link to="/loan">Apply Loan</Link>
              </li>
            ) : (
              ' '
            )}
            {this.state.logout != null && payload.isadmin == true ? (
              <li>
                <Link to="/users">Users</Link>
              </li>
            ) : (
              ''
            )}
            <div id="auth-Link" style={{}}>
              {this.state.logout == null ? (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                ''
              )}
              {this.state.logout == null ? (
                <li>
                  <Link to="/register" className="nav-link navbar-right">
                    Register
                  </Link>
                </li>
              ) : (
                ''
              )}

              {this.state.logout != null ? (
                <li>
                  <Link to="/logout" style={{ color: 'red' }}>
                    Logout
                  </Link>
                </li>
              ) : (
                ' '
              )}
            </div>
          </ul>
          <div id="logoScreen">
            <img src={image} height="100px" />
          </div>
          <div id="logoMenu">
            <img src={image} height="100px" />
          </div>
        </div>
        {/* +++++++++End of navbar ++++++ */}
      </div>
    );
  }
}

export default Navbar;
