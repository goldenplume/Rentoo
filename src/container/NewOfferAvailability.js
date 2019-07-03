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

import styles from "../style/newOfferStyle";
import calendarTheme from "../style/calendarStyle";

export default class NewOfferAvailability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null
    };

    this.onDatePick = this.onDatePick.bind(this);
  }

  onDatePick = ({ startDate, endDate }) => {
    this.setState(
      {
        startDate: moment(startDate).format("YYYY-MM-DD"),
        endDate: endDate ? moment(endDate).format("YYYY-MM-DD") : null
      },
      () => console.log(this.state)
    );
  };

  nextStep() {
    const { newRentalItem } = this.props;
    const { startDate, endDate } = this.state;

    newRentalItem["availabilityRange"] = {
      startDate: startDate,
      endDate: endDate ? endDate : startDate
    };

    Actions.NewOfferPrice({ newRentalItem: newRentalItem });
  }

  render() {
    const { startDate, endDate } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Availability</Text>
          <Text style={styles.pageInstructions}>
            Select dates to block or unblock.
          </Text>
        </View>

        <Calendar
          minDate={moment(new Date())}
          startDate={startDate}
          endDate={endDate}
          disableRange={false}
          onChange={this.onDatePick}
          style={{ flex: 1 }}
          numberOfMonths={5}
          monthHeight={responsiveHeight(45)}
          theme={calendarTheme}
        />

        {startDate !== null && (
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
