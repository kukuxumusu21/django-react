import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;

    return (
      <div className="card">
        <div className="card-divider">
          <div class="small-3 cell">
            <h4>Register</h4>
          </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="card-section">
            <div className="grid-x grid-padding-x">

                <div class="small-3 cell">
                  <label for="middle-label" class="text-right middle">Username</label>
                </div>
                <div class="small-9 cell">
                  <input type="text" name="username" onChange={this.onChange}/>
                </div>

                <div class="small-3 cell">
                  <label for="middle-label" class="text-right middle">Email</label>
                </div>
                <div class="small-9 cell">
                  <input type="email" name="email" onChange={this.onChange}/>
                </div>

                <div class="small-3 cell">
                  <label for="middle-label" class="text-right middle">Password</label>
                </div>
                <div class="small-9 cell">
                  <input type="password" name="password" onChange={this.onChange}/>
                </div>

                <div class="small-3 cell">
                  <label for="middle-label" class="text-right middle">Confirm Password</label>
                </div>
                <div class="small-9 cell">
                  <input type="password" name="password2" onChange={this.onChange}/>
                </div>

                <div class="small-3 cell"></div>
                <div class="small-9 cell">
                  <button type="submit" class="hollow button secondary">Register</button>
                </div>

                <div className="small-3 cell"></div>
                <div className="small-9 cell">
                   <label>Already have an account?</label>
                   <Link to="/login">Login</Link>
                </div>

            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
