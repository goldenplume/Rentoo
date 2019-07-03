import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  tabBarIcon: {
    height: responsiveWidth(5),
    width: responsiveWidth(7)
  },
  plusBtn: {
    marginRight: responsiveWidth(5),
    width: responsiveWidth(7),
    height: responsiveWidth(7)
  },
  leftBtn: {
    marginLeft: responsiveWidth(5),
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    resizeMode: "contain"
  },
  rightSignupBtn: {
    marginRight: 20,
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2),
    color: "#666666"
  }
});

module.exports = styles;
