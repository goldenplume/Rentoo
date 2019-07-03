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
  responsiveHeight
} from "react-native-responsive-dimensions";

import categories from "../data/categories";
import styles from "../style/newOfferStyle";

export default class NewOfferCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: categories,
      hasSelectedOne: false
    };
  }

  selectCategory(category) {
    categories.map(item => {
      item == category ? (item.isSelected = true) : (item.isSelected = false);
    });
    this.setState({ categories: categories, hasSelectedOne: true });
  }

  nextStep() {
    const { newRentalItem } = this.props;
    const { categories } = this.state;

    categories.map(item => {
      if (item.isSelected) {
        newRentalItem["category"] = item.title;
      }
    });

    Actions.NewOfferAvailability({ newRentalItem: newRentalItem });
  }

  render() {
    const { hasSelectedOne } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Category</Text>
          <Text style={styles.pageInstructions}>
            Choose the category corresponding to your rental.
          </Text>
        </View>

        {categories.map((categoryItem, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => this.selectCategory(categoryItem)}
            >
              <View style={styles.itemCrypto}>
                <View style={styles.titleCryptoContainer}>
                  <View
                    style={[
                      styles.categoryLogoContainer,
                      { backgroundColor: categoryItem.color }
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={styles.categoryLogo}
                      source={categoryItem.logo}
                    />
                  </View>
                  <Text style={styles.categoryText}>
                    {categoryItem.title.charAt(0).toUpperCase() +
                      categoryItem.title.slice(1)}
                  </Text>
                </View>
                {categoryItem.isSelected ? (
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
