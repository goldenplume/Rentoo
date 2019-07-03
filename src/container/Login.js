/**
 * Login Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";

import * as userActions from "../actions/userActions";
import styles from "../style/loginStyle";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onLogin() {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function() {
        firebase
          .database()
          .ref("users/")
          .orderByChild("email")
          .equalTo(email)
          .on("child_added", function(userData) {
            if (userData) {
              let currentUser = userData.val();
              currentUser["userID"] = userData.key;
              window.currentUser = currentUser;

              let userInfo = {
                username: email,
                userpwd: password,
                loginMethod: "email",
                userID: userData.key
              };
              userActions._storeData("logged", true);
              userActions._storeData("userInfo", userInfo);

              Actions.reset("dashboardContainerScreen");
            }
          });
      })
      .catch(error => {
        console.log("login_error", error);
      });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome Back</Text>

          <View style={styles.formLayout}>
            <TextInput
              autoCapitalize="none"
              style={styles.formItem}
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
            <TouchableOpacity
              style={styles.forgotTextBtn}
              onPress={() => Actions.Forgot()}
            >
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnLoginLayout}
              onPress={() => this.onLogin()}
            >
              <Text style={styles.btnLoginText}>Log in</Text>
            </TouchableOpacity>
            <Text style={styles.textLoginWithLayout}>or log in with</Text>
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
        </View>
      </View>
    );
  }
}
