/**
 * Search Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import StarView from "react-native-star-view";
import { Actions } from "react-native-router-flux";
import Placeholder, { Line, Media, ImageContent } from "rn-placeholder";
import firebase from "react-native-firebase";
import moment from "moment";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import cryptoList from "../data/cryptoList";

export default class ItemRental extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCurrentUserReservedItem: false,
      reservationStatus: []
    };
  }

  componentWillMount() {
    this.getReservationStatus();
  }

  getReservationStatus() {
    const { data } = this.props;
    const currentUser = window.currentUser["userID"];

    const THIS = this;

    if (data.reservations !== undefined) {
      let reservations = Object.values(data.reservations);

      reservations.forEach(function(itemReservation) {
        if (itemReservation.rentalMaker == currentUser) {
          THIS.setState({
            hasCurrentUserReservedItem: true,
            reservationStatus: itemReservation
          });
        }
      });
    }
  }

  addToWatchlist(key) {
    const watchlist =
      window.currentUser["watchlist"] !== undefined
        ? Object.values(window.currentUser["watchlist"])
        : [];

    if (watchlist.includes(key)) {
      watchlist.splice(watchlist.indexOf(key), 1);
    } else {
      watchlist.push(key);
    }

    window.currentUser["watchlist"] = watchlist;

    firebase
      .database()
      .ref("users/" + window.currentUser["userID"])
      .update(window.currentUser)
      .then(success => {
        console.log(success);
      })
      .catch(err => {
        console.log("error===", err);
      });
  }

  render() {
    const { data, isFullWidth } = this.props;
    const { hasCurrentUserReservedItem, reservationStatus } = this.state;

    const userWatchlist =
      window.currentUser["watchlist"] !== undefined
        ? Object.values(window.currentUser["watchlist"])
        : [];

    return (
      <View
        style={[
          styles.containerItemRental,
          this.props.style,
          {
            margin: isFullWidth ? 0 : 5
          }
        ]}
      >
        <TouchableOpacity
          style={styles.containerImageRental}
          onPress={() =>
            Actions.ItemDetails({
              data: data
            })
          }
        >
          <Image
            style={[
              styles.itemImage,
              {
                height: isFullWidth ? responsiveWidth(60) : responsiveWidth(30)
              }
            ]}
            source={{ uri: data.pictures[0] }}
          />
          <TouchableOpacity
            style={styles.likeContainer}
            onPress={() => this.addToWatchlist(data.key)}
          >
            <Image
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
              source={
                userWatchlist.includes(data.key)
                  ? require("../../assets/images/redHeart.png")
                  : require("../../assets/images/heart.png")
              }
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <Text style={styles.itemText}>{data.title}</Text>

        {hasCurrentUserReservedItem ? (
          <Text style={styles.currencyText}>
            {moment(reservationStatus.reservationDates.startDate).format(
              "MMM. D"
            ) +
              " to " +
              moment(reservationStatus.reservationDates.endDate).format(
                "MMM. D"
              )}
          </Text>
        ) : (
          <View>
            <View style={styles.currencyWrapper}>
              <Text style={styles.currencyText}>
                {data.dailyDollarPrice}$/day
              </Text>
              <View style={styles.currencyContainer}>
                {data["currencies"].map((item, index) => {
                  return (
                    <View key={index} style={styles.itemCurrency}>
                      <Image
                        key={index}
                        style={styles.currency}
                        resizeMode="contain"
                        source={require("../../assets/coins/bitcoin.png")}
                      />
                    </View>
                  );
                })}
              </View>
            </View>

            <View style={styles.starLayout}>
              <StarView score={4} style={styles.starView} />
              <Text style={styles.starText}>13</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerItemRental: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  containerImageRental: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    overflow: "hidden"
  },
  likeContainer: {
    position: "absolute",
    right: responsiveHeight(1),
    top: responsiveHeight(1),
    height: responsiveWidth(5),
    width: responsiveWidth(5)
  },
  itemText: {
    marginTop: responsiveHeight(1),
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8)
  },
  currencyText: {
    marginTop: 5,
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.5),
    color: "#767676"
  },
  currencyWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  currencyContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  itemCurrency: {
    backgroundColor: "#0055FF",
    height: responsiveWidth(3),
    width: responsiveWidth(3),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 120,
    marginLeft: responsiveWidth(0.5)
  },
  currency: {
    width: "50%",
    height: "50%"
  },
  starLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "center"
  },
  starText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.5),
    marginLeft: 5,
    color: "#FFC08A"
  },
  starView: {
    width: 50,
    height: 10
  }
});
