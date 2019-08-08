import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel">
                        <h2>Apply Loan Page</h2>
                        <form action="/loan" method="POST">
                            <label>Full Name</label>
                            <input type="text" value="Dominique Xavier" className="form-control" readOnly/>
                            <br />
                            <label>Email</label>
                            <input type="text" value="dom58@gmail.com" className="form-control" readOnly/>
                            <br />
                            <label>Type of Loan</label>
                            <select name="loan_type" className="form-control">
                                <option value="personal_loan" selected>Personal Loan</option>
                                <option value="mortages">Mortages</option>
                                <option value="small-business">Small Business Loans</option>
                            </select>
                            <br />
                            <label>Amount</label>
                            <input type="number" placeholder="Enter your amount..." className="form-control"/>
                            <br />
                            <label>Tenor</label>
                            <input type="number" placeholder="Enter your Tenor..." className="form-control"/>
                            <br />
                            <button className="btn-primary form-control">SUBMIT LOAN</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
