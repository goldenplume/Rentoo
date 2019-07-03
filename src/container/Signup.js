/**
 * Sign up Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "../style/signupStyle";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  nextSignupStep() {
    const { email, password } = this.state;

    if (email.length > 4 && password.length > 4) {
      const createdUser = { email: email, password: password };

      Actions.Name({ createdUser: createdUser });
    } else {
      Alert.alert("Please check your mail and/or password.");
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <Text style={styles.getstartedText}>Get Started</Text>

          <View style={styles.formLayout}>
            <TextInput
              style={[
                styles.formItem,
                { marginBottom: responsiveHeight(1.47) }
              ]}
              autoCapitalize="none"
              placeholder="Email Address"
              placeholderTextColor="#979797"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              style={styles.formItem}
              placeholder="Password"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnsignupLayout}
              onPress={() => this.nextSignupStep()}
            >
              <Text style={styles.btnSignupText}>Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.textSignWithLayout}>or sign up with</Text>
            <TouchableOpacity style={styles.btnFBLayout}>
              <Image source={require("../../assets/images/facebook.png")} />
              <Text style={styles.btnText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTwitterLayout}>
              <Image source={require("../../assets/images/twitter.png")} />
              <Text style={styles.btnText}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGoogleLayout}>
              <Image source={require("../../assets/images/google.png")} />
              <Text style={styles.btnText}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tosLayout}>
            <Text style={styles.tosTextLeft}>
              By joining Rentoo, you agree to our
            </Text>
            <TouchableOpacity>
              <Text style={styles.tosText}>Terms of Services</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
