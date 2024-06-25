import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { username, password } = this.state;

    // Perform login logic (e.g., send data to server for validation)
    // For simplicity, let's consider a successful login when both fields are non-empty
    if (username.trim() !== '' && password.trim() !== '') {
      this.setState({ isLoggedIn: true });
      alert('Login successful!');
    } else {
      alert('Please enter both username and password.');
    }
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;

