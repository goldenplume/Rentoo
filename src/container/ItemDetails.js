/**
 * Item Details Screen
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
  SafeAreaView
} from "react-native";
import { Actions } from "react-native-router-flux";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import StarView from "react-native-star-view";
import firebase from "react-native-firebase";
import Grid from "react-native-grid-component";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from "react-native-linear-gradient";
import moment from "moment";

import ItemRental from "../component/ItemRental";
import Slideshow from "../component/Slideshow";

import * as userActions from "../actions/userActions";
import styles from "../style/itemdetailsStyle";
import mapStyle from "../style/mapStyle";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [],
      ownerName: "",
      rentalsYouMayLike: [],
      reservationStatus:
        this.props.reservationData !== undefined
          ? this.props.reservationData
          : false
    };
  }

  componentWillMount() {
    const { data } = this.props;
    const { dataSource } = this.state;

    data["pictures"].map((item, index) => {
      dataSource.push({ url: item });
    });

    this.setState({ dataSource });

    this.getOwnerData();
  }

  getOwnerData() {
    const { data } = this.props;

    firebase
      .database()
      .ref("users/")
      .orderByChild("userID")
      .equalTo(data.owner)
      .on("value", ownerProfile => {
        let ownerData = userActions.snapshotToArray(ownerProfile);

        let ownerName = ownerData[0].firstname + " " + ownerData[0].lastname;

        this.setState({ ownerName });
      });
  }

  componentDidMount() {
    this.getRentalsYouMayLike();
  }

  getRentalsYouMayLike() {
    const { data } = this.props;

    firebase
      .database()
      .ref("rentals/")
      .orderByChild("category")
      .equalTo(data.category)
      .limitToLast(4)
      .once("value", rentalsSnapshot => {
        let rentalsYouMayLike = [];
        let i = 0;

        rentalsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = i++;

          rentalsYouMayLike.push(item);
        });

        this.setState({
          rentalsYouMayLike: rentalsYouMayLike
        });
      });
  }

  _renderItem = (data, i) => <ItemRental data={data} />;
  _renderPlaceholder = (data, i) => <View style={{ flex: 1, margin: 5 }} />;

  updateRentalStatus(status) {
    const { data } = this.props;
    const { reservationStatus } = this.state;

    let updatedReservation = reservationStatus;
    updatedReservation["status"] = status;

    firebase
      .database()
      .ref("rentals/" + data.key + "/reservations/" + reservationStatus.key)
      .update(updatedReservation);
  }

  render() {
    const { data } = this.props;
    const { ownerName, rentalsYouMayLike, reservationStatus } = this.state;

    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.headerGradient}
          colors={["rgba(0,0,0,0.6)", "transparent"]}
        />

        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Image
              style={styles.leftNavBtn}
              source={require("../../assets/images/left.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.rightNavBtn}
              resizeMode={"contain"}
              source={require("../../assets/images/redHeart.png")}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewContainer}
        >
          <Slideshow
            style={styles.slideshow}
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
          />

          <View
            style={{
              paddingHorizontal: responsiveWidth(5.33),
              marginBottom: responsiveHeight(10)
            }}
          >
            {!reservationStatus ? (
              <Text style={styles.categoryText}>
                {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
              </Text>
            ) : (
              <Text
                style={[
                  styles.categoryText,
                  {
                    color: userActions.getStatusColor(reservationStatus.status)
                  }
                ]}
              >
                {reservationStatus.status}
              </Text>
            )}

            <Text style={styles.title}>{data.title}</Text>

            {reservationStatus ? (
              <View
                style={{ flexDirection: "row", alignItems: "space-between" }}
              >
                {reservationStatus.status !== "Canceled" &&
                  reservationStatus.status !== "Completed" && (
                    <TouchableOpacity
                      style={[styles.btnActionRental]}
                      onPress={() => this.updateRentalStatus("Canceled")}
                    >
                      <Text style={styles.textBtnRental}>Cancel renting</Text>
                    </TouchableOpacity>
                  )}

                {(reservationStatus.status == "Confirmed" ||
                  reservationStatus.status == "Completed") && (
                  <TouchableOpacity
                    style={[
                      styles.btnActionRental,
                      {
                        marginLeft:
                          reservationStatus.status == "Confirmed" ? 10 : 0,
                        backgroundColor: "#0055FF"
                      }
                    ]}
                    onPress={() =>
                      Actions.Authentication({
                        isOwner:
                          data.owner == window.currentUser["userID"]
                            ? true
                            : false,
                        rentalKey: data.key,
                        reservationKey: reservationStatus.key
                      })
                    }
                  >
                    <Text style={styles.textBtnRental}>Authentication</Text>
                  </TouchableOpacity>
                )}

                {reservationStatus.status == "Pending" &&
                  data.owner == window.currentUser["userID"] && (
                    <TouchableOpacity
                      style={[
                        styles.btnActionRental,
                        { marginLeft: 10, backgroundColor: "#0055FF" }
                      ]}
                      onPress={() => this.updateRentalStatus("Confirmed")}
                    >
                      <Text style={styles.textBtnRental}>Accept renting</Text>
                    </TouchableOpacity>
                  )}
              </View>
            ) : (
              <Text style={styles.descriptionContent}>{data.summary}</Text>
            )}

            <View style={styles.lineSeparator} />

            {reservationStatus ? (
              <View>
                <Text style={styles.sectionTitle}>Date</Text>

                <View style={styles.reservationDatesContainer}>
                  <View style={styles.itemDate}>
                    <Text style={styles.itemTextSubTitle}>Start</Text>
                    <Text style={styles.itemTextSub}>
                      {moment(
                        reservationStatus.reservationDates.startDate
                      ).format("dddd, MMM. D")}
                    </Text>
                  </View>

                  <View style={styles.itemDate}>
                    <Text style={styles.itemTextSubTitle}>End</Text>
                    <Text style={styles.itemTextSub}>
                      {moment(
                        reservationStatus.reservationDates.endDate
                      ).format("dddd, MMM. D")}
                    </Text>
                  </View>
                </View>

                <View style={styles.lineSeparator} />
              </View>
            ) : (
              <View>
                <View style={styles.reviewsContainer}>
                  <View style={styles.starContainer}>
                    <Text style={[styles.itemText, { color: "#FDC058" }]}>
                      4.1
                    </Text>
                    <StarView score={4} style={styles.starItem} />
                  </View>
                  <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>92</Text>
                    <Text style={styles.subItemText}>Reviews</Text>
                  </View>
                  <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>23</Text>
                    <Text style={styles.subItemText}>Rentals</Text>
                  </View>
                </View>

                <View style={styles.lineSeparator} />
              </View>
            )}

            <View style={styles.ownerContainer}>
              <Image
                resizeMode="contain"
                style={styles.ownerImage}
                source={require("../../assets/images/profile.png")}
              />
              <View>
                <Text style={styles.itemTextSubTitle}>Owner</Text>
                <Text style={styles.itemTextSub}>{ownerName}</Text>
              </View>
            </View>

            <View style={styles.lineSeparator} />

            <Text style={styles.sectionTitle}>Location</Text>

            {reservationStatus && (
              <Text style={styles.fullAddressText}>
                {data.meetingPlace.address +
                  ", " +
                  data.meetingPlace.city +
                  ", " +
                  data.meetingPlace.country}
              </Text>
            )}

            <View style={styles.mapViewContainer}>
              <MapView
                style={styles.mapView}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}
                region={{
                  latitude: data.meetingPlace.meetingCoordinates.lat,
                  longitude: data.meetingPlace.meetingCoordinates.lng,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
              />
              <LinearGradient
                style={styles.gradientOverMap}
                colors={["#fff", "rgba(255,255,255,0)", "#fff"]}
              >
                <Image
                  resizeMode="contain"
                  style={styles.rentalPosition}
                  source={require("../../assets/images/rentalPosition.png")}
                />
              </LinearGradient>
              {!reservationStatus && (
                <Text style={styles.exactPositionLegal}>
                  Exact position given after renting.
                </Text>
              )}
            </View>

            <View style={styles.lineSeparator} />

            {reservationStatus ? (
              <View>
                <Text style={styles.sectionTitle}>Total cost</Text>

                <View style={styles.containerRentalPrice}>
                  <Text style={styles.totalUSDAmount}>Amount in USD</Text>
                  <Text style={styles.totalUSDAmount}>
                    {reservationStatus.numberDaysReservation *
                      data.dailyDollarPrice}
                    $
                  </Text>
                </View>

                <View style={styles.containerRentalPrice}>
                  <Text style={styles.totalCurrencyAmount}>
                    {reservationStatus.currency.toUpperCase()}
                  </Text>
                  <Text style={styles.totalCurrencyAmount}>
                    {reservationStatus.rentalTotalAmount.toFixed(5)}
                  </Text>
                </View>

                <View style={styles.lineSeparator} />

                <View style={styles.containerRentalPrice}>
                  <Text style={styles.totalCurrencyAmount}>Rental ref.</Text>
                  <Text style={styles.totalCurrencyAmount}>
                    {reservationStatus.rentalRef}
                  </Text>
                </View>
              </View>
            ) : (
              <View>
                <Text style={styles.sectionTitle}>It might interest you</Text>
                <Grid
                  style={{ marginHorizontal: -5 }}
                  renderItem={this._renderItem}
                  renderPlaceholder={this._renderPlaceholder}
                  data={rentalsYouMayLike}
                  numColumns={2}
                />
              </View>
            )}
          </View>

          <View style={{ height: responsiveHeight(5) }} />
        </ScrollView>

        {!reservationStatus && (
          <View style={styles.bottomAbContainer}>
            <View>
              <Text style={styles.rentDayText}>
                {data.dailyDollarPrice}$ /day
              </Text>
              <View style={styles.currencyContainer}>
                {data.currencies.map((item, key) => {
                  return (
                    <View key={key} style={styles.itemCurrency}>
                      <Image
                        key={key}
                        style={styles.currency}
                        resizeMode="contain"
                        source={require("../../assets/coins/bitcoin.png")}
                      />
                    </View>
                  );
                })}
              </View>
            </View>

            {data.owner !== window.currentUser["userID"] && (
              <TouchableOpacity
                onPress={() => Actions.RentItemDates({ itemRental: data })}
                style={styles.rentBtn}
              >
                <Text style={styles.rentText}>Rent now</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    );
  }
}
