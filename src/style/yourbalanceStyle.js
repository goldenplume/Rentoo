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
  topContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignSelf: "flex-start",
    width: responsiveWidth(100),
    height: responsiveHeight(18),
    paddingHorizontal: responsiveWidth(5.33),
    paddingBottom: responsiveHeight(2)
  },
  containerLogo: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    backgroundColor: "rgba(0,0,0, 0.2)",
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center"
  },
  itemLogo: {
    height: "50%",
    width: "50%"
  },
  currencyName: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.5),
    marginLeft: 8
  },
  currencyBalance: {
    fontFamily: "SFProText-Regular",
    fontSize: 38,
    color: "white"
  },
  midContainer: {
    height: responsiveHeight(47)
  },
  totopLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  dollarCurrency: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8),
    color: "white"
  },
  containerRecentTransactions: {
    height: responsiveHeight(100),
    backgroundColor: "#FFF",
    paddingHorizontal: responsiveWidth(5.33)
  },
  iconTransactionContainer: {
    width: responsiveWidth(10.1),
    height: responsiveWidth(10.1),
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  iconTransaction: {
    height: "40%",
    width: "40%"
  },
  itemLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2)
  },
  itemContainer: {
    marginLeft: responsiveWidth(3.2),
    width: responsiveWidth(76),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftItem: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  rightItem: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  walletsText: {
    marginBottom: responsiveHeight(2),
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3)
  },
  walletsRowLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  walletItemLayout: {
    marginTop: responsiveHeight(1.5),
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: responsiveWidth(44.5),
    height: responsiveHeight(14),
    paddingLeft: responsiveWidth(2),
    borderRadius: 5
  },
  title: {
    marginTop: responsiveHeight(2.95),
    marginBottom: responsiveHeight(2),
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.5)
  },
  upperText: {
    fontFamily: "SFProText-Semibold",
    color: "black",
    fontSize: responsiveFontSize(1.8)
  },
  inlineText: {
    fontFamily: "SFProText-Regular",
    color: "#676767",
    fontSize: responsiveFontSize(1.5)
  },
  bottomline: {
    height: 1,
    width: responsiveWidth(80),
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    backgroundColor: "#ECECEC"
  },
  whiteBox: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    backgroundColor: "white"
  },
  bottomContainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(15),
    backgroundColor: "#F5F5FD",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(5.33),
    paddingBottom: 20,
    paddingTop: responsiveHeight(2)
  },
  bottomButton: {
    flex: 1,
    height: responsiveHeight(5.66),
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    marginLeft: 12,
    textAlign: "center",
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8),
    color: "white"
  },
  arrowBalance: {
    height: responsiveWidth(6),
    width: responsiveWidth(3)
  },
  rotateIcons: {
    transform: [{ rotate: "180deg" }]
  }
});

module.exports = styles;
