import React, { Component } from 'react';
import image from './../images/loan.jpg';

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: null };
    }
    
    callAPI() {
        fetch("https://quick-credit-web.herokuapp.com")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                     <h2>
                     {this.state.apiResponse != null ? this.state.apiResponse.message : ''}
                     </h2>
                     <br/>
                     <img src={image} alt='no Image' width= '600px' height='500px' />

                     <p>Quick Credit is an online lending platform that provides short term soft loans to individuals. This helps solve problems of financial inclusion as a way to alleviate poverty and empower low income earners.</p>
                </div>
            </div>
        ); 
    }
}
export default Homepage;
