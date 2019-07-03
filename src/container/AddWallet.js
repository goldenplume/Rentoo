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
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "../style/addWalletStyle";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";

import cryptoList from "../data/cryptoList";

import * as ethereumActions from "../cryptosActions/ethereum";

export default class AddWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: [],
      filteredCryptoList: [],
      hasSelectedOne: false
    };
  }

  componentDidMount() {
    this.getWalletData();
  }

  getWalletData() {
    firebase
      .database()
      .ref("users/" + window.currentUser["userID"] + "/wallet")
      .on("value", walletSnapshot => {
        let wallet =
          walletSnapshot._value !== null
            ? Object.keys(walletSnapshot.val())
            : [];

        let filteredCryptoList = [];

        cryptoList.map(cryptoItem => {
          cryptoItem.isSelected = false;

          if (!wallet.includes(cryptoItem.name)) {
            filteredCryptoList.push(cryptoItem);
          }
        });

        this.setState({
          wallet: wallet,
          filteredCryptoList: filteredCryptoList
        });
      });
  }

  selectCrypto(crypto) {
    const { filteredCryptoList } = this.state;

    let numberSelected = 0;

    filteredCryptoList.map(item => {
      item == crypto && item.isSelected == true
        ? (item.isSelected = false)
        : item == crypto &&
          item.isSelected == false &&
          (item.isSelected = true);

      if (item.isSelected) {
        numberSelected++;
      }
    });

    this.setState({
      filteredCryptoList: filteredCryptoList,
      hasSelectedOne: numberSelected > 0 ? true : false
    });
  }

  createWallet() {
    const { wallet, filteredCryptoList } = this.state;

    let ethereumWallet = ethereumActions.createAccount();

    let newWallet = {};

    filteredCryptoList.map(item => {
      if (item.isSelected) {
        newWallet[item.name] = {
          amount: 30,
          public: ethereumWallet.address,
          private: ethereumWallet.privateKey
        };
      }
    });

    firebase
      .database()
      .ref("users/" + window.currentUser["userID"] + "/wallet")
      .update(newWallet);

    Actions.pop();
  }

  render() {
    const { wallet, filteredCryptoList, hasSelectedOne } = this.state;

    return (
      <View style={styles.container}>
        {filteredCryptoList.map((cryptoItem, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => this.selectCrypto(cryptoItem)}
            >
              <View style={styles.itemCrypto}>
                <View style={styles.titleCryptoContainer}>
                  <View
                    style={[
                      styles.cryptoLogoContainer,
                      { backgroundColor: cryptoItem.color }
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={styles.cryptoLogo}
                      source={cryptoItem.logo}
                    />
                  </View>
                  <Text style={styles.cryptoText}>
                    {cryptoItem.name.charAt(0).toUpperCase() +
                      cryptoItem.name.slice(1)}
                  </Text>
                </View>
                {cryptoItem.isSelected ? (
                  <Image
                    resizeMode="contain"
                    style={styles.isCheckedCrypto}
                    source={require("../../assets/UI/checked.png")}
                  />
                ) : (
                  <Image
                    resizeMode="contain"
                    style={styles.isCheckedCrypto}
                    source={require("../../assets/UI/unchecked.png")}
                  />
                )}
              </View>
              <View style={styles.separatorLine} />
            </TouchableOpacity>
          );
        })}

        {hasSelectedOne && (
          <TouchableOpacity
            style={styles.btnSave}
            onPress={() => this.createWallet()}
          >
            <Text style={styles.textBtnSave}>Create wallet(s)</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
