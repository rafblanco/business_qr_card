import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class DisabledTabs extends React.Component {
  state = {
    value: 2
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper square>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="Your Info" />
          <Tab label="Connections" />
          <Tab label="Generate QR" />
          <Tab label="QR Scanner" />
        </Tabs>
      </Paper>
    );
  }
}

export default DisabledTabs;
