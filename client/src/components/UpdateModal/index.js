import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from "../../utils/api";

export default class UpdateModal extends React.Component {
  state = {
    open: false,
    // fullName: "",
    phoneNumber: "",
    industry: "",
    city: "",
    state: "",
    company: "",
  };

  updateProfile = () =>{
      const id= this.props.id
      const {
          // fullName,
          phoneNumber,
          industry,
          city,
          state,
          company
      } = this.state;

      API.updateUser(id, {
        // fullName: fullName,
        phoneNumber: phoneNumber,
        city: city,
        state: state,
        industry: industry,
        company: company
      })
        .then(res =>{
            console.log(res)
            this.handleClose()
        })
        .then(() =>{
          this.props.loadProfile()
        })
        .catch(err=> {
            console.log(err)
        })
  }
  handleChange = name => event =>{
      this.setState({[name]: event.target.value})
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Update Profile
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update Profile</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <form noValidate autoComplete="off">
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              disabled
              value={this.props.email}
              type="email"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Full Name"
              value={this.props.user}
              disabled
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Phone Number"
              value={this.props.phoneNumber}
              onChange={this.handleChange('phoneNumber')}
              type="number"
            />  
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="City"
              value={this.props.city}
              onChange={this.handleChange('city')}
              type="string"
            />  
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="State"
              value={this.props.state}
              onChange={this.handleChange('state')}
              type="string"
            /> 
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Company"
              value={this.props.company}
              onChange={this.handleChange('company')}
              type="string"
            />  
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Industry"
              value={this.props.industry}
              onChange={this.handleChange('industry')}
              type="string"
            />                 
            </form>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.updateProfile} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
