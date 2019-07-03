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
import styles from "../style/yourbalanceStyle";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import moment from "moment";

import * as userActions from "../actions/userActions";
import StarView from "../component/Startview";

export default class Yourbalance extends Component {
  constructor(props) {
    super(props);

    this.state = { userTransactions: [], dollarPrice: 0 };
  }

  componentWillMount() {
    const { data } = this.props;

    this.props.navigation.setParams({
      headerStyle: { backgroundColor: data.color }
    });

    this.getRecentTransactions();

    if (data.name !== "paypal" && data.name !== "creditCard")
      this.getDollarValue();
  }

  getRecentTransactions() {
    const userID = window.currentUser["userID"];
    const { data } = this.props;

    firebase
      .database()
      .ref("transactions/")
      .on("value", transactionsSnapshot => {
        let userTransactions = [];
        let i = 0;

        transactionsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = i++;

          if (item.owner == userID || item.receiver == userID) {
            if (item.coin == data.name) userTransactions.push(item);
          }
        });

        this.setState({ userTransactions: userTransactions.reverse() });
      });
  }

  async getDollarValue() {
    const { data, balance } = this.props;

    userActions.convertCoinValue(data.name, "usd").then(usdValue => {
      if (usdValue !== undefined)
        this.setState({ dollarPrice: usdValue * balance });
    });
  }

  render() {
    const { data, balance } = this.props;
    const { dollarPrice, userTransactions } = this.state;

    return (
      <View style={[styles.container, { backgroundColor: data.color }]}>
        <ScrollView style={styles.midContainer}>
          <View style={[styles.topContainer, { backgroundColor: data.color }]}>
            <View style={styles.totopLayout}>
              <View style={styles.containerLogo}>
                <Image
                  resizeMode="contain"
                  style={styles.itemLogo}
                  source={data.logo}
                />
              </View>
              <Text style={styles.currencyName}>{data.name.toUpperCase()}</Text>
            </View>
            <Text style={styles.currencyBalance}>{balance.toFixed(2)}</Text>
            {dollarPrice !== 0 && (
              <Text style={styles.dollarCurrency}>
                {dollarPrice.toFixed(2)}$
              </Text>
            )}
          </View>

          <View style={styles.containerRecentTransactions}>
            <Text style={styles.title}>Recent transactions</Text>

            {userTransactions.map((item, index) => {
              const userID = window.currentUser["userID"];
              const isReceived = item.receiver == userID ? true : false;

              return (
                <View>
                  <View style={styles.itemLayout} key={index}>
                    <View
                      style={[
                        styles.iconTransactionContainer,
                        { backgroundColor: isReceived ? "blue" : "grey" }
                      ]}
                    >
                      <Image
                        resizeMode="contain"
                        style={[
                          styles.iconTransaction,
                          {
                            transform: [
                              { rotate: isReceived ? "180deg" : "0deg" }
                            ]
                          }
                        ]}
                        source={require("../../assets/images/toparrow.png")}
                      />
                    </View>
                    <View style={styles.itemContainer}>
                      <View style={styles.leftItem}>
                        <Text style={styles.upperText}>
                          {isReceived ? "Received" : "Sent"}
                        </Text>
                        <Text style={styles.inlineText}>
                          {moment(item.date).format("MMMM Do YYYY, h:mm a")}
                        </Text>
                      </View>
                      <View style={styles.rightItem}>
                        <Text style={styles.inlineText}>
                          {item.coin.toUpperCase()}
                        </Text>
                        <Text style={styles.upperText}>
                          {item.amount.toFixed(4)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bottomline} />
                </View>
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={() => Actions.Send()}
            style={[styles.bottomButton, { backgroundColor: "#A3A3BD" }]}
          >
            <Image
              resizeMode="contain"
              style={styles.arrowBalance}
              source={require("../../assets/images/toparrow.png")}
            />
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>

          {data.name !== "paypal" && data.name !== "creditCard" && (
            <TouchableOpacity
              onPress={() =>
                Actions.Receive({
                  title:
                    "Receive " +
                    data.name.charAt(0).toUpperCase() +
                    data.name.slice(1),
                  address: this.props.publicKey
                })
              }
              style={[
                styles.bottomButton,
                { backgroundColor: "#0055FF", marginLeft: 10 }
              ]}
            >
              <Image
                resizeMode="contain"
                style={[styles.arrowBalance, styles.rotateIcons]}
                source={require("../../assets/images/toparrow.png")}
              />
              <Text style={styles.buttonText}>Receive</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
