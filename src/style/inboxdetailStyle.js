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
  headerInboxDetail: {
    position: "absolute",
    left: 0,
    right: 0,
    height: responsiveHeight(7),
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.33),
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgba(0,0,0,0.15)",
    borderBottomWidth: 1
  },
  textHeader: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2)
  },
  textInputContainer: {
    width: "100%",
    height: responsiveHeight(16.2),
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: responsiveWidth(5.33),
    borderTopWidth: 1,
    borderTopColor: "#ECECEC"
  },
  line: {
    height: 2,
    backgroundColor: "#ECECEC"
  },
  textinput: {
    width: responsiveWidth(92),
    height: responsiveHeight(8)
  },
  buttonBottomLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftbtn: {
    flexDirection: "row",
    width: responsiveWidth(15),
    justifyContent: "space-between",
    alignItems: "center"
  },
  optionChat: {
    height: responsiveHeight(5),
    width: responsiveWidth(5)
  },
  sendBtnText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2),
    color: "#0055FF"
  }
});

module.exports = styles;
