/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Actions } from "react-native-router-flux";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import ImagePicker from "react-native-image-picker";
import ImageResizer from "react-native-image-resizer";
import firebase from "react-native-firebase";
import uuid from "uuid/v4"; // Import UUID to generate UUID

import styles from "../style/newOfferStyle";

const options = {
  mediaType: "photo",
  quality: 1,
  title: "Select Image",
  storageOptions: {
    mediaType: "photo",
    quality: 1,
    allowsEditing: true,
    aspect: [4, 3]
  }
};

export default class NewOfferPhotos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSource: "",
      imageUri: "",
      uploading: false,
      progress: 0,
      imagesList: []
    };
  }

  pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (!response.didCancel) {
        const source = { uri: response.uri };

        console.log(response);

        ImageResizer.createResizedImage(response.uri, 400, 300, "JPEG", 80)
          .then(({ uri }) => {
            this.setState({
              imgSource: source,
              imageUri: uri
            });
            this.uploadImage();
          })
          .catch(err => {
            console.log("error=", err);
          });
      }
    });
  };

  uploadImage = () => {
    const ext = "jpg"; // Extract image extension
    const filename = `${uuid()}.${ext}`; // Generate unique name
    this.setState({ uploading: true });
    firebase
      .storage()
      .ref("rentalsImages/" + filename)
      .putFile(this.state.imageUri)
      .on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          let state = {};
          state = {
            ...state,
            progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
          };
          if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
            const allImages = this.state.imagesList;
            allImages.push(snapshot.downloadURL);
            console.log(snapshot.downloadURL);
            state = {
              ...state,
              uploading: false,
              imgSource: "",
              imageUri: "",
              progress: 0,
              imagesList: allImages
            };
          }
          this.setState(state);
        },
        error => {
          unsubscribe();
          alert("Sorry, Try again.");
        }
      );
  };

  nextStep() {
    const { newRentalItem } = this.props;
    const { imagesList } = this.state;

    newRentalItem["pictures"] = imagesList;

    Actions.NewOfferCategories({ newRentalItem: newRentalItem });
  }

  render() {
    const { imagesList } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Add photos</Text>
          <Text style={styles.pageInstructions}>
            Highlight your offer with one, two or three photos.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start"
          }}
        >
          {imagesList.map((item, index) => {
            return (
              <View key="index" style={styles.addedPhoto}>
                <Image
                  key={index}
                  resizeMode="cover"
                  source={{ uri: item }}
                  style={{ flex: 1 }}
                />
              </View>
            );
          })}

          {imagesList.length < 3 && (
            <TouchableOpacity
              onPress={() => this.pickImage()}
              style={styles.addPicture}
            >
              <Image
                resizeMode="contain"
                style={styles.addPictureIcon}
                source={require("../../assets/images/camera2.png")}
              />
            </TouchableOpacity>
          )}
        </View>

        {imagesList.length > 0 && (
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
