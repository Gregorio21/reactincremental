import { Component } from 'react';
import { Button } from '@material-ui/core';

class ButtonIncrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        return (           
            <Button variant="contained" color="primary" onClick={() => this.props.onClick()} className="Increment"> {this.props.value[0]} </Button>
        );
    }
}

export default ButtonIncrement;
