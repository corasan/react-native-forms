import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class FormView extends Component {
    static get defaultProps() {
        return { formLogo: require('./login-logo.png')};
    }

    render() {
        return (
            <View style={{paddingLeft: 16, paddingRight: 16, marginTop: 50}}>
                <Image source={this.props.formLogo} />
                {this.props.children}
            </View>
        );
    }
}
