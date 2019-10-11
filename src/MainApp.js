import React, { Component } from 'react';
import Navbar from './components/navbar.jsx';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Services from './components/services.jsx';
import Login from './components/signin.jsx';
import Register from './components/signup.jsx';
import Loan from './components/apply-loan.jsx';
import Homepage from './components/homepage.jsx';
import Footer from './components/footer.js';
import Logout from './components/logout.jsx';
import WelcomeMessage from './components/welcome-message';
import users from './components/allusers';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        {/* <React.Fragment> */}
        <Navbar />
        {/* </React.Fragment> */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/services" component={Services} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/loan" component={Loan} />
          <Route path="/logout" component={Logout} />
          <Route path="/users" component={users} />
          <Route path="/welcome" component={WelcomeMessage} />
          <Redirect from="*" to="/" />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
