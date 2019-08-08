import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props); 

    this.state = {
        home: 'Home',
        logout: sessionStorage.getItem('Authorization')
    }  
    }   
     
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Quick Credit</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link">{this.state.home}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/loan' className="nav-link">Apply Loan</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/register' className="nav-link navbar-right">Register</Link>
                    </li>
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                    <li className="nav-item">
                        {this.state.logout != null ? <Link to='/logout' className="nav-link" style={{color:'red'}}>Logout</Link> : ' '}
                    </li>
                    </ul>
                </div>
            </nav>
        ); 
    }
}
// const About = () => {
//     return (
//         <div>
//         <h2>About Us</h2>
//         </div>
//     );
// }

export default Navbar;
