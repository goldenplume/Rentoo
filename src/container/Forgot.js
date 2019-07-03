/**
 * Forgot Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../style/forgotStyle'

export default class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    }
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#ffffff"}}>
        <View style={styles.container}>

          <Text style={styles.forgotText}>Forgot your password</Text>
          <Text style={styles.resetText}>Enter your email address, we will send you password reset link</Text>

          <View style={styles.formLayout}>
            <TextInput style={styles.formItem} placeholder="Email Address" placeholderTextColor="#979797" value={this.state.email} onChangeText={(email) => this.setState({email})} />
          </View>
          <View>
            <TouchableOpacity style={styles.btnConfirmLayout} onPress={()=>Actions.Login()}>
                <Text style={styles.btnConfirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


