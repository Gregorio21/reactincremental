import { Component } from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';

class SwitchIncrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        return (
            <FormControlLabel control={<Switch defaultChecked onChange={() => this.props.onChange()} color="primary" className="inner"/>} label={this.props.value[0]} className="Increment" />
        );
    }
}

export default SwitchIncrement;
