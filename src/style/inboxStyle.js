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
  inboxText: {
    marginLeft: responsiveWidth(5.33),
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(3.2)
  },
  segmentContainer: {
    height: 40,
    width: "100%",
    marginTop: 10,
    marginBottom: responsiveHeight(4),
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
    height: "100%"
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
  },
  midContainer: {
    paddingHorizontal: responsiveWidth(5.33),
    height: responsiveHeight(47)
  },
  itemLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2)
  },
  userChatProfilePicture: {
    width: responsiveWidth(10),
    height: responsiveWidth(10)
  },
  itemContainer: {
    marginLeft: responsiveWidth(3.2),
    width: responsiveWidth(76.14),
    flexDirection: "column",
    justifyContent: "space-between",
    alignSelf: "flex-start"
  },
  upperItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  upperText: {
    fontFamily: "SFProText-Semibold",
    color: "black",
    fontSize: 15
  },
  inlineText: {
    fontFamily: "SFProText-Regular",
    color: "#676767",
    fontSize: 13
  },
  inlineBlackText: {
    fontFamily: "SFProText-Regular",
    color: "black",
    fontSize: 13
  },
  bottomline: {
    height: 1,
    width: responsiveWidth(80),
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    backgroundColor: "#ECECEC"
  }
});

module.exports = styles;
