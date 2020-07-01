import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addReg } from '../../actions/register';

export class Forms extends Component {
  state = {
    name: '',
    email: '',
    image: ''
  };

  static propTypes = {
    addReg: PropTypes.func.isRequired
  }

  onChange = e => this.setState({
    [e.target.name]: e.target.value
  });

  onSubmit = e => {
    e.preventDefault();

    const upload_file = e.target.image.files[0];

    const reg = new FormData();
    reg.append('name', this.state.name);
    reg.append('email', this.state.email);
    reg.append('image', upload_file);

    this.props.addReg(reg);
    this.setState({
      name: '',
      email: '',
      image: '',
    });
  };

  render() {
    return(
      <div className="card">
        <div className="card-divider">
          <h4>Forms</h4>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="card-section">
            <div class="grid-x grid-padding-x">
              <div class="small-3 cell">
                <label for="middle-label" class="text-right middle">Name</label>
              </div>
              <div class="small-9 cell">
                <input type="text" name="name" onChange={this.onChange}/>
              </div>

              <div class="small-3 cell">
                <label for="middle-label" class="text-right middle">Email</label>
              </div>
              <div class="small-9 cell">
                <input type="email" name="email" onChange={this.onChange}/>
              </div>

              <div class="small-3 cell">
                <label for="middle-label" class="text-right middle">Photo</label>
              </div>
              <div class="small-9 cell">
                <input type="file" name="image" accept="image/png, image/jpeg" onChange={this.onChange}/>
              </div>

              <div class="small-3 cell"></div>
              <div class="small-9 cell">
                <button type="submit" class="hollow button secondary">Save</button>
              </div>

            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addReg })(Forms);
