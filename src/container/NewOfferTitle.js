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

import styles from "../style/newOfferStyle";

export default class NewOfferTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      summary: ""
    };
  }

  componentDidMount() {
    this.rentalTitleInput.focus();
  }

  nextStep() {
    const { title, summary } = this.state;
    const newRentalItem = { title: title, summary: summary };
    Actions.NewOfferPhotos({ newRentalItem: newRentalItem });
  }

  render() {
    const { title, summary } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>New offer</Text>
          <Text style={styles.pageInstructions}>
            Write a title and a summary.
          </Text>
        </View>

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>Title</Text>
          <Text>{40 - title.length}</Text>
        </View>

        <TextInput
          ref={rentalTitle => {
            this.rentalTitleInput = rentalTitle;
          }}
          returnKeyType={"next"}
          placeholder="Title"
          value={title}
          onChangeText={title => this.setState({ title })}
          onSubmitEditing={() => this.rentalSummaryInput.focus()}
          maxLength={40}
        />

        <View style={styles.separatorLine} />

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>Summary</Text>
          <Text>{400 - summary.length}</Text>
        </View>

        <TextInput
          ref={rentalSummary => {
            this.rentalSummaryInput = rentalSummary;
          }}
          returnKeyType={"done"}
          placeholder="Summary"
          value={summary}
          onChangeText={summary => this.setState({ summary })}
          onSubmitEditing={() => summary.length > 10 && this.nextStep()}
          maxLength={400}
          multiline={true}
          numberOfLines={4}
          blurOnSubmit
        />

        <View style={styles.separatorLine} />

        {title.length > 3 && summary.length > 10 && (
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
