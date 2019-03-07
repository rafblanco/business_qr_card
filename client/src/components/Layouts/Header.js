import React from "react";
import { Link } from 'react-router-dom';
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import * as ROUTES from '../../constants/routes';


// import SwipeableDrawer from '../SwiperDrawer/SwiperDrawer';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/core/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#424242' }}>
        <Toolbar>
          <Typography variant="headline" color="inherit" style={{ flex: 1 }}>    <Link style={{ textDecoration: 'none', color: '#ffffff' }} to={ROUTES.LANDING}>
            CONNECTIONS      </Link>
          </Typography>

          <Typography style={{
            flex: -1}}>
            {props.children}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);