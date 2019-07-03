/**
 * Search Screen
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
import { SearchBar } from "react-native-elements";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import Grid from "react-native-grid-component";
import firebase from "react-native-firebase";
import StarView from "react-native-star-view";

import styles from "../style/categoryPageStyle";
import Rect from "../component/Rect";
import { Searchbar } from "../component/react-native-paper";
import ItemRental from "../component/ItemRental";

import categories from "../data/categories";

export default class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: []
    };

    this.headerTitleUpdate = this.headerTitleUpdate.bind(this);
  }

  componentWillMount() {
    this.getRentals();
  }

  getRentals() {
    const { category } = this.props;

    firebase
      .database()
      .ref("rentals/")
      .orderByChild("category")
      .equalTo(category)
      .on("value", rentalsSnapshot => {
        let rentals = [];
        let i = 0;

        rentalsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = i++;

          rentals.push(item);
        });

        this.setState({ rentals: rentals.reverse() });
      });
  }

  _renderItem = (data, i) => <ItemRental data={data} />;
  _renderPlaceholder = (data, i) => <View style={{ flex: 1, margin: 5 }} />;

  headerTitleUpdate(event) {
    let scrollVertical = event.nativeEvent.contentOffset.y;
    console.log(scrollVertical);

    if (scrollVertical > 20) {
      Actions.refresh({ title: "test" });
    } else {
      Actions.refresh({ title: "" });
    }
  }

  render() {
    const { category } = this.props;
    const { rentals } = this.state;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        //onScroll={this.headerTitleUpdate}
        scrollEventThrottle={1}
      >
        <Text style={styles.textTitleCategory}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Text>

        <View style={styles.rentalsContainer}>
          <Grid
            style={{ marginHorizontal: -5 }}
            renderItem={this._renderItem}
            renderPlaceholder={this._renderPlaceholder}
            data={rentals}
            numColumns={2}
          />
        </View>
      </ScrollView>
    );
  }
}
