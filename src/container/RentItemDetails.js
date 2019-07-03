/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import Calendar from "react-native-calendario";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import moment from "moment";

import styles from "../style/rentItemStyle";

export default class RentItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservationDetails: ""
    };
  }

  componentDidMount() {
    this.rentalDetailsInput.focus();
  }

  nextStep() {
    const { rentalReservation, itemRental } = this.props;
    const { reservationDetails } = this.state;

    rentalReservation["reservationDetails"] = reservationDetails;

    Actions.RentItemCheckout({
      rentalReservation: rentalReservation,
      itemRental: itemRental
    });
  }

  render() {
    const { reservationDetails } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Tell us about your rental</Text>
          <Text style={styles.pageInstructions}>
            Share a few detail about your rental.
          </Text>
        </View>

        <View style={styles.separatorLine} />

        <TextInput
          ref={rentalDetails => {
            this.rentalDetailsInput = rentalDetails;
          }}
          returnKeyType="done"
          blurOnSubmit
          placeholder="Write a message..."
          value={reservationDetails}
          onChangeText={reservationDetails =>
            this.setState({ reservationDetails })
          }
          maxLength={400}
          multiline
        />

        {reservationDetails.length > 10 && (
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => this.nextStep()}
          >
            <Text style={styles.textBtnNext}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
