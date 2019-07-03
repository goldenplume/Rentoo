/**
 * MapSearch Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import StarView from "react-native-star-view";
import firebase from "react-native-firebase";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";

import ItemRental from "../component/ItemRental";
import styles from "../style/mapsearchStyle";
import mapStyle from "../style/mapStyle";

const DEFAULT_REGION = {
  latitude: 42.882004,
  longitude: 74.582748,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      e => reject(e)
    );
  });
};

export default class MapSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: DEFAULT_REGION,
      rentals: []
    };
  }

  componentWillMount() {
    this.getRentals();
  }

  componentDidMount() {
    return getCurrentLocation().then(position => {
      if (position) {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }
        });
      }
    });
  }

  getRentals() {
    firebase
      .database()
      .ref("rentals/")
      .on("value", rentalsSnapshot => {
        let rentals = [];

        rentalsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;

          rentals.push(item);
        });

        this.setState({ rentals: rentals });
      });
  }

  render() {
    const { region, rentals } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => Actions.pop()}>
          <Image
            style={styles.closeImage}
            source={require("../../assets/images/closebtn3x.png")}
          />
        </TouchableOpacity>

        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 2 }}
          region={region}
          showsUserLocation={true}
          customMapStyle={mapStyle}
        >
          {rentals.map((marker, index) => (
            <Marker
              coordinate={{
                latitude: marker.meetingPlace.meetingCoordinates.lat,
                longitude: marker.meetingPlace.meetingCoordinates.lng
              }}
              key={index}
              cluster={true}
              onPress={e => this.markerClicked(index)}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={styles.containerItemRental}>
                  <Text style={styles.itemRentalPrice}>
                    {marker.dailyDollarPrice}$
                  </Text>
                </View>
                <View style={styles.triangle} />
              </View>
            </Marker>
          ))}
        </MapView>

        <SafeAreaView style={styles.bottomContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.leftText}>{rentals.length} rentals</Text>

            <TouchableOpacity style={styles.rightBtn}>
              <Text style={styles.rightText}>Filters</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewRentals}
          >
            {rentals.map(item => {
              return (
                <ItemRental
                  data={item}
                  style={{
                    margin: 0,
                    marginRight: responsiveWidth(4),
                    width: responsiveWidth(40)
                  }}
                />
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
