import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Error from './../redux/errorPanel.js';


class Register extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            address: '',
            email: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    signUpHandle = e => {
        e.preventDefault()
        axios.post('http://127.0.0.1:4000/api/v2/auth/signup', this.state)
        .then(response => {
            if(response){
                document.getElementById('theSuccess').style.display = "block"; 
                document.getElementById('theError').style.display = "none";
                document.getElementById('theSuccess').innerHTML = response.data.message + ' '+' as '+ response.data.data.lastName ;
            }
            // console.log(response)

        })
        .catch(error => {
            if(error){
                document.getElementById('theError').style.display = "block"; 
                document.getElementById('theSuccess').style.display = "none";
                document.getElementById('theError').innerHTML = 'Error: Failed to signup!';
            }
            console.log(error)
        })
    }
    render() {
        const { firstname, lastname, address,email,password}= this.state
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel">
                       <form onSubmit={this.signUpHandle}> <h2>Register Page</h2>
                       <div className="alert alert-danger" role="alert" id="theError" style={{display:'none'}}> </div>
                    <div className="alert alert-success" role="alert" id="theSuccess" style={{display:'none'}}></div>
                            <label>First Name</label>
                            <input type="text" name="firstname" value={firstname} placeholder="Enter your first name..." className="form-control" onChange={this.changeHandler}/>
                            <br />
                            <label>Second Name</label>
                            <input type="text" name="lastname" value={lastname} placeholder="Enter your second name..." className="form-control" onChange={this.changeHandler}/>
                            <br />
                            <label>Address</label>
                            <input type="text" name="address"  value={address} placeholder="Enter your address..." className="form-control" onChange={this.changeHandler}/> 
                            <br />
                            <label>Email</label>
                            <input type="email" name="email" value={email} placeholder="Enter your email..." className="form-control" onChange={this.changeHandler}/>
                            <br />
                            <label>Password</label>
                            <input type="password" name="password" value={password} placeholder="Enter your password..." className="form-control" onChange={this.changeHandler}/>
                            <br />
                            <button className="btn-primary form-control">SIGNUP</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
