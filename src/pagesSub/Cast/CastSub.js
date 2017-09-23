import React, {Component} from 'react';

const scaleNames = {
    C: '摄氏度',
    F: '华氏度'
};

//华氏变摄氏
function changeCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

//摄氏变华氏
function changeFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

//判断输入的temperature是否合法
function checkTemperature(temperature, convert) {
    const input = parseFloat(temperature);

    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function ShowResult(props) {
    if (props.celsius >= 100) {
        return <div className="show">甘延林真的很帅.</div>;
    }
    return <div className="show">Gananlin is very handsome.</div>;
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.props.onTempChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>输入{scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

class ChangeTemperature extends Component {
    constructor(props) {
        super(props);
        this.handleCelsius = this.handleCelsius.bind(this);
        this.handleFahrenheit = this.handleFahrenheit.bind(this);
        this.state = {scale: 'C', temperature: ''};
    }

    handleCelsius(temperature) {
        this.setState({scale: 'C', temperature})
    }

    handleFahrenheit(temperature) {
        this.setState({scale: 'F', temperature})
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'F' ? checkTemperature(temperature, changeCelsius) : temperature;
        const fahrenheit = scale === 'C' ? checkTemperature(temperature, changeFahrenheit) : temperature;

        return (
            <div className="cast-top">
                <TemperatureInput scale="C"
                                  temperature={celsius}
                                  onTempChange={this.handleCelsius}/>
                <span className="span"> === </span>
                <TemperatureInput scale="F"
                                  temperature={fahrenheit}
                                  onTempChange={this.handleFahrenheit}/>
                <ShowResult celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}

export default ChangeTemperature;
