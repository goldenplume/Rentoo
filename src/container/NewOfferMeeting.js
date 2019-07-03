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
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Actions } from "react-native-router-flux";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import Geocoder from "react-native-geocoder";

import styles from "../style/newOfferStyle";

export default class NewOfferMeeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      address: "",
      zip: "",
      city: "",
      coordinates: []
    };
  }

  getUserCurrentAddress() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;

        var coordinates = {
          lat: latitude,
          lng: longitude
        };
        Geocoder.geocodePosition(coordinates)
          .then(address => {
            console.log(address);
            this.setState({
              country: address[0].country,
              address: address[0].feature,
              zip: address[0].postalCode,
              city: address[0].locality
            });
          })
          .catch(err => console.log(err));
      },
      error => {
        console.log("Error: Are location services on?");
        console.log("error====", error);
      },
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 10000 }
    );
  }

  onDoneNewRentalItem() {
    const { newRentalItem } = this.props;
    const { country, address, zip, city, coordinates } = this.state;

    Geocoder.geocodeAddress(country + address + zip + city)
      .then(coords => {
        meetingCoordinates = {
          lat: coords[0].position.lat,
          lng: coords[0].position.lng
        };

        let meetingPlace = { country, address, zip, city, meetingCoordinates };

        newRentalItem["meetingPlace"] = meetingPlace;
        newRentalItem["owner"] = window.currentUser["userID"];

        firebase
          .database()
          .ref("rentals")
          .push(newRentalItem)
          .then(newRentalData => {
            firebase
              .database()
              .ref("users/" + window.currentUser["userID"] + "/userRentals")
              .push(newRentalData.key)
              .then(result => {
                Actions.reset("dashboardContainerScreen");
              })
              .catch(err => {
                console.log("error===", err);
              });
          })
          .catch(err => {
            console.log("error===", err);
          });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { country, address, zip, city } = this.state;

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="position"
          keyboardVerticalOffset={-100}
          enabled
        >
          <View style={styles.pageHeader}>
            <Text style={styles.pageTitle}>Meeting place</Text>
            <Text style={styles.pageInstructions}>
              Your exact address is private and only shared when renting is
              confirmed.
            </Text>
            <TouchableOpacity
              style={styles.btnCurrentLocation}
              onPress={() => this.getUserCurrentAddress()}
            >
              <Image
                resizeMode="contain"
                style={styles.locationIcon}
                source={require("../../assets/UI/location.png")}
              />
              <Text style={styles.textBtnCurrentLocation}>
                Current location
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerInput}>
            <Text style={styles.headerInputTitle}>Country</Text>
          </View>

          <TextInput
            placeholder="Country"
            value={country}
            onChangeText={country => this.setState({ country })}
            maxLength={40}
          />

          <View style={styles.separatorLine} />

          <View style={styles.headerInput}>
            <Text style={styles.headerInputTitle}>Address</Text>
          </View>

          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={address => this.setState({ address })}
            maxLength={40}
          />

          <View style={styles.separatorLine} />

          <View style={styles.headerInput}>
            <Text style={styles.headerInputTitle}>ZIP code</Text>
          </View>

          <TextInput
            placeholder="ZIP code"
            value={zip}
            onChangeText={zip => this.setState({ zip })}
            maxLength={40}
          />

          <View style={styles.separatorLine} />

          <View style={styles.headerInput}>
            <Text style={styles.headerInputTitle}>City</Text>
          </View>

          <TextInput
            placeholder="City"
            value={city}
            onChangeText={city => this.setState({ city })}
            maxLength={40}
          />

          <View style={styles.separatorLine} />
        </KeyboardAvoidingView>

        {country !== "" && address !== "" && zip !== "" && city !== "" && (
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => this.onDoneNewRentalItem()}
          >
            <Text style={styles.textBtnNext}>Done</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
