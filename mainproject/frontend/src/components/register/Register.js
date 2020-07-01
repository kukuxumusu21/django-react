import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRegistered, delRegistered } from '../../actions/register';

export class Register extends Component {
  static propTypes = {
    register: PropTypes.array.isRequired,
    getRegistered: PropTypes.func.isRequired,
    delRegistered: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getRegistered();
  }

  render() {
    return(
      <Fragment>
      <div className="card">
        <div className="card-divider">
          <h4>Register</h4>
        </div>
        <div className="card-section">
          <table className="unstriped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Photo</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
            { this.props.register.map(register => (
              <tr key={register.id}>
                <td>{ register.id }</td>
                <td>{ register.name }</td>
                <td>{ register.email }</td>
                <td> <img src={register.image} height="30" width="30"/> </td>
                <td><button onClick={this.props.delRegistered.bind(this, register.id)} className="hollow button alert">{" "}Delete</button></td>
              </tr>
            )) }
            </tbody>
          </table>
        </div>
      </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  register: state.register.register
});

export default connect(mapStateToProps, { getRegistered, delRegistered })(Register);
