/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "../style/sendStyle";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import moment from "moment";

import * as userActions from "../actions/userActions";

export default class Send extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <View style={styles.container} />;
  }
}
