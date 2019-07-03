import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative"
  },
  upperContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnSignup: {
    flexDirection: "row",
    height: responsiveHeight(6),
    borderRadius: 5,
    backgroundColor: "#0055FF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(2.95),
    marginHorizontal: responsiveWidth(5.33)
  },
  btnLogin: {
    flexDirection: "row",
    height: responsiveHeight(6),
    borderRadius: 5,
    backgroundColor: "#A3A3BD",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(1.47),
    marginHorizontal: responsiveWidth(5.33)
  },
  textBtnPostOffer: {
    fontFamily: "SFProText-Semibold",
    color: "#fff",
    fontSize: responsiveFontSize(2)
  },
  profileContent: {
    fontFamily: "SFProText-Regular",
    fontSize: 15,
    marginTop: responsiveHeight(2.95)
  },
  borderline: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginTop: responsiveHeight(3.94)
  },
});

module.exports = styles;
