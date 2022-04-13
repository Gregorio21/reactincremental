import './App.css';
import { Component } from 'react';
import { Button, Badge, ThemeProvider } from '@material-ui/core';
import ButtonIncremenet from './ButtonIncrement'
import { green, blue, red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core';
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
            //[points value, increment value per click, interval speed in ms, upgrade cost]
            buttonState: [0,3,300,300],
            tab: 0,
            defaultButtonState: [0, 3, 300, 300],
            tier: 0,
            tierCost: 3000,

        };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.updateButtonValue(this.state.buttonState), this.state.buttonState[2]);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateButtonValue() {
        const buttonState =this.state.buttonState;
        buttonState[0] = buttonState[0] + (buttonState[1] * Math.pow(2,this.state.tier));
        this.setState({ buttonState: buttonState });

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
    updateButtonTick(x) { 
        const buttonState = this.state.buttonState;
        if (buttonState[0] > buttonState[3] && buttonState[2] > 0) {
            buttonState[2] += x;
            buttonState[0] -= buttonState[3];
            buttonState[3] *= 2;
            this.setState({ button: buttonState });
            clearInterval(this.interval);
            this.interval = setInterval(() => this.updateButtonValue(buttonState), this.state.buttonState[2]);
        }
    }
    tierUp() {
        const tier = this.state.tier;
        const tierCost = this.state.tierCost;
        const buttonState = this.state.buttonState;
        const defaultButton = this.state.defaultButtonState;
        if (buttonState[0] >= this.state.tierCost) {
            this.setState({ tier: tier + 1 });
            clearInterval(this.interval);
            this.interval = setInterval(() => this.updateButtonValue(buttonState), this.state.buttonState[2]);
            this.setState({ buttonState: defaultButton });
            this.setState({ tierCost: parseInt(tierCost*2.25) })
        }
        
    }

    getTab(i) {
        var tabs = [<ButtonIncremenet tier={0} className="Increment" onClick={() => this.updateButtonValue(this.state.buttonState)} value={this.state.buttonState}> </ButtonIncremenet>,           
            <Upgrades tierCost={this.state.tierCost} costButton={this.state.buttonState[3]} onClick1={() => this.updateButtonIncrement(3)} onClick2={() => this.updateButtonTick(-60)} onClick3={() => this.tierUp()} tier={this.state.tier}></Upgrades>
        ];
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
                    <Badge badgeContent={0} color="primary" className="tab"> <Button variant="contained" onClick={() => this.setTab(1)} color="secondary" className="tab"> Upgrades </Button> </Badge>
                    
                    
                </div>
            </div>
        );
    }
    
}

export default App;
