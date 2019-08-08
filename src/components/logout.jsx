import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from './homepage.jsx';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = '' ;
    }

    LogoutHandle = () => {
        sessionStorage.clear('Authorization');
    }

    componentWillMount() {
        this.LogoutHandle();
        this.props.history.push('/');
    }
    render() {
        return (
            <Homepage />
        ); 
    }
    
}

export default Logout;
