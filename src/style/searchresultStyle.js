import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(5.33)
  },
  nameText: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(3.2)
  },
  searchBar: {
    backgroundColor: "#F2F2F2",
    marginTop: responsiveHeight(1.48),
    height: responsiveHeight(4.4)
  },
  formItem: {
    backgroundColor: "#F2F2F2",
    height: responsiveHeight(5),
    paddingLeft: 10
  },
  btnFiltersLayout: {
    marginRight: responsiveWidth(2),
    width: responsiveWidth(18),
    height: responsiveHeight(4),
    backgroundColor: "#A3A3BD",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  btnFilterText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    color: "#FFFFFF"
  },
  btnContainer: {
    marginTop: responsiveHeight(1.48),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  interestContainer: {
    marginTop: responsiveHeight(3.94),
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  interestInsideContainer: {
    marginTop: responsiveHeight(2.95),
    flexDirection: "column",
    justifyContent: "center"
  },
  interestHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text1IterestHeader: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.6),
    color: "#000000",
    marginBottom: responsiveHeight(2)
  }
});

module.exports = styles;
