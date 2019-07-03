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

import styles from "../style/welcomeStyle";

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeGridViewImage}>
          <Image
            resizeMode="cover"
            style={styles.welcomeImage}
            source={require("../../assets/images/welcomeGridView.png")}
          />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.midLayout}>
            <Image
              style={styles.ooIcon}
              source={require("../../assets/images/oo.png")}
            />
            <Text style={styles.rentText}>Rent Everything, Everywhere</Text>
            <Text style={styles.welcomeText}>
              Welcome to your sharing economy platform, where everything can be
              {"\n"}rented by everyone.
            </Text>
          </View>
          <View style={styles.btnLayout}>
            <TouchableOpacity
              style={styles.btnSignUpLayout}
              onPress={() => Actions.Signup()}
            >
              <Text style={styles.btnText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnLoginLayout}
              onPress={() => Actions.Login()}
            >
              <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnNotNowLayout}>
              <Text style={styles.notNowBtnText}>Not now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
