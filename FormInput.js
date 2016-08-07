import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.value
        }
    }
    render() {
        return (
            <TextInput
                value={this.state.text}
                onChange={this.props.onChange}
            />
        );
    }
}
