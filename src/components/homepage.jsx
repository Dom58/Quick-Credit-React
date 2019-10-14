import React, { Component } from 'react';
import loan from './../images/loan.jpg';
import gifImage from './../images/slideimages.gif';
import image from './../images/logo.png';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: null };
  }

  callAPI() {
    const baseUrl = process.env.BASE_URL;
    fetch(baseUrl)
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      // <div className="row">
      //   <div className="col-md-10 col-md-offset-1">
      //     <h2>{this.state.apiResponse != null ? this.state.apiResponse.message : ''}</h2>
      //     <br />
      //     <img src={image} alt="no Image" width="600px" height="500px" />

      //     <p>
      //       Quick Credit is an online lending platform that provides short term soft loans to
      //       individuals. This helps solve problems of financial inclusion as a way to alleviate
      //       poverty and empower low income earners.
      //     </p>
      //   </div>
      // </div>
      // +++++++++++++++++++++++++++

      <div className="content">
        <div className="card">
          <div className="left-card">
            <h1>{this.state.apiResponse != null ? this.state.apiResponse.message : ''}</h1>
            <div className="separator"></div>
            <p>
              Quick Credit is an online lending platform that provides short term soft loans to
              individuals. This helps solve problems of financial inclusion as a way to alleviate
              poverty and empower low income earners.
            </p>
            <p>
              <img src={gifImage} width="100%" />
            </p>

            <h1>Our Values</h1>
            <div className="separator"></div>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>

          <div className="right-card">
            <h1>Missions</h1>
            <div className="separator"></div>
            <p>
              Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
              quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>

            <h2>Fast & Easy Application Process Speed Up The Loan Process</h2>
            <div className="separator"></div>
            <p>
              <img src={loan} />
            </p>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet.
            </p>
            <h1>Interest Rate</h1>

            <p>
              <b>Interest Rate of 5%</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren.
            </p>

            <h1>Tenor/ Repayment period</h1>
            <p>
              <b>The Tenor divided into 12 Months</b>
            </p>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>

            <h1>Penality</h1>
            <p>
              Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
        </div>
        <br />
        <div className="card">
          <h1 id="contact" style={{ opacity: 0 }}>
            Contact
          </h1>
          <div className="contact-card">
            <h1 style={{ textAlign: 'center', color: 'white' }}>Leave a Message</h1>
            <div className="separator"></div>
            <br />
            <form className="form-control" id="contactForm">
              <label>Your Name: </label>
              <input type="text" name="name" placeholder="Enter your name" />
              <br />
              <label>Your Email: </label>
              <input type="text" name="email" placeholder="Enter your Email" />
              <br />
              <label>Your Telephone Number: </label>
              <input type="text" name="tel" placeholder="Enter your Telephone Number" />
              <br />
              <label>Message: </label>
              <textarea placeholder="Type message here..."></textarea>
              <button className="btn-submit">SUBMIT</button>
            </form>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default Homepage;
