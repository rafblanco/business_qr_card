import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';

// Firebase
import { withFirebase } from '../Firebase';


const SignOutButton = ({ firebase }) => (
  <Button style={{ textDecoration: 'none', color: '#64ffda' }} type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);