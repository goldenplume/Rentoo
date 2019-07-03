import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  scanCamera: {
    flex: 1
  },
  qrInstructions: {
    position: "absolute",
    bottom: responsiveHeight(5),
    width: "100%",
    textAlign: "center",
    fontFamily: "SFProText-Regular",
    color: "white",
    fontSize: responsiveFontSize(2)
  }
});

module.exports = styles;
