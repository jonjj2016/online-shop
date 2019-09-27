import React, { Component } from 'react';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../sorm-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
  };
  handleChange = e => {
    const { name, value } = e.target;

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
