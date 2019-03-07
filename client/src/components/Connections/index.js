import React, { Component } from "react";

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
          return API.getUser({email: connection.new})
            .then(res =>{
              console.log(res)
              this.setState({info: [...this.state.info, res.data[0]]})              
            })
            .catch(err => console.log(err))
      })
  };
  deleteConnect = id => {
    console.log(id)
    API.removeConnection(id)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        {this.state.info.map((connection, index) => {
          return (
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="">{connection.fullName} </Typography>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails>
                <Typography>
                  <p><strong>Phone Number: </strong>{connection.phoneNumber}</p>
                  <p><strong>Industry: </strong>{connection.industry}</p>
                  <p><strong>Company: </strong>{connection.company}</p>
                  <p><strong>City: </strong>{connection.city}</p>
                  <p><strong>State: </strong>{connection.state}</p>
                  <p><strong>Email: </strong><a href={`mailto:${connection.email}`}>{connection.email}</a></p>

                  <DeleteBtn onClick={() =>this.deleteConnect(this.state.connections[index]._id)}  />

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
