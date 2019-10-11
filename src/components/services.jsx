import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import business from './../images/business.png';
import search from './../images/search.png';
import image from './../images/logo.png';
import vision from './../images/vision.jpg';

class About extends Component {
  render() {
    return (
      <div className="content">
        <div className="card">
          <div className="service-card">
            <h1 style={{ textAlign: 'center', color: 'white' }}>Our Services</h1>
            <p style={{ textAlign: 'center', fontSize: '20px', color: 'white' }}>
              Speed Up The Loan Process
            </p>
            <div className="separator"></div>
            <br />
            <div className="cardOne">
              <h1>Credit Service</h1>
              <img src={business} />
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit in <a href="loan.html">for more informations</a>.
              </p>
            </div>
            <div className="cardTwo">
              <h1>Refinancing</h1>
              <img src={search} />
              <p>
                {' '}
                Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                nulla facilisi.
              </p>
            </div>
            <div className="cardThree">
              <h1>Business Enrollment</h1>
              <img src={vision} />
              <p>
                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum.
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default About;
