import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: 'Home',
      logout: sessionStorage.getItem('Authorization')
    };
  }

  render() {
    const payload = jwt.decode(this.state.logout);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Quick Credit
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  {this.state.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              {this.state.logout != null ? (
                <li className="nav-item">
                  <Link to="/loan" className="nav-link">
                    Apply Loan
                  </Link>
                </li>
              ) : (
                ' '
              )}
              {this.state.logout != null && payload.isadmin == true ? (
                <li>
                  <Link to="/users" className="nav-link">
                    Users
                  </Link>
                </li>
              ) : (
                ''
              )}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.state.logout == null ? (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              ) : (
                ''
              )}
              {this.state.logout == null ? (
                <li className="nav-item">
                  <Link to="/register" className="nav-link navbar-right">
                    Register
                  </Link>
                </li>
              ) : (
                ''
              )}
              {/* <li className="nav-item">
                {this.state.logout != null ? <b>Welcome : {payload.lastName} </b> : ' '}
              </li> */}
              <li className="nav-item">
                {this.state.logout != null ? (
                  <Link to="/logout" className="nav-link" style={{ color: 'red' }}>
                    Logout
                  </Link>
                ) : (
                  ' '
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
