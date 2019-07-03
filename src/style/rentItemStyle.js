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
    position: "relative",
    paddingHorizontal: responsiveWidth(5.33),
    paddingTop: responsiveHeight(3)
  },
  pageHeader: {
    marginBottom: responsiveHeight(4)
  },
  pageTitle: {
    fontSize: responsiveFontSize(3.5),
    marginBottom: responsiveHeight(2)
  },
  pageInstructions: {
    fontSize: responsiveFontSize(2)
  },
  headerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: responsiveHeight(2)
  },
  headerInputTitle: {
    color: "rgba(0,0,0,0.6)"
  },
  separatorLine: {
    width: responsiveWidth(100),
    height: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginVertical: responsiveHeight(2.5),
    marginHorizontal: responsiveWidth(-5.33)
  },

  // Radio button selector //
  itemCrypto: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  titleCryptoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  categoryLogoContainer: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    borderRadius: 200,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  categoryLogo: {
    height: "50%",
    width: "50%"
  },
  categoryText: {
    fontSize: responsiveFontSize(2)
  },
  isCheckedCrypto: { height: responsiveWidth(7), width: responsiveWidth(7) },
  categoriesSeparatorLine: {
    alignSelf: "flex-end",
    width: "80%",
    height: 1,
    backgroundColor: "#F5F5FD",
    marginVertical: responsiveHeight(2)
  },
  // End radio button selector //

  // Checkout UI //
  itemRentalContainer: { flexDirection: "row", justifyContent: "flex-start" },
  itemRentalPicture: {
    height: responsiveWidth(20),
    width: responsiveWidth(30),
    marginRight: responsiveWidth(3),
    borderRadius: 5
  },
  itemRentalContainerText: {
    flex: 1,
    height: 60,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  itemRentalTextTitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2)
  },
  itemRentalTextDates: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8),
    color: "rgba(0,0,0,0.6)"
  },
  containerRentalPrice: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemRentalTextPrice: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8),
    color: "rgba(0,0,0,0.6)"
  },
  totalTitle: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.7),
    marginBottom: responsiveHeight(2)
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
  rentalRef: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8),
    color: "rgba(0,0,0,0.6)"
  },
  termsOfService: {
    color: "rgba(0,0,0,0.6)"
  },
  // End checkout UI//

  btnNext: {
    position: "absolute",
    bottom: responsiveHeight(5),
    right: responsiveWidth(5.33),
    left: responsiveWidth(5.33),
    height: responsiveHeight(7),
    borderRadius: 5,
    backgroundColor: "#0055FF",
    justifyContent: "center",
    alignItems: "center"
  },
  textBtnNext: {
    fontFamily: "SFProText-Semibold",
    color: "#fff",
    fontSize: responsiveFontSize(2.4)
  }
});

module.exports = styles;
