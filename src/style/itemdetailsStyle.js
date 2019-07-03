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
  headerGradient: {
    zIndex: 300,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: responsiveHeight(13)
  },
  navContainer: {
    zIndex: 300,
    position: "absolute",
    left: 0,
    top: 0,
    paddingHorizontal: responsiveWidth(5.33),
    marginTop: responsiveHeight(6.4),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",

    width: responsiveWidth(100),
    height: responsiveHeight(3)
  },
  leftNavBtn: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    resizeMode: "contain"
  },
  rightNavBtn: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    overflow: "hidden",
    resizeMode: "contain"
  },
  slideshow: {
    height: "50%",
    width: "50%",
    marginHorizontal: -80
  },
  categoryText: {
    marginTop: responsiveHeight(3),
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2),
    color: "#0055FF"
  },
  title: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(3.5)
  },
  sectionTitle: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.8),
    marginBottom: responsiveHeight(2)
  },
  reviewsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  starContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: responsiveWidth(33.33)
  },
  starItem: {
    width: 84,
    height: 14,
    marginTop: 4
  },
  itemContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: responsiveWidth(33.33)
  },
  itemText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.7)
  },
  subItemText: {
    marginTop: 4,
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.9),
    color: "#C0C0C0"
  },
  scrollViewContainer: {
    height: responsiveHeight(51.5)
  },
  lineSeparator: {
    marginVertical: responsiveHeight(3),
    height: 1,
    backgroundColor: "rgba(0,0,0,0.05)",
    marginHorizontal: responsiveWidth(-5.33)
  },
  btnActionRental: {
    flex: 1,
    flexDirection: "row",
    height: responsiveHeight(6),
    borderRadius: 5,
    backgroundColor: "#A3A3BD",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(3)
  },
  textBtnRental: {
    fontFamily: "SFProText-Semibold",
    color: "#fff",
    fontSize: responsiveFontSize(2)
  },
  descriptionContent: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(3)
  },
  reservationDatesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  itemDate: {
    marginRight: responsiveWidth(10)
  },
  fullAddressText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.6)
  },
  mapViewContainer: {},
  mapView: {
    height: responsiveHeight(28),
    marginHorizontal: responsiveWidth(-5.33)
  },
  gradientOverMap: {
    position: "absolute",
    height: responsiveHeight(28),
    width: responsiveWidth(100),
    marginHorizontal: responsiveWidth(-5.33),
    justifyContent: "center",
    alignItems: "center"
  },
  rentalPosition: {
    height: responsiveWidth(15),
    width: responsiveWidth(15)
  },
  exactPositionLegal: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8),
    color: "rgba(0,0,0,0.6)"
  },
  ownerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  ownerImage: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    marginRight: responsiveWidth(4)
  },
  itemTextSubTitle: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8),
    color: "rgba(0,0,0,0.6)"
  },
  itemTextSub: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8)
  },
  // -----------------------------
  containerRentalPrice: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  totalUSDAmount: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8),
    color: "rgba(0,0,0,0.6)",
    marginBottom: responsiveHeight(1)
  },
  totalCurrencyAmount: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8)
  },
  interestInsideContainer: {
    marginTop: 24
  },
  bottomAbContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "#F5F5FD",
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.33),
    paddingTop: responsiveHeight(2),
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: responsiveHeight(13),
    width: "100%",
    borderTopColor: "rgba(0,0,0,0.05)",
    borderTopWidth: 1
  },
  currencyContainer: {
    width: responsiveWidth(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemCurrency: {
    backgroundColor: "#0055FF",
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 120,
    marginRight: responsiveWidth(1),
    marginTop: 5
  },
  currency: {
    width: "50%",
    height: "50%"
  },
  rentBtn: {
    width: responsiveWidth(37),
    height: responsiveHeight(5.66),
    backgroundColor: "#0055FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  rentText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2.3),
    color: "white"
  },
  rentDayText: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.5)
  }
});

module.exports = styles;
