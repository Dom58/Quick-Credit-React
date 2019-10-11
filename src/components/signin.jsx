import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import image from './../images/logo.png';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  LoginHandle = e => {
    const baseUrl = process.env.BASE_URL;
    e.preventDefault();
    axios
      .post(`${baseUrl}/api/v2/auth/signin`, this.state)
      .then(response => {
        if (response) {
          document.getElementById('theSuccess').style.display = 'block';
          document.getElementById('theError').style.display = 'none';
          document.getElementById('theSuccess').innerHTML =
            response.data.message + ' ' + ' as ' + response.data.data.lastName;

          const { token } = response.data.data;
          const user = sessionStorage.setItem('Authorization', token);

          document.getElementById('email').value = '';
          document.getElementById('password').value = '';
          window.location.href = '/welcome';
        }
      })
      .catch(error => {
        if (error) {
          document.getElementById('theError').style.display = 'block';
          document.getElementById('theSuccess').style.display = 'none';
          document.getElementById('theError').innerHTML = 'Wrong Email or Password';
        }
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="content">
        <div className="card">
          <div className="contact-card">
            <h1 style={{ textAlign: 'center', color: 'white' }}>Login Page</h1>
            <div className="separator"></div>
            <br />
            <form onSubmit={this.LoginHandle} className="form-control">
              <label id="message" style={{ color: 'red' }}></label>
              <div
                className="alert alert-danger"
                role="alert"
                id="theError"
                style={{ display: 'none' }}
              >
                {' '}
              </div>
              <div
                className="alert alert-success"
                role="alert"
                id="theSuccess"
                style={{ display: 'none' }}
              ></div>
              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                placeholder="Enter your email..."
                onChange={this.changeHandler}
              />
              <br />
              <label>Password: </label>
              <input
                type="password"
                name="password"
                value={password}
                id="password"
                placeholder="Enter your password..."
                onChange={this.changeHandler}
              />
              <br />
              <button className="btn-submit" onClick={this.login}>
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
