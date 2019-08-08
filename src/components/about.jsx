import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h2>About Us</h2>
                    <br/>
                    <p>Quick Credit is an online lending platform that provides short term soft loans to individuals. This helps solve problems of financial inclusion as a way to alleviate poverty and empower low income earners.</p>
                </div>
            </div>
        );
    }
}
export default About;
