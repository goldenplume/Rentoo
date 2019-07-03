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
    justifyContent: "flex-start",
    alignItems: "center"
  },
  profilePicture: {
    height: responsiveHeight(10),
    width: responsiveHeight(10),
    marginBottom: responsiveHeight(1),
    borderRadius: 500,
    overflow: "hidden"
  },
  name: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.5),
    marginBottom: responsiveHeight(1)
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  locationPicto: {
    height: responsiveHeight(2)
  },
  locationText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: "SFProText-Regular"
  },
  profileContent: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8),
    width: "100%",
    marginTop: responsiveHeight(2.95),
    paddingHorizontal: responsiveWidth(5.33)
  },
  btnPostOffer: {
    flexDirection: "row",
    height: responsiveHeight(6),
    borderRadius: 5,
    backgroundColor: "#0055FF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(3),
    marginHorizontal: responsiveWidth(5.33)
  },
  plusIcon: {
    height: responsiveHeight(2.5),
    width: responsiveHeight(2.5),
    marginRight: 15
  },
  textBtnPostOffer: {
    fontFamily: "SFProText-Semibold",
    color: "#fff",
    fontSize: responsiveFontSize(2)
  },

  inboxText: {
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3)
  },

  itemLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2)
  },
  checkbox: {
    width: responsiveWidth(10)
  },
  itemContainer: {
    marginLeft: responsiveWidth(2),
    width: responsiveWidth(80),
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
    color: "black",
    fontSize: responsiveFontSize(1.8)
  },
  inlineText: {
    color: "#676767",
    fontSize: 13
  },
  inlineBlackText: {
    color: "black",
    fontSize: 13
  },
  bottomline: {
    height: 1,
    width: responsiveWidth(80),
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    backgroundColor: "#ECECEC"
  },
  messengerRightContainer: {
    paddingHorizontal: responsiveWidth(2),
    marginTop: responsiveHeight(2),
    backgroundColor: "#0055FF",
    width: responsiveWidth(60),
    height: responsiveHeight(16),
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end"
  },
  messgengerRightName: {
    marginTop: responsiveHeight(2),
    alignSelf: "flex-end",
    fontSize: 11,
    color: "white"
  },
  messengerLeftLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  imageLeft: {
    marginTop: responsiveHeight(2)
  },

  buttonBottomLayout: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  leftbtn: {
    flexDirection: "row",
    width: responsiveWidth(15),
    justifyContent: "space-between",
    alignItems: "center"
  },
  interestContainer: {
    marginTop: responsiveHeight(2),
    flexDirection: "column",
    justifyContent: "space-between"
  },
  interestInsideContainer: {
    paddingHorizontal: responsiveWidth(5.33),
    flexDirection: "column",
    justifyContent: "space-between"
  },
  interestHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text1IterestHeader: {
    fontFamily: "SFProText-Semibold",
    fontSize: 16,
    color: "#222222"
  },
  text2IterestHeader: {
    fontFamily: "SFProText-Semibold",
    fontSize: 12,
    color: "#0061FF"
  },
  interestImageContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: responsiveWidth(40),
    height: responsiveHeight(30)
  },
  itemIterestBtnContainer: {
    flexDirection: "column"
  },
  rectWhiteColor: {
    position: "absolute",
    right: responsiveHeight(1),
    top: responsiveHeight(1),
    width: responsiveHeight(2),
    height: responsiveHeight(2),
    backgroundColor: "#FFFFFF"
  },
  rectRedColor: {
    position: "absolute",
    right: responsiveHeight(1),
    top: responsiveHeight(1),
    width: responsiveHeight(2),
    height: responsiveHeight(2),
    backgroundColor: "#FF0000"
  },
  itemText: {
    marginTop: responsiveHeight(1),
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8)
  },
  currencyText: {
    marginTop: 5,
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    color: "#767676"
  },
  currencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
    // alignItems: "center",
  },
  currencyContainer: {
    width: responsiveWidth(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  currency: {
    width: responsiveWidth(3),
    height: responsiveHeight(3)
  },
  starLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "center"
  },
  starText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    marginLeft: 5,
    color: "#FFC08A"
  },
  starView: {
    width: 50,
    height: 10,
    marginLeft: -3
  },
  interestRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rental: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.5),
    marginBottom: responsiveHeight(2.95),
    marginTop: responsiveHeight(2.95),
    marginHorizontal: responsiveWidth(5.33),
    borderTopWidth: 2
  },
  borderline: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginTop: responsiveHeight(3.94)
  },
  heartIcon: {
    position: "absolute",
    right: responsiveHeight(1),
    top: responsiveHeight(1)
  }
});

module.exports = styles;
