import React from "react";
import { Link } from 'react-router-dom';
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import * as ROUTES from '../../constants/routes';


export default props => (
  <AppBar position="static" style={{ background: '#424242' }}>
    <Toolbar>

      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>    <Link style={{ textDecoration: 'none', color: '#ffffff' }} to={ROUTES.LANDING}>
        CONNECTIONS      </Link>
      </Typography>


      <Typography style={{flex: -1
      }}>
        {props.children}
      </Typography>
    </Toolbar>
  </AppBar>
);