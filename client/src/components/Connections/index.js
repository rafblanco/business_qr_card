import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteBtn from "../DeleteBtn"
import API from "../../utils/api";

const styles = {
  root: {
    width: "100%"
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular
  }
};
class Connections extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    connections: this.props.connections,
    info: []
    }
  }
  componentDidMount(){
    this.infoAPI()
  };

  infoAPI = () =>{
      this.state.connections.map(connection => { 
        console.log(connection)
          return API.getUser({email: connection})
            .then(res =>{
              console.log(res)
              this.setState({info: [...this.state.info, res.data[0]]})              
            })
            .catch(err => console.log(err))
      })
  };

  render() {
    return (
      <div>
        {this.state.info.map(connection => {
          return (
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className=""> {connection.fullName} </Typography>

                <DeleteBtn />
              </ExpansionPanelSummary>

              <ExpansionPanelDetails>
                <Typography>
                  <p>Phone Number: {connection.phoneNumber}</p>
                  <p>Industry: {connection.industry}</p>
                  <p>Company: {connection.company}</p>
                  <p>City: {connection.city}</p>
                  <p>State: {connection.state}</p>
                  <p>Email: </p><a href={`mailto:${connection.email}`}>{connection.email}</a>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

// Connections.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Connections);
