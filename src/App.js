import './App.css';
import { Component } from 'react';
import { Button, Badge, ThemeProvider } from '@material-ui/core';
import { withStyles } from "@material-ui/core";
import ButtonIncremenet from './ButtonIncrement'
import SwitchIncrement from './SwitchIncrement';
import { green, blue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import Upgrades from './Upgrades';

const theme = createTheme({
    status: {
        success: {
            main: green[500],
            contrastText: '#000000',
        },
    },
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: blue[500],
        },
        default: {
            main: green[500],
            contrastText: '#000000',
        },
    },
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonState: [0,3,300,300],
            tab: 1,
            switchState: [0,1,300,100],

        };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.updateButtonValue(), this.state.buttonState[2]);
        this.interval2 = setInterval(() => this.updateSwitchValue(), this.state.switchState[2]);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.interval2);
    }

    updateButtonValue() {
        const buttonState = this.state.buttonState;
        buttonState[0] = buttonState[0] + buttonState[1];
        this.setState({ buttonState: buttonState });

    }
    updateSwitchValue() {
        const switchState = this.state.switchState;
        switchState[0] = switchState[0] + switchState[1];
        this.setState({ switchState: switchState });

    }
    updateButtonIncrement(x) {
        const buttonState = this.state.buttonState;
        if (buttonState[0] > buttonState[3]) {
            buttonState[1] += x;
            buttonState[0] -= buttonState[3];
            buttonState[3] *= 2;
            this.setState({ buttonState: buttonState });
        }
    }
    updateSwitchIncrement(x) {
        const switchState = this.state.switchState;
        if (switchState[0] > switchState[3]) {
            switchState[1] += x;
            switchState[0] -= switchState[3];
            switchState[3] *= 2;
            this.setState({ switchState: switchState });
        }       

    }
    updateButtonTick(x) { 
        const buttonState = this.state.buttonState;
        if (buttonState[0] > buttonState[3] && buttonState[2] > 0) {
            buttonState[2] += x;
            buttonState[0] -= buttonState[3];
            buttonState[3] *= 2;
            this.setState({ buttonState: buttonState });
            clearInterval(this.interval);
            this.interval = setInterval(() => this.updateButtonValue(), this.state.buttonState[2]);
        }
    }
    updateSwitchTick(x) {
        const switchState = this.state.switchState;
        if (switchState[0] > switchState[3] && switchState[2] > 0) {
            switchState[2] += x;
            switchState[0] -= switchState[3];
            switchState[3] *= 2;
            this.setState({ switchState: switchState });
            clearInterval(this.interval2);
            this.interval2 = setInterval(() => this.updateSwitchValue(), this.state.switchState[2]);
        }
        
    }
    getTab(i) {
        var tabs = [<ButtonIncremenet onClick={() => this.updateButtonValue()} value={this.state.buttonState}> </ButtonIncremenet>, <SwitchIncrement value={this.state.switchState} onChange={() => this.updateSwitchValue()}></SwitchIncrement>, <Upgrades costSwitch={this.state.switchState[3]} costButton={this.state.buttonState[3]} onClick1={() => this.updateButtonIncrement(3)} onClick2={() => this.updateSwitchIncrement(1)} onClick3={() => this.updateSwitchTick(-60)} onClick4={() => this.updateButtonTick(-60)}></Upgrades>];
        return tabs[i];
    }
    setTab(i) {
        this.setState({ tab: i })
    }
    render() {

        return (
            <div className="App">
                <div className="App-header">
                    
                    {this.getTab(this.state.tab)}
                    
                    <Badge badgeContent={0} color="primary" className="tab"> <Button variant="contained" onClick={() => this.setTab(0)} color="secondary" className="tab"> Button World </Button> </Badge>
                    <Badge badgeContent={0} color="primary" className="tab"> <Button variant="contained" onClick={() => this.setTab(1)} color="secondary" className="tab"> Switch World </Button> </Badge>
                    <Badge badgeContent={0} color="primary" className="tab"> <Button variant="contained" onClick={() => this.setTab(2)} color="secondary" className="tab"> Upgrades </Button> </Badge>
                    
                    
                </div>
            </div>
        );
    }
    
}

export default App;
