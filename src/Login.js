import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addNewLogin} from '../src/action/index';

class Login extends Component {
    onSubmit = e => {
        e.preventDefault();
        const form = document.querySelector('#login');
          const data = {
            email: form.email.value,
            password: form.password.value,
          }
          this.props.addNewLogin(data);
          form.reset();
      }
    
  render() {
    return (
      <div>
            <form onSubmit={this.onSubmit} id="login">
                <input type="email" name="email" placeholder="email" />
                <br />
                <input type="password" name="password" placeholder="password" />
                <br />
                <button>Login</button>
            </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewLogin: form => dispatch(addNewLogin(form)),
    };
  }

export default connect(null,mapDispatchToProps)(Login);
