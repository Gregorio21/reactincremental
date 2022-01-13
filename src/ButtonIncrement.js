import { Component } from 'react';
import { Button } from '@material-ui/core';

class ButtonIncrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        const colors = ['blue','green'];
        return (           
            <Button variant="contained" color="primary" onClick={() => this.props.onClick()} className={this.props.className}> {this.props.value[0]} {colors[this.props.tier]} </Button>
        );
    }
}

export default ButtonIncrement;
