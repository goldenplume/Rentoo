/**
 * Profile Screen
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
  YellowBox
} from "react-native";
import { Actions } from "react-native-router-flux";
import StarView from "react-native-star-view";
import Grid from "react-native-grid-component";
import firebase from "react-native-firebase";

import styles from "../style/profileStyle";
import ItemRental from "../component/ItemRental";

//YellowBox.ignoreWarnings(["Warning: ReactNative.createElement"]);

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRentals: []
    };
  }

  componentDidMount() {
    this.getUserRentals();
  }

  getUserRentals() {
    let userRentals = window.currentUser["userRentals"];

    firebase
      .database()
      .ref("rentals/")
      .orderByChild("owner")
      .equalTo(window.currentUser["userID"])
      .on("value", rentalsSnapshot => {
        let userRentals = [];

        rentalsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;

          userRentals.push(item);
        });

        this.setState({ userRentals: userRentals.reverse() });
      });
  }

  getUserRentals;

  _renderItem = (data, i) => <ItemRental data={data} />;
  _renderPlaceholder = (data, i) => <View style={{ flex: 1, margin: 5 }} />;

  render() {
    const { userRentals } = this.state;
    const {
      firstname,
      lastname,
      profilePicture,
      location,
      bio
    } = window.currentUser;

    const userName = firstname + " " + lastname;

    console.disableYellowBox = true;

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.upperContainer}>
          <View style={styles.profilePicture}>
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
              source={
                profilePicture !== undefined
                  ? { uri: profilePicture }
                  : require("../../assets/images/defaultProfilePicture.png")
              }
            />
          </View>

          {firstname !== undefined && (
            <TouchableOpacity onPress={() => Actions.Login()}>
              <Text style={styles.name}>{userName}</Text>
            </TouchableOpacity>
          )}

          {location !== undefined && (
            <View style={styles.location}>
              <Image
                resizeMode="contain"
                style={styles.locationPicto}
                source={require("../../assets/images/location.png")}
              />
              <Text style={styles.locationText}>{location}</Text>
            </View>
          )}

          {bio !== undefined && (
            <Text style={styles.profileContent}>{bio}</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.btnPostOffer}
          onPress={() => Actions.NewOfferTitle()}
        >
          <Image
            resizeMode="contain"
            style={styles.plusIcon}
            source={require("../../assets/images/plusWhite.png")}
          />
          <Text style={styles.textBtnPostOffer}>Post an offer</Text>
        </TouchableOpacity>

        <View style={styles.borderline} />

        <Text style={styles.rental}>My offers</Text>

        <View style={styles.interestInsideContainer}>
          <Grid
            style={{ marginHorizontal: -10 }}
            renderItem={this._renderItem}
            renderPlaceholder={this._renderPlaceholder}
            data={userRentals}
            numColumns={2}
          />
        </View>
      </ScrollView>
    );
  }
}
