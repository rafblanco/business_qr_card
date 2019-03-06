import React from "react";

// Firebase
import { withAuthorization, AuthUserContext } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

// Material UI Paper
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const AccountPage = () => (
  <div>
  <AuthUserContext.Consumer>
    {authUser => (
      <div align='center' style={{ textDecoration: 'none', color: '#64ffda' }}>
        <h1 style={{ textDecoration: 'none', color: '#ffffff' }}>Logged In As: <br /> </h1>{authUser.email}
        <PasswordForgetForm />
        <PasswordChangeForm />
        <br />
        <h2 style={{ textDecoration: 'none', color: '#64ffda' }}>Upload Profile Photo</h2>
        <input type="file" />
      </div>
    )}
  </AuthUserContext.Consumer>
  </div>
);

const condition = authuser => !!authuser;

export default withAuthorization(condition)(AccountPage);
