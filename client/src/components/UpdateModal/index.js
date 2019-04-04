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
    phoneNumber: "",
    industry: this.props.industry,
    city: this.props.city,
    state: this.props.state,
    company: this.props.company,
  };

  onSubmit = event =>{
    event.preventDefault();

    const id= this.props.id
    const {
        phoneNumber,
        industry,
        city,
        state,
        company
    } = this.state; 

    API.updateUser(id, {
      fullName: this.props.fullName,
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
    console.log({ [name]: event.target.value });
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
              id="email"
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
              value={this.props.fullName}
              disabled
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              label="Phone Number"
              name="phoneNumber"
              defaultValue= {this.props.phoneNumber}
              value={this.state.phoneNumber}
              onChange={this.handleChange('phoneNumber')}
              type="number"
            />  
            <TextField
              autoFocus
              margin="dense"
              name="city"
              label="City"
              value={this.state.city}
              onChange={this.handleChange('city')}
              type="string"
            />  
            <TextField
              autoFocus
              margin="dense"
              name="state"
              label="State"
              value={this.state.state}
              onChange={this.handleChange('state')}
              type="string"
            /> 
            <TextField
              autoFocus
              margin="dense"
              name="company"
              label="Company"
              value={this.state.company}
              onChange={this.handleChange('company')}
              type="string"
            />  
            <TextField
              autoFocus
              margin="dense"
              name="industry"
              label="Industry"
              value={this.state.industry}
              onChange={this.handleChange('industry')}
              type="string"
            />                 
            </form>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
