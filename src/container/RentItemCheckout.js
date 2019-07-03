/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Actions } from "react-native-router-flux";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import moment from "moment";
import firebase from "react-native-firebase";
import { requestOneTimePayment } from "react-native-paypal";

import * as userActions from "../actions/userActions";
import styles from "../style/rentItemStyle";

export default class RentItemCheckout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemRental: this.props.itemRental,
      chosenCurrency: this.props.rentalReservation["paymentMethod"],
      numberDaysReservation: 0,
      totalUSDAmount: 0,
      totalCurrencyAmount: 0,
      rentalFeeUSD: 0,
      rentalRef: ""
    };
  }

  componentWillMount() {
    this.getReservationCheckoutDetails();
  }

  getReservationCheckoutDetails() {
    const { itemRental, rentalReservation } = this.props;
    const { chosenCurrency } = this.state;

    let startDate = rentalReservation["reservationDates"]["startDate"];
    let endDate = rentalReservation["reservationDates"]["endDate"];

    let numberDaysReservation = userActions.numberOfDaysReservation(
      startDate,
      endDate
    );

    let totalUSDAmount = numberDaysReservation * itemRental.dailyDollarPrice;
    let rentalFeeUSD = totalUSDAmount * 0.1;
    let rentalRef = Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase();

    if (chosenCurrency !== "paypal" && chosenCurrency !== "creditCard") {
      userActions.convertCoinValue(chosenCurrency, "usd").then(usdValue => {
        this.setState({
          rentalRef: rentalRef,
          totalUSDAmount: totalUSDAmount,
          rentalFeeUSD: rentalFeeUSD,
          totalCurrencyAmount: (totalUSDAmount + rentalFeeUSD) / usdValue,
          numberDaysReservation: numberDaysReservation
        });
      });
    } else {
      this.setState({
        rentalRef: rentalRef,
        totalUSDAmount: totalUSDAmount,
        rentalFeeUSD: rentalFeeUSD,
        totalCurrencyAmount: totalUSDAmount + rentalFeeUSD,
        numberDaysReservation: numberDaysReservation
      });
    }
  }

  async onCheckout() {
    const {
      chosenCurrency,
      totalUSDAmount,
      totalCurrencyAmount,
      numberDaysReservation,
      rentalRef
    } = this.state;

    if (chosenCurrency == "paypal") {
      token =
        "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSjkuZXlKbGVIQWlPakUxTmpFd05qSTFNRFlzSW1wMGFTSTZJbUk0T0dGaU0ySm1MVGhtWmpZdE5EbGxOaTFoTkdObUxXSTRObU5sTTJNM1kyWXdZaUlzSW5OMVlpSTZJak0wT0hCck9XTm5aak5pWjNsM01tSWlMQ0pwYzNNaU9pSkJkWFJvZVNJc0ltMWxjbU5vWVc1MElqcDdJbkIxWW14cFkxOXBaQ0k2SWpNME9IQnJPV05uWmpOaVozbDNNbUlpTENKMlpYSnBabmxmWTJGeVpGOWllVjlrWldaaGRXeDBJanBtWVd4elpYMHNJbkpwWjJoMGN5STZXeUp0WVc1aFoyVmZkbUYxYkhRaVhTd2liM0IwYVc5dWN5STZlMzE5LjNHelUtWVhmcFRSdWRzQ1ljeDN4REk5YVZFcUtQQVRSMHg3MnAwUGYxUmVidkJmUkJsNGU4U1Jyeml4aTlVM2ExSXA5Y2FlS0NPSlNUVy1YYWN4bGlnIiwiY29uZmlnVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaS92MS9jb25maWd1cmF0aW9uIiwiZ3JhcGhRTCI6eyJ1cmwiOiJodHRwczovL3BheW1lbnRzLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vZ3JhcGhxbCIsImRhdGUiOiIyMDE4LTA1LTA4In0sImNoYWxsZW5nZXMiOltdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9vcmlnaW4tYW5hbHl0aWNzLXNhbmQuc2FuZGJveC5icmFpbnRyZWUtYXBpLmNvbS8zNDhwazljZ2YzYmd5dzJiIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IkFjbWUgV2lkZ2V0cywgTHRkLiAoU2FuZGJveCkiLCJjbGllbnRJZCI6bnVsbCwicHJpdmFjeVVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS9wcCIsInVzZXJBZ3JlZW1lbnRVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vdG9zIiwiYmFzZVVybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9jaGVja291dC5wYXlwYWwuY29tIiwiZGlyZWN0QmFzZVVybCI6bnVsbCwiYWxsb3dIdHRwIjp0cnVlLCJlbnZpcm9ubWVudE5vTmV0d29yayI6dHJ1ZSwiZW52aXJvbm1lbnQiOiJvZmZsaW5lIiwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwibWVyY2hhbnRBY2NvdW50SWQiOiJhY21ld2lkZ2V0c2x0ZHNhbmRib3giLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6IjM0OHBrOWNnZjNiZ3l3MmIiLCJ2ZW5tbyI6Im9mZiJ9";

      const {
        nonce,
        payerId,
        email,
        firstName,
        lastName,
        phone
      } = await requestOneTimePayment(token, {
        amount: totalCurrencyAmount,
        currency: "USD",
        localeCode: "fr_FR",
        shippingAddressRequired: false,
        userAction: "commit",
        intent: "authorize"
      })
        .then(result => {
          console.log(result);
          // todo créditer le compte paypal du montant reçu
          this.handleReservationTransactions();
        })
        .catch(err => {
          Alert.alert("Payment issue please check your PayPal account.");
          console.log("error:", err);
        });
    } else {
      this.handleReservationTransaction();
    }
  }

  handleReservationTransaction() {
    const { rentalReservation, itemRental } = this.props;
    const {
      chosenCurrency,
      totalUSDAmount,
      totalCurrencyAmount,
      numberDaysReservation,
      rentalRef
    } = this.state;

    const userData = window.currentUser;
    const userWalletChosenCurrency =
      userData["wallet"][chosenCurrency]["amount"];

    const receiverID = itemRental["owner"];

    if (
      userWalletChosenCurrency !== undefined &&
      userWalletChosenCurrency >= totalCurrencyAmount
    ) {
      let newTransaction = {
        amount: totalCurrencyAmount,
        coin: chosenCurrency,
        date: moment(new Date()),
        owner: userData["userID"],
        receiver: receiverID,
        type: "debit"
      };

      let newReservation = {
        reservationDates: rentalReservation["reservationDates"],
        numberDaysReservation: numberDaysReservation,
        rentalMaker: window.currentUser["userID"],
        rentalTotalAmount: totalCurrencyAmount,
        rentalRef: rentalRef,
        currency: chosenCurrency,
        status: "Pending"
      };

      firebase
        .database()
        .ref("transactions")
        .push(newTransaction)
        .then(resultTransaction => {})
        .catch(err => {
          console.log("error:", err);
        });

      firebase
        .database()
        .ref(
          "users/" +
            window.currentUser["userID"] +
            "/wallet/" +
            chosenCurrency +
            "/amount"
        )
        .transaction(function(amount) {
          if (amount >= totalCurrencyAmount) {
            amount = amount - totalCurrencyAmount;
          }
          return amount;
        })
        .then(result => {})
        .catch(err => {
          console.log("error:", err);
        });

      firebase
        .database()
        .ref("users/" + receiverID + "/wallet/" + chosenCurrency + "/amount")
        .transaction(function(amount) {
          if (amount) {
            amount = amount + totalCurrencyAmount;
          }
          return amount;
        })
        .then(result => {})
        .catch(err => {
          console.log("error:", err);
        });

      firebase
        .database()
        .ref("rentals/" + itemRental.key + "/reservations")
        .push(newReservation)
        .then(resultReservation => {
          this.startChat(resultReservation.key);
        })
        .catch(err => {
          console.log("error:", err);
        });
    } else {
      alert("You don't have enough cash.");
    }
  }

  async startChat(reservationKey) {
    const { itemRental, rentalReservation } = this.props;
    const { chosenCurrency } = this.state;

    let rentalOwner = itemRental.owner;
    let currentUser = window.currentUser;

    let IDlist = [
      rentalOwner,
      window.currentUser["userID"],
      itemRental.key,
      reservationKey
    ];
    IDlist.sort();
    const chatID =
      IDlist[0] + "*_*" + IDlist[1] + "*_*" + IDlist[2] + "*_*" + IDlist[3];

    let isExistContact = false;

    await firebase
      .database()
      .ref("chat/" + chatID)
      .once("value", snapshot => {
        if (snapshot.val() !== null) isExistContact = true;
      });

    if (isExistContact) {
      Actions.reset("dashboardContainerScreen");
    } else {
      var message = {
        _id: userActions.generatorMessageID(),
        text: rentalReservation["reservationDetails"],
        createdAt: Date.now(),
        system: false,
        user: {
          _id: currentUser["userID"],
          name: currentUser["firstname"]
        }
      };

      await firebase
        .database()
        .ref("chat")
        .child(chatID)
        .push(message)
        .then()
        .catch(err => {
          console.log("error===", err);
        });

      Actions.reset("dashboardContainerScreen");
    }
  }

  render() {
    const { itemRental, rentalReservation } = this.props;
    const {
      rentalFeeUSD,
      rentalRef,
      chosenCurrency,
      totalUSDAmount,
      totalCurrencyAmount,
      numberDaysReservation
    } = this.state;

    let startDate = moment(
      rentalReservation["reservationDates"]["startDate"]
    ).format("MMM. D");
    let endDate =
      rentalReservation["reservationDates"]["endDate"] !== null
        ? moment(rentalReservation["reservationDates"]["endDate"]).format(
            "MMM. D"
          )
        : null;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Checkout</Text>
        </View>

        <View style={styles.itemRentalContainer}>
          <Image
            style={styles.itemRentalPicture}
            source={{ uri: itemRental.pictures[0] }}
          />
          <View style={styles.itemRentalContainerText}>
            <Text style={styles.itemRentalTextTitle}>{itemRental.title}</Text>
            <Text style={styles.itemRentalTextDates}>
              {startDate + " to " + endDate}
            </Text>
            <View style={styles.containerRentalPrice}>
              <Text style={styles.itemRentalTextPrice}>
                {itemRental.dailyDollarPrice}$ x {numberDaysReservation} day
                {endDate !== null && "s"}
              </Text>
              <Text style={styles.itemRentalTextPrice}>
                {itemRental.dailyDollarPrice * numberDaysReservation}$
              </Text>
            </View>
            <View style={styles.containerRentalPrice}>
              <Text style={styles.itemRentalTextPrice}>Rental fee</Text>
              <Text style={styles.itemRentalTextPrice}>
                {rentalFeeUSD.toFixed(2)}$
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.separatorLine} />

        <Text style={styles.totalTitle}>Total</Text>

        <View style={styles.containerRentalPrice}>
          <Text style={styles.totalUSDAmount}>Amount in USD</Text>
          <Text style={styles.totalUSDAmount}>
            {totalUSDAmount + rentalFeeUSD}$
          </Text>
        </View>

        <View style={styles.containerRentalPrice}>
          <Text style={styles.totalCurrencyAmount}>
            {chosenCurrency.toUpperCase()}
          </Text>
          <Text style={styles.totalCurrencyAmount}>
            {totalCurrencyAmount.toFixed(5)}
          </Text>
        </View>

        <View style={styles.separatorLine} />

        <View style={styles.containerRentalPrice}>
          <Text style={styles.rentalRef}>Rental ref.</Text>
          <Text style={styles.rentalRef}>{rentalRef}</Text>
        </View>

        <View style={styles.separatorLine} />

        <Text style={styles.termsOfService}>
          By completing this renting, you agree to our terms of service.
        </Text>

        {totalCurrencyAmount !== 0 && (
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => this.onCheckout()}
          >
            <Text style={styles.textBtnNext}>Checkout</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
