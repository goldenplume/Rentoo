import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(5.33)
  },
  codeText: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(3.2)
  },
  formLayout: {
    marginTop: responsiveHeight(4.92),
    flexDirection: "column"
  },
  formItem: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#F2F2F2",
    height: responsiveHeight(5.66),
    paddingLeft: 10
  },
  btnVerifyLayout: {
    marginTop: responsiveHeight(2.95),
    backgroundColor: "#99BBFF",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5.66),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  btnVerifyText: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8),
    textAlign: "center",
    borderRadius: 5
  },
  recieveText: {
    marginTop: responsiveHeight(2),
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8)
  },
  resendTextBtn: {
    marginTop: responsiveHeight(1),
    alignItems: "flex-end"
  },
  resendText: {
    fontFamily: "SFProText-Regular",
    color: "#1865FF",
    fontSize: 15
  }
});

module.exports = styles;
