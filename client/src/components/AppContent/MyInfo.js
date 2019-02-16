import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  card: {
    maxWidth: 400
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
  avatar: {
    backgroundColor: [900]
  },
  typography: {
    margin: theme.spacing.unit * 2
  },
  color: grey['900']  
});

class MyInfoCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} alignContent='stretch'>
        <CardHeader
          avatar={
            <Avatar aria-label="Name" className={classes.avatar}>
              N
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title=""
          subheader="My Contact Info"
        />
        <CardContent>
          <Typography component="p">
            My Name
            {/* {{this.state.fullName}} */}
            <br /> Email
            {/* {{this.state.fullName}} */}
            <br /> Phone Number
            {/* {{this.state.fullName}} */}
            <br /> City
            {/* {{this.state.fullName}} */}
            <br />
            State
            {/* {{this.state.fullName}} */}
            <br />
            Company
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add To My Connections">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Scan QR">
            <ShareIcon />
          </IconButton>
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
            {/* nested modal for QR Code Maybe hits Generate API ? */}
            <CardMedia
              className={classes.media}
              image="https://www.researchgate.net/profile/Bob_Frankston/publication/260992182/figure/fig2/AS:635336644390912@1528487468116/An-example-of-a-QR-code.png"
              title="QR"
            />
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
