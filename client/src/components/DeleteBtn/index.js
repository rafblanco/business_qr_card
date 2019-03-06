import React, { Component } from "react";
import API from "../../utils/api"



class DeleteBtn extends Component{
    deleteConnect = () =>{
        API.removeConnection(this.props.id)
            .then()
            .catch(err => console.log(err))
    }
    render(){
        return (
        <div>
            <button onClick={this.deleteConnect()}>Delete</button>
        </div>
        )
    }
}

export default DeleteBtn;
