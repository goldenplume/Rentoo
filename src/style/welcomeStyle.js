import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcomeGridViewImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(55.78)
  },
  welcomeImage: {
    width: "100%",
    height: "100%"
  },
  ooImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(100)
  },
  innerContainer: {
    marginHorizontal: responsiveWidth(5.33),
    marginTop: responsiveHeight(-12.8)
  },
  btnLayout: {
    marginTop: responsiveHeight(3.94),
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rentText: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(4.3)
  },
  welcomeText: {
    marginTop: responsiveHeight(1),
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2),
    lineHeight: 25
  },
  midLayout: {
    flexDirection: "column",
    width: responsiveWidth(89.34),
    height: responsiveHeight(28.57),
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  btnSignUpLayout: {
    backgroundColor: "#0055FF",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5.6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  btnLoginLayout: {
    marginTop: responsiveHeight(1.47),
    backgroundColor: "#A3A3BD",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5.6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  btnNotNowLayout: {
    marginTop: responsiveHeight(1.47),
    backgroundColor: "transparent",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5.6),
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2),
    textAlign: "center",
    color: "white"
  },
  notNowBtnText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2),
    textAlign: "center",
    color: "#0055FF"
  },
  ooIcon: {
    width: 67,
    height: 44
  }
});

module.exports = styles;
