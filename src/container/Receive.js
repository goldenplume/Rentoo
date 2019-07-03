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
  ScrollView,
  Share
} from "react-native";
import { Action } from "react-native-router-flux";

import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import QRCode from "react-native-qrcode-svg";

import styles from "../style/receiveStyle";

export default class Yourbalance extends Component {
  constructor(props) {
    super(props);
  }

  onShare = async () => {
    const { address } = this.props;

    try {
      const result = await Share.share({
        message: address
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { address } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.QRcontainer}>
          <QRCode value={address} size={responsiveWidth(50)} />
          <Text style={{ marginTop: responsiveHeight(3) }}>{address}</Text>
        </View>

        <TouchableOpacity style={styles.btnShareAddress} onPress={this.onShare}>
          <Text style={styles.textBtnShareAddress}>Share address</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
