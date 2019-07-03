import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative"
  },
  closeBtn: {
    position: "absolute",
    left: 20,
    top: 52,
    zIndex: 999
  },
  closeImage: {
    resizeMode: "contain",
    width: 48,
    height: 48
  },
  containerItemRental: {
    backgroundColor: "#002266",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 5,
    overflow: "visible"
  },
  itemRentalPrice: {
    color: "white",
    fontSize: responsiveFontSize(1.6),
    fontWeight: "600"
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#002266",
    transform: [{ rotate: "180deg" }]
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    left: 0,
    bottom: 0
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5.33%",
    marginTop: 16
  },
  leftText: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.6)
  },
  rightBtn: {
    width: 64,
    height: 32,
    backgroundColor: "#A3A3BD",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  rightText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    color: "white"
  },
  scrollViewRentals: { marginTop: 24, paddingLeft: responsiveWidth(5.33) }
});

module.exports = styles;
