/**
 * Number Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Actions } from "react-native-router-flux";

import styles from "../style/numberStyle";

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ""
    };
  }

  nextSignupStep() {
    const { createdUser } = this.props;
    const { number } = this.state;

    if (number.length > 6) {
      createdUser["number"] = number;

      Actions.Code({ createdUser: createdUser });
    } else {
      Alert.alert("Make sure your number is correct");
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <Text style={styles.numberText}>What's your number ?</Text>
          <Text style={styles.codeText}>
            We will text you a code to verify your account.
          </Text>

          <View style={styles.formLayout}>
            <TextInput
              keyboardType="numeric"
              style={styles.formItem}
              placeholder="Phone number"
              placeholderTextColor="#979797"
              value={this.state.number}
              onChangeText={number => this.setState({ number })}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnNextLayout}
              onPress={() => this.nextSignupStep()}
            >
              <Text style={styles.btnNextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
