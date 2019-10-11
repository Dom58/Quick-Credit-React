import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

class WelcomeMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: sessionStorage.getItem('Authorization')
    };
  }
  render() {
    const payload = jwt.decode(this.state.user);
    return (
      <div className="content">
        <div className="card">
          <div className="contact-card">
            <h1 style={{ textAlign: 'center', color: 'white' }}>Welcome Message</h1>
            <div className="separator"></div>
            <br />
            <div className="form-control" style={{ backgroundColor: 'white' }}>
              <p>
                Dear, valued Client
                <b>
                  {' '}
                  {payload.firstName} {payload.lastName}
                </b>{' '}
                [<b>{payload.status}]</b>, we are pleased to thank you for your support by our
                application (Quick credit Web application). And we wish to provide you a good service.
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
              </p>
              <p>
                {' '}
                Please, fill free to contact us and ask questions if any and you could use our social Media.
              </p>
              <p>
                <li> If you need to appy for loan, click the link below </li>
              </p>
              <Link
                to="/loan"
                className="btn-submit"
                style={{ padding: ' 10px', textDecoration: 'none' }}
              >
                Apply for Loan
              </Link>
              <br />
              <br />
              <p>
                <li>
                  {' '}
                  If you apply a loan later, click the link below to see the loan repayment
                  histories{' '}
                </li>
              </p>
              <Link
                to="#myLoan"
                className="btn-pending"
                style={{ padding: ' 10px', textDecoration: 'none' }}
              >
                View Loan Repayment
              </Link>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default WelcomeMessage;
