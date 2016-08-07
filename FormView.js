import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export default class FormView extends Component {
    static get defaultProps() {
        return { formLogo: require('./login-logo.png')};
    }

    render() {
        return (
            <View style={{paddingLeft: 16, paddingRight: 16, marginTop: 50}}>
                <View style={{alignItems: 'center'}}>
                    <Image source={this.props.formLogo} style={{marginBottom: 30}} />
                    <Text style={{fontSize: 26, color: '#bdc3c7', fontWeight: '600'}}>Login</Text>
                </View>
                {this.props.children}
            </View>
        );
    }
}
