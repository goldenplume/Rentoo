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
  btnShareAddress: {
    position: "absolute",
    bottom: responsiveHeight(5),
    right: responsiveWidth(5.33),
    left: responsiveWidth(5.33),
    flexDirection: "row",
    height: responsiveHeight(6),
    borderRadius: 5,
    backgroundColor: "#0055FF",
    justifyContent: "center",
    alignItems: "center"
  },
  textBtnShareAddress: {
    fontFamily: "SFProText-Semibold",
    color: "#fff",
    fontSize: responsiveFontSize(2)
  }
});

module.exports = styles;
