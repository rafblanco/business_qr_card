import React, { Component } from "react";

import Button from '@material-ui/core/Button';

class DeleteBtn extends Component{
    render(){
        return (
        <div>
            <Button {...this.props}>Delete</Button>
        </div>
        )
    }
}

export default DeleteBtn;
