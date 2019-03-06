import React from 'react';
import { Link } from 'react-router-dom';
// Firebase Auth Functionality
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

// Material UI
import AppBar from "../Layouts/Header";
import Button from "@material-ui/core/Button";

// Importing all routes defined in constants file
// gives every link component a specific route

// Firebase
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
// Firebase & Material UI
const NavigationAuth = () => (
  <AppBar>
    <Button>
      <Link style={{ textDecoration: 'none', color: '#64ffda' }} to={ROUTES.LANDING}></Link>
    </Button>

    <Button>
      <Link style={{ textDecoration: 'none', color: '#64ffda' }} to={ROUTES.HOME}>Home</Link>
    </Button>

    <Button>
      <Link style={{ textDecoration: 'none', color: '#64ffda' }} to={ROUTES.ACCOUNT}>Account</Link>
    </Button>
    {/* <Button>
      <Link style={{ textDecoration: 'none', color: '#64ffda' }} to={ROUTES.ADMIN}>Admin</Link>
    </Button> */}
    <Button>
      <SignOutButton />
    </Button>
  </AppBar>
);
// Firebase & Material UI
const NavigationNonAuth = () => (
  <AppBar>
    <Button>
      <Link style={{ textDecoration: 'none', color: '#64ffda' }} to={ROUTES.LANDING}>Landing</Link>
    </Button>
    <Button>
      <Link style={{ textDecoration: 'none', color: '#64ffda' }} to={ROUTES.SIGN_IN}>Sign In</Link>
    </Button>
  </AppBar >
);

export default Navigation;