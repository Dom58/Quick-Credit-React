import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Error extends Component {
    render() {
        return (
            <div className="row">
                <div className="panel panel-warning">
                    <h2>{error}</h2>
                </div>
            </div>
        );
    }
}
export default Error;
