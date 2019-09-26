import React, { Component } from 'react';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../sorm-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  handleSubmit = e => {
    e.prventDefault();
    this.setState({ email: '', password: '' });
  };
  handleChange = e => {
    const { name, value } = e.target;
    console.log(e);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            type="email"
            label="Email"
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            handleChange={this.handleChange}
            type="password"
            label="Passworrd"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
