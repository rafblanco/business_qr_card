import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
// Firebase Auth
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

// Material UI
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const SignInPage = () => (
  <div align='center'>
    <h1 style={{ textDecoration: 'none', color: '#FFFFFF' }}>Sign In</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div align='center'>
      <form onSubmit={this.onSubmit}>
      <h4 style={{ textDecoration: 'none', color: '#FFFFFF' }}>Email</h4>
        <TextField
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="email@domain.com"
        />
        <br/>
        <h4 style={{ textDecoration: 'none', color: '#FFFFFF' }}>Password</h4>
        <TextField
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
<br/>
        <Button style={{ textDecoration: 'none', color: '#64ffda' }} disabled={isInvalid} type="submit">
          Sign In
        </Button>

        {error && <p>{error.message}</p>}
      </form>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };

