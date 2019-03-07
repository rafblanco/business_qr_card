import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Firebase
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const PasswordForgetPage = () => (
  <div align='center'>
    <h1 style={{ textDecoration: 'none', color: '#FFFFFF' }}>Forgot Your Password?</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <div align='center'>
      <form onSubmit={this.onSubmit}>
      <h4 style={{ textDecoration: 'none', color: '#bdbdbd' }}>Email</h4>
        <TextField
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Button style={{ textDecoration: 'none', color: '#64ffda' }} disabled={isInvalid} type="submit">
          Reset My Password
        </Button>

        {error && <p>{error.message}</p>}
      </form>
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Button>
    <Link style={{ textDecoration: 'none', color: '#64ffda' }} to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </Button>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };