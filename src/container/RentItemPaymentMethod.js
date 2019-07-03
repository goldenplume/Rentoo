/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import styles from "../style/rentItemStyle";
import cryptoList from "../data/cryptoList";

export default class RentItemPaymentMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rentalItemCurrencies: [],
      hasSelectedOne: false
    };
  }

  componentDidMount() {
    const { itemRental } = this.props;
    const { rentalItemCurrencies } = this.state;

    currencies = [];

    cryptoList.map((item, key) => {
      item.isSelected = false;
      if (itemRental.currencies.includes(item.name)) currencies.push(item);
    });

    this.setState({ rentalItemCurrencies: currencies });
  }

  selectPaymentMethod(currency) {
    const { rentalItemCurrencies } = this.state;

    rentalItemCurrencies.map(item => {
      item == currency ? (item.isSelected = true) : (item.isSelected = false);
    });
    this.setState({
      rentalItemCurrencies: rentalItemCurrencies,
      hasSelectedOne: true
    });
  }

  nextStep() {
    const { rentalReservation, itemRental } = this.props;
    const { rentalItemCurrencies } = this.state;

    rentalItemCurrencies.map(item => {
      if (item.isSelected) {
        rentalReservation["paymentMethod"] = item.name;
      }
    });

    Actions.RentItemDetails({
      rentalReservation: rentalReservation,
      itemRental: itemRental
    });
  }

  render() {
    const { rentalItemCurrencies, hasSelectedOne } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Pay with</Text>
          <Text style={styles.pageInstructions}>
            Choose your payment currency.
          </Text>
        </View>

        {rentalItemCurrencies.map((cryptoItem, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => this.selectPaymentMethod(cryptoItem)}
            >
              <View style={styles.itemCrypto}>
                <View style={styles.titleCryptoContainer}>
                  <View
                    style={[
                      styles.categoryLogoContainer,
                      { backgroundColor: cryptoItem.color }
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={styles.categoryLogo}
                      source={cryptoItem.logo}
                    />
                  </View>
                  <Text style={styles.categoryText}>
                    {cryptoItem.name.charAt(0).toUpperCase() +
                      cryptoItem.name.slice(1)}
                  </Text>
                </View>
                {cryptoItem.isSelected ? (
                  <Image
                    resizeMode="contain"
                    style={styles.isCheckedCrypto}
                    source={require("../../assets/UI/radioChecked.png")}
                  />
                ) : (
                  <Image
                    resizeMode="contain"
                    style={styles.isCheckedCrypto}
                    source={require("../../assets/UI/unchecked.png")}
                  />
                )}
              </View>
              <View style={styles.categoriesSeparatorLine} />
            </TouchableOpacity>
          );
        })}

        {hasSelectedOne && (
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
