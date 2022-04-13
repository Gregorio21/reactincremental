import "./Upgrades.css";
import { Component, Fragment } from 'react';
import { Button } from '@material-ui/core';

class Upgrades extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Fragment>

                <Button variant="contained" onClick={() => this.props.onClick3()} className='upgradeTier1'> Tier Up to: {this.props.tier + 1} cost: {this.props.tierCost} </Button>
                <Button variant="contained" onClick={() => this.props.onClick1()} className='upgradeTier1'> Upgrade Button Value Per Tick + 3 cost: {this.props.costButton} </Button>
                <Button variant="contained" onClick={() => this.props.onClick2()} className='upgradeTier1'> Upgrade Button Tick Speed + 60ms cost: {this.props.costButton} </Button>                  
                
            </Fragment>
        );
    }
}

export default Upgrades;