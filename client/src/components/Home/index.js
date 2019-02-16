import React, { Component } from 'react';

import { withAuthorization } from '../Session';
import API from '../../utils/API';
import MyInfoCard from "./../AppContent/MyInfo";
import Expansion from "./../AppContent/Expansion";

class HomePage extends Component{
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      users: null,
      email: "",
      phoneNumber: "",
      industry: "",
      city: "",
      state: "",
      company: ""
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }
  loadProfile(){
    this.props.firebase.users().on('value', snapshot => {
      this.setState({
        users: snapshot.val(),
      });
    }).then(
      API.getUser({fullName: this.state.users})
      .then(res =>
        this.setState({ email: res.data.email, phone: res.data.phoneNumber, industry: res.data.industry, city: res.data.state, company: res.data.company, id: res.data._id })
      )
      .catch(err => console.log(err))
    )
    
  }

  render(){
    return <div>
    <MyInfoCard />
    </div>
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);