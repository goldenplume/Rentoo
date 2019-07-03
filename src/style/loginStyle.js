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
  welcomeText: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(3.6)
  },
  formLayout: {
    marginTop: responsiveHeight(5),
    flexDirection: "column"
  },
  formItem: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#F2F2F2",
    height: responsiveHeight(5.66),
    paddingLeft: 16,
    borderRadius: 5
  },
  forgotTextBtn: {
    marginTop: responsiveHeight(1),
    alignItems: "flex-end"
  },
  forgotText: {
    fontFamily: "SFProText-Regular",
    color: "#1865FF",
    height: responsiveHeight(5.66)
  },
  btnLoginLayout: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#99BBFF",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  textLoginWithLayout: {
    marginTop: responsiveHeight(2.94),
    width: responsiveWidth(89.34),
    height: responsiveHeight(4),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "SFProText-Regular",
    fontSize: 17,
    borderRadius: 5
  },
  btnFBLayout: {
    marginTop: responsiveHeight(1.47),
    backgroundColor: "#4469B0",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  btnTwitterLayout: {
    marginTop: responsiveHeight(1.47),
    backgroundColor: "#58ADEB",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  btnGoogleLayout: {
    marginTop: responsiveHeight(1.47),
    backgroundColor: "#E8453C",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  btnText: {
    marginLeft: 10,
    fontFamily: "SFProText-Semibold",
    fontSize: 17,
    textAlign: "center",
    color: "white"
  },
  btnLoginText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 17,
    textAlign: "center",
    color: "white"
  }
});

module.exports = styles;
