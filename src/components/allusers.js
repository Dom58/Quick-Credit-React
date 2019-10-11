import React, { Component } from 'react';
import axios from 'axios';
import TimeAgo from 'react-timeago';
import Modal from 'react-responsive-modal';
import englishStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import { handleResponse, handleError } from '../redux/appApi/apiUtils';

const baseUrl = process.env.BASE_URL;
const tokenVar = sessionStorage.getItem('Authorization');
const config = {
  headers: { Authorization: sessionStorage.getItem('Authorization') }
};
const formatter = buildFormatter(englishStrings);

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      status: '',
      isadmin: '',
      email: ''
    };
  }

  onChangeHandler(e) {
    e.preventDefault();
    this.setState({ status: e.target.value });
  }

  onVerifyHandler(e) {
    e.preventDefault();
    const verifyUser = {
      status: this.state.status
    };
    axios
      .patch(`${baseUrl}/api/v2/users/${this.state.email}/verify`, verifyUser, config)
      .then(response => {
        const users = response.data.message;
        console.log(users);
      })
      .catch(handleError);
    this.setState({ open: false });
  }

  componentWillMount() {
    axios
      .get(`${baseUrl}/api/v2/auth/users`, config)
      .then(response => {
        const users = response.data.data;
        this.setState({ users });
      })
      .catch(handleError);
  }

  //   componentDidMount() {
  //     const baseUrl = process.env.BASE_URL;
  //     const tokenVar = sessionStorage.getItem('Authorization');
  //     var config = {
  //       headers: { Authorization: sessionStorage.getItem('Authorization') }
  //     };
  //     axios
  //       .get(`${baseUrl}/api/v2/auth/users`, config)
  //       .then(response => {
  //         const users = response.data.data;
  //         this.setState({ users });
  //         //   console.log('===========>', this.state.users);

  //         // return users;
  //       })
  //       .catch(handleError);
  //   }

  //   editUser = e => {
  //     e.preventDefault();
  //     alert('Yesssss!');
  //   };

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <h2>
              {this.state.users !== undefined ? (
                <b className="btn btn-success">{this.state.users.length}</b>
              ) : (
                ''
              )}{' '}
              All Users
            </h2>
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>User</th>
                  <th>CreatedAt</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users !== undefined
                  ? this.state.users.map(user => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.status}</td>
                        <td>
                          <b>{user.isadmin === true ? 'Admin' : 'Normal'}</b>
                        </td>
                        <td>
                          <TimeAgo date={user.created_on} formatter={formatter} />
                        </td>
                        <td>
                          <button
                            type="submit"
                            className="btn btn-success"
                            onClick={() =>
                              this.setState({
                                open: true,
                                status: user.status,
                                isadmin: user.isadmin,
                                email: user.email,
                                lastname: user.lastname
                              })
                            }
                          >
                            Edit
                          </button>
                          <Modal
                            open={this.state.open}
                            onClose={() => this.setState({ open: false })}
                            center
                            focusTrapped
                          >
                            <br />
                            <form
                              onSubmit={this.onVerifyHandler.bind(this)}
                              className="updateCommentForm"
                            >
                              <h2>Verify this User "{this.state.email}"</h2>
                              <br />
                              <select
                                name="status"
                                className="form-control"
                                onChange={this.onChangeHandler.bind(this)}
                              >
                                <option disabled>{this.state.status}</option>
                                <option value="unverified">Unverified</option>
                                <option value="verified">Verified</option>
                              </select>
                              <br />
                              <button type="submit" className="btn btn-primary">
                                Verify a User
                              </button>
                            </form>
                          </Modal>
                        </td>
                        <td>
                          <button type="submit" className="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default User;
