import { Component } from 'react';
import { Button, Tooltip } from '@material-ui/core';

class ButtonIncrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        const colors = ['blue','green'];
        return (           
            <Tooltip title="Click Here" arrow>
                <Button variant="contained" color="primary" onClick={() => this.props.onClick()} className={this.props.className}> {this.props.value[1]} points per click </Button>
            </Tooltip>
        );
    }
}

export default ButtonIncrement;
