import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class Loan extends Component {
    
    constructor(props) {
        super(props); 

        this.state = {
            tenor:'',
            amount:'',
        }
    }
    
             
    changeHandler = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    LoanHandle = e => {
        e.preventDefault()
        const tokenVar = sessionStorage.getItem('Authorization');
        if(!tokenVar){
            console.log('Not logged in');
        }
        else
        {  
        
        axios.post('https://quick-credit-web.herokuapp.com/api/v2/loans', this.state)
        .then(response => {
            if(response){
                document.getElementById('theSuccess').style.display = "block"; 
                document.getElementById('theError').style.display = "none";
                document.getElementById('theSuccess').innerHTML = response.data.message + ' '+' as '+ response.data.data ;

            }
            console.log(response.data.data)
        })
        .catch(error => {
            if(error){
                document.getElementById('theError').style.display = "block"; 
                document.getElementById('theSuccess').style.display = "none";
                document.getElementById('theError').innerHTML = error
            } 
        })
    }
    }
    render() {
        const { tenor,amount}= this.state
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel">
                        <h2>Apply Loan Page</h2>
                        <div className="alert alert-danger" role="alert" id="theError" style={{display:'none'}}> </div>
                        <div className="alert alert-success" role="alert" id="theSuccess" style={{display:'none'}}></div>
                        <form onSubmit={this.LoanHandle}>
                            <label>Type of Loan</label>
                            <input type="text" placeholder="Enter type of loan..." className="form-control"/>
                            <br />
                            <label>Amount</label>
                            <input type="number" placeholder="Enter your amount..." className="form-control" name="amount" value={amount} onChange={this.changeHandler}/>
                            <br />
                            <label>Tenor</label>
                            <input type="number" placeholder="Enter your Tenor..." className="form-control" name="tenor" value={tenor} onChange={this.changeHandler}/>
                            <br />
                            <button className="btn-primary form-control">SUBMIT LOAN</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Loan;
