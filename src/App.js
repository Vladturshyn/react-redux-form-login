import React, { Component } from 'react';
import Login from './Login.js';
import {connect} from 'react-redux';

import {addNewForm} from '../src/action/index'


class App extends Component {

  onSubmit = e => {
    e.preventDefault();
    const form = document.querySelector('form');
    
      // const data = new FormData();
      // data.append('title', form.title.value);
      // data.append('author', form.author.value);
      // data.append('description', form.description.value);
      // data.append('published', form.description.value);
      const data = {
        email: form.email.value,
        password: form.password.value,
        name: form.name.value
      }
      this.props.addNewForm(data);
    form.reset();

  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit} id="form">
          <input type="email" name="email" placeholder="email" />
          <br />
          <input type="password" name="password" placeholder="password" />
          <br />
          <input type="text" name="name" placeholder="name" />
          <br />
  
          <br />
          <button>REGISTER</button>
        </form>
        <Login />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addNewForm: form => dispatch(addNewForm(form)),
  };
}

export default connect(null,mapDispatchToProps)(App);
