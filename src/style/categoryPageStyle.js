import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: responsiveWidth(5.33)
  },
  rentalsContainer: {
    marginTop: responsiveHeight(3),
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  textTitleCategory: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(3.2),
    color: "#000000"
  }
});

module.exports = styles;
