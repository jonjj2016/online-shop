import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../sorm-input/form-input.component';
import './sign-up.style.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password, confirmPassword, displayName } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords dontmatch');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.error(err);
    }
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, password, confirmPassword, displayName } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            type="email"
            label="Email"
            value={email}
            required
          />
          <FormInput
            name="displayName"
            handleChange={this.handleChange}
            type="text"
            label="Name"
            value={displayName}
            required
          />
          <FormInput
            name="password"
            handleChange={this.handleChange}
            type="password"
            label="Password"
            value={password}
            required
          />
          <FormInput
            name="confirmPassword"
            handleChange={this.handleChange}
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
