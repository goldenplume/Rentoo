/**
 * Search Result Screen
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
import { Action } from "react-native-router-flux";
import styles from "../style/searchresultStyle";
import { SearchBar } from "react-native-elements";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import StarView from "react-native-star-view";
import firebase from "react-native-firebase";

import Rect from "../component/Rect";
import { Searchbar } from "../component/react-native-paper";
import ItemRental from "../component/ItemRental";

export default class Searchresult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query,
      rentalsQuery: []
    };
  }

  componentWillMount() {
    this.queryRentals(this.props.query);
  }

  queryRentals(query) {
    firebase
      .database()
      .ref("rentals/")
      .orderByChild("title")
      .startAt(query)
      .endAt(query + "\uf8ff")
      .on("value", rentalsSnapshot => {
        let rentals = [];

        rentalsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;

          rentals.push(item);
        });

        console.log(rentals);

        this.setState({ rentalsQuery: rentals });
      });
  }

  render() {
    const { query, rentalsQuery } = this.state;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <Text style={styles.nameText}>Search</Text>

          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={query => {
              this.setState({ query: query });
              this.queryRentals(query);
            }}
            value={query}
          />

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnFiltersLayout}>
              <Text style={styles.btnFilterText}>Nearby</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFiltersLayout}>
              <Text style={styles.btnFilterText}>Dates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFiltersLayout}>
              <Text style={styles.btnFilterText}>Filters</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.interestContainer}>
            <View style={styles.interestHeader}>
              <Text style={styles.text1IterestHeader}>
                {rentalsQuery.length} rentals
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              {rentalsQuery.map((item, index) => (
                <ItemRental
                  data={item}
                  style={{ marginBottom: responsiveHeight(2) }}
                  isFullWidth={true}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
