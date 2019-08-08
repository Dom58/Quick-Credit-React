import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            email:'',
            password:''
        }
    }
    changeHandler = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    LoginHandle = e => {
        e.preventDefault()
        axios.post('https://quick-credit-web.herokuapp.com/api/v2/auth/signin', this.state)
        .then(response => {
            if(response){
                document.getElementById('theSuccess').style.display = "block"; 
                document.getElementById('theError').style.display = "none";
                document.getElementById('theSuccess').innerHTML = response.data.message + ' '+' as '+ response.data.data.lastName ;

                const {token} = response.data.data
                const user = sessionStorage.setItem('Authorization', token);
                
                console.log(sessionStorage.getItem('Authorization'));

                document.getElementById('email').value = ''; 
                document.getElementById('password').value = '';
                this.props.history.push('/loan');
            }
            console.log(response.data.data)
        })
        .catch(error => {
            if(error){
                document.getElementById('theError').style.display = "block"; 
                document.getElementById('theSuccess').style.display = "none";
                document.getElementById('theError').innerHTML = 'Wrong Email or Password'
            } 
        })
    }

    render() {
        const { email,password}= this.state
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h2>Login Page</h2>
                    <div className="alert alert-danger" role="alert" id="theError" style={{display:'none'}}> </div>
                    <div className="alert alert-success" role="alert" id="theSuccess" style={{display:'none'}}></div>
                    <form onSubmit={this.LoginHandle}>
                        <label>Email</label>
                        <input type="email" name="email" value={email} id="email"  placeholder="Enter your email..." className="form-control" onChange={this.changeHandler}/>
                        <br />
                        <label>Password</label>
                        <input type="password" name="password" value={password} id="password" placeholder="Enter your password..." className="form-control" onChange={this.changeHandler}/>
                        <br />
                        <button className="btn-primary form-control" onClick={this.login}>LOGIN</button>
                    </form>
                </div>
        </div>
        );
    }
}
export default Login;
