import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import image from './../images/logo.png';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      email: '',
      password: ''
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  signUpHandle = e => {
    const baseUrl = process.env.BASE_URL;
    e.preventDefault();
    axios
      .post(`${baseUrl}/api/v2/auth/signup`, this.state)
      .then(response => {
        if (response) {
          document.getElementById('theSuccess').style.display = 'block';
          document.getElementById('theError').style.display = 'none';
          document.getElementById('theSuccess').innerHTML =
            response.data.message + ' ' + ' as ' + response.data.data.lastName;
        }
        window.location.href = '/login';
      })
      .catch(error => {
        if (error) {
          document.getElementById('theError').style.display = 'block';
          document.getElementById('theSuccess').style.display = 'none';
          document.getElementById('theError').innerHTML = 'Error: Failed to signup!';
        }
        console.log(error);
      });
  };
  render() {
    const { firstname, lastname, address, email, password } = this.state;
    return (
      <div className="content">
        <div className="card">
          <div className="contact-card">
            <h1 style={{ textAlign: 'center', color: 'white' }}>Signup Page</h1>
            <div className="separator"></div>
            <br />
            <form onSubmit={this.signUpHandle} className="form-control">
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
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={firstname}
                placeholder="Enter your first name..."
                className="form-control"
                onChange={this.changeHandler}
              />
              <br />
              <label>Second Name</label>
              <input
                type="text"
                name="lastname"
                value={lastname}
                placeholder="Enter your second name..."
                className="form-control"
                onChange={this.changeHandler}
              />
              <br />
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={address}
                placeholder="Enter your address..."
                className="form-control"
                onChange={this.changeHandler}
              />
              <br />
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email..."
                className="form-control"
                onChange={this.changeHandler}
              />
              <br />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password..."
                className="form-control"
                onChange={this.changeHandler}
              />
              <br />
              <button className="btn-submit">SIGNUP</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
