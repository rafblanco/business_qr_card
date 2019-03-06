import React, { Component } from 'react';
import { compose } from 'recompose';

import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import API from '../../utils/api';
import Paper from "./../Layouts/TabsNPageViews"

class HomePage extends Component{
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      user: "",
      email: null,
      phoneNumber: "",
      industry: "",
      city: "",
      state: "",
      company: "",
      connections: []
    };
  }
  

  componentDidMount() {
    const currentUser = this.props.firebase.auth.currentUser.email
    this.loadProfile(currentUser)
  };

  loadProfile(email){
    console.log(email)
      API.getUser({email: email})
      .then(res => {
        console.log(res)
        const data = res.data[0]
        this.setState({user: data.fullName, email: data.email, phoneNumber: data.phoneNumber, industry: data.industry, city: data.city, state: data.state, company: data.company, id: data._id})
      })
      .then(() =>{
        API.getConnections(this.state.id)
          .then(res => {
            res.data.connections.map(connection => {
              return this.setState({
                connections: [...this.state.connections, connection]
              })
            })
          }) 
      })
      .catch(err => console.log(err))
  };
  

  render(){
    return <div>
      <Paper
    user= {this.state.user} 
    email= {this.state.email} 
    phoneNumber= {this.state.phoneNumber} 
    industry= {this.state.industry} 
    city= {this.state.city} 
    state= {this.state.state}
    company= {this.state.company}     
    connections = {this.state.connections}  
    id = {this.state.id}
      />

    </div>
  }
};

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(HomePage);