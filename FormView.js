import React, { Component } from 'react';
import { View } from 'react-native';

export default class FormView extends Component {
    render() {
        return (
            <View style={{paddingLeft: 16, paddingRight: 16}}>
                {this.props.children}
            </View>
        );
    }
}
