import React, { Component } from "react";
import API from "../../utils/api"

import Button from '@material-ui/core/Button';

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
            <Button onClick={() => this.deleteConnect()}>Delete</Button>
        </div>
        )
    }
}

export default DeleteBtn;
