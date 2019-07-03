import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  nameText: {
    marginLeft: responsiveWidth(5.33),
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(3.2)
  },
  segmentContainer: {
    height: 40,
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: responsiveWidth(5.33)
  },
  segmentItemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    alignItems: "center"
  },
  containerItemTab: {
    width: responsiveWidth(100),
    height: "100%",
    paddingHorizontal: responsiveWidth(5.33),
    marginTop: responsiveHeight(2)
  },
  textTabActive: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8)
  },
  textTabUnactive: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8),
    color: "#C3C3C3"
  },
  viewUnderlineActive: {
    height: 2,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#0055FF"
  },
  viewUnderlineInactive: {
    backgroundColor: "transparent",
    height: 2,
    width: "100%",
    position: "absolute",
    bottom: 0
  }
});

module.exports = styles;
