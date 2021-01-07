import React, {Component, useState} from 'react';
import {Text} from '@ui-kitten/components';
import {AsyncStorage} from 'react-native';

const SimpleFunc = (props) => {
    const [temperature, setTemperature] = React.useState({
        temperature: props.temperature,
    });

    setInterval(() => {
        setTemperature(temperature + 1);
    }, 1000);

    return (
        <Text>
            Bonjour {props.name}, il fait {temperature}°C}
        </Text>
    );
};

export default class Simple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: props.temperature,
        };

        setInterval(() => {
            this.setState({temperature: this.state.temperature + 1});
            AsyncStorage.setItem('temperature', this.state.temperature);
        }, 1000);
    }

    render() {
        return (
            <Text>
                {console.log('RENDER SIMPLE APPELE')}
                Bonjour {this.props.name}, il fait {this.state.temperature}°C
            </Text>
        );
    }
}
