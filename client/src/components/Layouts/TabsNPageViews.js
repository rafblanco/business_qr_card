import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MyInfoCard from '../AppContent/MyInfo';
import QRscanner from '../QRpart/QRscanner';
import QRcode from '../QRpart/QRcode';
import Connections from "../Connections/index";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 10 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static" style={{ background: '#212121' }}>
            <Tabs 
            indicatorColor="secondary"
            variant="fullWidth" value={value} onChange={this.handleChange} >
              <LinkTab label="My Info" href="page1" />
              <LinkTab label="My Connections" href="page2" />
              <LinkTab label="QR" href="page3" />
            </Tabs>
          </AppBar>


          {/* Page 1 - My Info */}

          {value === 0 && <TabContainer  >
            <MyInfoCard    
          user= {this.props.user} 
          email= {this.props.email} 
          phoneNumber= {this.props.phoneNumber} 
          industry= {this.props.industry} 
          city= {this.props.city} 
          state= {this.props.state}
          company= {this.props.company}
          />
          </TabContainer>}


          {/* Page 2 - My Connections */}

          {value === 1 && <TabContainer>

            <Connections 
            connections = {this.props.connections}
            loadProfile = {this.props.loadProfile}
            />
          </TabContainer>}


          {/* Page 3 - QR */}

          {value === 2 && <TabContainer>

            {/* placeholder image */}
            <div align='center'>
            <h1>My Unique QR</h1>
            <br/>
            <QRcode email ={this.props.email}/>

            <h1>Scan QR</h1>
            <br/>
            <QRscanner 
            id={this.props.id}
            loadProfile = {this.props.loadProfile}
            />
            </div>

          </TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);