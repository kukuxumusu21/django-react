import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmits = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;

    return(
      <div className="card">
        <div className="card-divider">
          <h4 className="text-right middle">Login</h4>
        </div>
        <form onSubmit={this.onSubmits}>
          <div className="card-section">
            <div className="grid-x grid-padding-x">
              <div className="small-3 cell">
                <label for="middle-label" className="text-right middle">Username</label>
              </div>
              <div className="small-9 cell">
                <input type="text" name="username" value={username} onChange={this.onChange}/>
              </div>

              <div className="small-3 cell">
                <label for="middle-label" className="text-right middle">Password</label>
              </div>
              <div className="small-9 cell">
                <input type="password" name="password" value={password} onChange={this.onChange}/>
              </div>

              <div className="small-3 cell"></div>
              <div className="small-9 cell">
                <button type="submit" className="hollow button secondary">Submit</button>
              </div>

              <div className="small-3 cell"></div>
              <div className="small-9 cell">
                 <label>Don't have an account?</label>
                 <Link to="/register">Register</Link>
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

export default connect(mapStateToProps, { login })(Login);
