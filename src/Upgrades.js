import "./Upgrades.css";
import { Component } from 'react';
import { Button } from '@material-ui/core';

class Upgrades extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='rows'>
                
                <Button variant="contained" onClick={() => this.props.onClick1()} className='item'> Upgrade Button Value Per Tick + 3 cost: {this.props.costButton} </Button>
                <Button variant="contained" onClick={() => this.props.onClick2()} className='item'> Upgrade Switch Value Per Tick + 1 cost: {this.props.costSwitch} </Button>
                <Button variant="contained" onClick={() => this.props.onClick4()} className='item'> Upgrade Button Tick Speed + 60ms cost: {this.props.costButton} </Button>
                <Button variant="contained" onClick={() => this.props.onClick3()} className='item'> Upgrade Switch Tick Speed + 60ms cost: {this.props.costSwitch} </Button>
                    
                
            </div>
        );
    }
}

export default Upgrades;