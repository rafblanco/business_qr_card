import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import MyInfoCard from '../AppContent/MyInfo';
import SimpleExpansionPanel from '../AppContent/Expansion';
import QRscanner from '../QRpart/QRscanner';
import QRcode from '../QRpart/QRcode';


// Not working correctly __ using inline styling instead //
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7b7b7b',
      main: '#5b5b5b',
      dark: '#3f3f3f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#959595',
      main: '#7b7b7b',
      dark: '#565656',
      contrastText: '#000',
    },
  },
});

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
          <AppBar position="static" style={{ background: '#7b7b7b' }}>
            <Tabs 
            indicatorColor="secondary"
            variant="fullWidth" value={value} onChange={this.handleChange} >
              <LinkTab label="My Info" href="page1" />
              <LinkTab label="My Connections" href="page2" />
              <LinkTab label="QR" href="page3" />
            </Tabs>
          </AppBar>

          {/* Page 1 - My Info */}
          {value === 0 && <TabContainer>
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
            <SimpleExpansionPanel     
              connections = {this.props.connections}  
            />
          </TabContainer>}

          {/* Page 3 - QR */}
          {value === 2 && <TabContainer>

            {/* placeholder image */}
            <div align='center'>
            <h1>Generate QR</h1>
            <br/>
            <QRcode email ={this.props.email}/>
            {/* <img src={ require('../../images/scanmeQR.png') } /> */}
            <h1>Read QR</h1>
            <br/>
            <QRscanner />
            {/* <img src={ require('../../images/scanmeQR.png') } /> */}
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