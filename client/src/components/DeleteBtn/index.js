import React, { Component } from "react";
import API from "../../utils/api"



class DeleteBtn extends Component{
    deleteConnect = () =>{
        console.log(this.props.id)
        API.removeConnection(this.props.id)
            .then(res =>{
                console.log(res)
            })
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
