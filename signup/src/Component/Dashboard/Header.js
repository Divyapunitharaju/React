import React, { Component } from 'react';
import Login from '../../Pages/Login';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }

  handleLoginButtonClick = () => {
    this.setState({ showLogin: !this.state.showLogin });
  };

  render() {
    return (
      <div className='top'>
        {this.state.showLogin && <Login />}
        <button className='login' onClick={this.handleLoginButtonClick}>Login</button>
        <button className='Signup'>Signup</button>
      </div>
    );
  }}

export default Header;
