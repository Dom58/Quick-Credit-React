import React, { Component } from 'react';
import image from './../images/logo.png';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="footer">
          <div id="logofooter" style={{ marginTop: '30px' }}>
            <img src={image} height="180px" />
          </div>
          <p>
            &copy;2019 Quick Credit App. Developed by{' '}
            <a href="tel:+250788863488"> +250788863488 </a>
          </p>
          <p style={{ fontSize: '20px' }}>
            <a href="#facebook"> Facebook </a> | <a href="#twitter"> Twitter </a> |{' '}
            <a href="#instagram"> Instagram </a>
          </p>
        </div>
      </>
    );
  }
}
export default Footer;
