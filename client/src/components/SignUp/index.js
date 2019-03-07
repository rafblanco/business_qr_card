import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import API from "../../utils/api";

// to organize our higher-order components. order doesn't matter bc higher order components don't depend on each other
import { compose } from "recompose";

// makes firebase instance available in signupform components props
// import { FirebaseContext } from '../Firebase';
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

// Material UI
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const SignUpPage = () => (
  <div align='center'>
    <h1 style={{ textDecoration: 'none', color: '#bdbdbd' }}>Create New Account</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  phoneNumber: "",
  industry: "",
  city: "",
  state: "",
  company: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  // pass all the form data to the Firebase Auth API via auth interface in firebase class
  onSubmit = event => {
    event.preventDefault();

    const {
      username,
      email,
      phoneNumber,
      industry,
      city,
      state,
      company,
      passwordOne
    } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        // to redirect the user after successful signup
      })
      .then(() => {
        API.createUser({
          fullName: username,
          phoneNumber: phoneNumber,
          city: city,
          state: state,
          email: email,
          industry: industry,
          company: company
        })
          .then(() => {
            this.props.history.push(ROUTES.HOME);
          })
          .catch(err => console.log(err));
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    console.log({ [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      phoneNumber,
      industry,
      city,
      state,
      company,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    // validation, boolean to enable or disable the submit button
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";



    return (
      <div style={{ textDecoration: 'none', color: '#FFFFFF' }}>
        <p>Full Name</p>
        <form onSubmit={this.onSubmit}>
          <TextField
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="J. Cole"
          />
          <p>Email</p>
          <TextField
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="j.Cole@rap.com"
          />
          <p>Phone Number</p>
          <TextField
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.onChange}
            type="text"
            placeholder="(917) 456-9876"
          />
          <p>Industry</p>
          <TextField
            name="industry"
            value={industry}
            onChange={this.onChange}
            type="text"
            placeholder="Technology"
          />
          <p>City</p>
          <TextField
            name="city"
            value={city}
            onChange={this.onChange}
            type="text"
            placeholder="New York"
          />
          <p>State</p>
          <TextField
            name="state"
            value={state}
            onChange={this.onChange}
            type="text"
            placeholder="New York"
          />
          <p>Company</p>
          <TextField
            name="company"
            value={company}
            onChange={this.onChange}
            type="text"
            placeholder="Google"
          />
          <p>Password</p>
          <TextField
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Must be 6 or more characters"
          />
          <p>Confirm Password</p>
          <TextField
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <br />
          <Button style={{ textDecoration: 'none', color: '#64ffda' }} disabled={isInvalid} type="submit">
            Create Account
        </Button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p style={{ textDecoration: 'none', color: '#FFFFFF' }}>
    Don't have an account? 
    <br/>
    <Button>
    <Link style={{ textDecoration: 'none', color: '#64ffda' }} to={ROUTES.SIGN_UP}>Sign Up</Link>
    </Button>
  </p>
);

// const SignUpForm = withRouter(withFirebase(SignUpFormBase));

// to redirect the user after successful signup, with npm 'compose'

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
