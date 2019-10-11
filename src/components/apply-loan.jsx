import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { handleResponse, handleError } from '../redux/appApi/apiUtils';
import image from './../images/logo.png';

class Loan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tenor: '',
      amount: ''
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  LoanHandle = e => {
    e.preventDefault();
    const baseUrl = process.env.BASE_URL;
    const tokenVar = sessionStorage.getItem('Authorization');
    if (!tokenVar) {
      document.getElementById('theError').style.display = 'block';
      document.getElementById('theSuccess').style.display = 'none';
      document.getElementById('theError').innerHTML = 'Please login!';
    } else {
      var config = {
        headers: { Authorization: sessionStorage.getItem('Authorization') }
      };
      axios
        .post(`${baseUrl}/api/v2/loans`, this.state, config)
        .then(response => {
          if (response) {
            document.getElementById('theSuccess').style.display = 'block';
            document.getElementById('theError').style.display = 'none';
            document.getElementById('theSuccess').innerHTML =
              response.data.message + ' ' + 'Amount of: ' + response.data.data.amount;
          }
        })
        .catch(handleError);
    }
  };
  render() {
    const { tenor, amount } = this.state;
    return (
      <div className="content">
        <div className="card">
          <div className="contact-card">
            <h1 style={{ textAlign: 'center', color: 'white' }}>Apply Loan Page</h1>
            <div className="separator"></div>
            <br />
            <form onSubmit={this.LoanHandle} className="form-control">
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

              <label>Amount</label>
              <input
                type="number"
                placeholder="Enter your amount..."
                className="form-control"
                name="amount"
                value={amount}
                onChange={this.changeHandler}
              />
              <br />
              <label>Tenor</label>
              <input
                type="number"
                placeholder="Enter your Tenor..."
                className="form-control"
                name="tenor"
                value={tenor}
                onChange={this.changeHandler}
              />
              <br />
              <button className="btn-submit">SUBMIT LOAN</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Loan;
