import React from "react";
import * as ROUTES from '../../constants/routes';

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  Button: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <AppBar position="static" style={{ background: '#424242' }}>
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Connections   
      </Typography>
      <Button color='inherit' to={ROUTES.SIGN_IN}>Sign In</Button>
    </Toolbar>
  </AppBar>
  </div>
  )
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header);
