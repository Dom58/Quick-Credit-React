import React , { Component} from 'react';
import Navbar from './components/navbar.jsx';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import About from './components/about.jsx';
import Login  from './components/signin.jsx';
import Register  from './components/signup.jsx';
import Loan  from './components/apply-loan.jsx';
import Homepage  from './components/homepage.jsx';
import Logout  from './components/logout.jsx';
import users  from './components/allusers';

const App = () => {
        return (
            <BrowserRouter>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <React.Fragment> */}
                        <Navbar />
                        {/* </React.Fragment> */}
                        <Switch>
                            <Route exact path="/" component={Homepage} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/loan" component={Loan} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/users" component={users} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </div>
                </div>
            </div>
            </BrowserRouter>
        );
}
export default App;
