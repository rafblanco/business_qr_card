import React from "react";
import PropTypes from "prop-types";
// Material UI
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageAvatars from '../Avatar/index';

// QR bit
import QRcode from '../QRpart/QRcode'

const styles = theme => ({
  card: {
    align: 'center'
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  bigAvatar: {
    // backgroundColor: [900]
    margin: 10,
    width: 60,
    height: 60,
  },
  typography: {
    margin: theme.spacing.unit * 2
  }
});

class MyInfoCard extends React.Component {
  state = { expanded: true };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} variant="#">
      
        <CardHeader
          avatar={
            <Avatar aria-label="Name" className={classes.bigAvatar}>
              <ImageAvatars />
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.user}
          subheader=""
        />
        <CardContent>
          <Typography component="p" variant="inherit" gutterBottom>

            <strong>Email: </strong>{this.props.email}
            <br />
            <strong>Phone Number: </strong>{this.props.phoneNumber}
            <br />
            <strong>City: </strong>{this.props.city}
            <br />
            <strong>State: </strong>{this.props.state}

            <strong>Company: </strong>{this.props.company}

          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>

             <h1 align='center'>My Unique QR</h1>

            <QRcode email= {this.props.email}/>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

MyInfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyInfoCard);
