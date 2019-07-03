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
import Moment from "moment";
import { extendMoment } from "moment-range";

import styles from "../style/rentItemStyle";
import calendarTheme from "../style/calendarStyle";

const moment = extendMoment(Moment);

export default class RentItemDates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      disableRange: []
    };

    this.onDatePick = this.onDatePick.bind(this);
  }

  componentDidMount() {
    //this.getAlreadyRentedDates();
  }

  getAlreadyRentedDates() {
    const { itemRental } = this.props;

    let rentedDates = [];

    Object.values(itemRental.reservations).map((item, index) => {
      rentedDates.push(item.reservationDates.startDate);
      rentedDates.push(item.reservationDates.endDate);
    });

    this.setState({ disabledRange: moment.range(rentedDates) });
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
    const { itemRental } = this.props;
    const { startDate, endDate } = this.state;

    const rentalReservation = [];

    rentalReservation["reservationDates"] = {
      startDate: startDate,
      endDate: endDate ? endDate : startDate
    };

    Actions.RentItemPaymentMethod({
      rentalReservation: rentalReservation,
      itemRental: itemRental
    });
  }

  render() {
    const { itemRental } = this.props;
    const { startDate, endDate } = this.state;

    const availabilityRange = itemRental["availabilityRange"];

    return (
      <View style={styles.container}>
        <Calendar
          minDate={availabilityRange["startDate"]}
          maxDate={availabilityRange["endDate"]}
          startDate={startDate}
          endDate={endDate}
          disableRange={false}
          onChange={this.onDatePick}
          style={{ flex: 1 }}
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
