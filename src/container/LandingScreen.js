/**
 * Welcome Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import * as userActions from "../actions/userActions";

export default class LandingScreen extends Component {
  componentDidMount() {
    let databaseRef = firebase.database().ref("users/");
    setTimeout(() => {
      userActions
        ._retrieveData("logged")
        .then(value => {
          if (value == "true") {
            userActions
              ._retrieveData("userInfo")
              .then(data => {
                const userInfo = JSON.parse(data);
                if (userInfo.loginMethod === "email") {
                  firebase
                    .auth()
                    .signInWithEmailAndPassword(
                      userInfo.username,
                      userInfo.userpwd
                    )
                    .then(() => {
                      databaseRef
                        .orderByChild("email")
                        .equalTo(userInfo.username)
                        .once("child_added", function(userData) {
                          if (userData) {
                            let currentUser = userData.val();
                            currentUser["userID"] = userData.key;
                            window.currentUser = currentUser;
                            Actions.reset("dashboardContainerScreen");
                          } else {
                            Actions.reset("Welcome");
                          }
                        });
                    })
                    .catch(error => {
                      console.log(error);
                      Actions.reset("Welcome");
                    });
                } else {
                  firebase
                    .database()
                    .ref("users/")
                    .orderByChild("email")
                    .equalTo(userInfo.username)
                    .once("child_added", function(userData) {
                      if (userData) {
                        let currentUser = userData.val();
                        currentUser["userID"] = userData.key;
                        window.currentUser = currentUser;
                        Actions.reset("dashboardContainerScreen");
                      } else {
                        Actions.reset("Welcome");
                      }
                    });
                }
              })
              .catch(error => {
                console.log(error);
                Actions.reset("Welcome");
              });
          } else {
            Actions.reset("Welcome");
          }
        })
        .catch(error => {
          Actions.reset("Welcome");
        });
    }, 2000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0055FF",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          resizeMode="contain"
          style={{ height: responsiveWidth(10), height: responsiveWidth(10) }}
          source={require("../../assets/images/logoWhite.png")}
        />
      </View>
    );
  }
}
