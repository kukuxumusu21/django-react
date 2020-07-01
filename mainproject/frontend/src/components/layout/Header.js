import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="menu">
        <span className="label">
          <strong>{user ? `Welcome ${user.username}` : ''}</strong>
        </span>
        <li>
          <button onClick={this.props.logout} className="hollow button secondary">
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="menu">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    )

    return (
      <div className="top-bar callout">
        <div className="top-bar-left">

        </div>
        <div className="top-bar-right">
            { isAuthenticated ? authLinks : guestLinks }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
