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
  QRcontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  qrInstructions: {
    position: "absolute",
    bottom: responsiveHeight(5),
    width: "100%",
    textAlign: "center",
    fontFamily: "SFProText-Regular",
    color: "rgba(0,0,0,0.6)",
    fontSize: responsiveFontSize(2)
  }
});

module.exports = styles;
