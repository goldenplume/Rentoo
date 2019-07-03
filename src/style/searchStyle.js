import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(5.33)
  },
  searchBar: {
    backgroundColor: "#F2F2F2",
    marginTop: responsiveHeight(1.48),
    marginHorizontal: responsiveWidth(5.33),
    height: responsiveHeight(6)
  },
  searchBarInput: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2)
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
    fontSize: responsiveFontSize(1.8),
    color: "#FFFFFF"
  },
  btnGroupLayout: {
    marginTop: responsiveHeight(3),
    marginRight: responsiveWidth(2.7),
    width: responsiveWidth(25.6),
    height: responsiveHeight(13.8),
    borderRadius: 8
  },
  btnContainer: {
    marginVertical: responsiveHeight(1.48),
    marginHorizontal: responsiveWidth(5.33),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  categoryItem: {
    position: "absolute",
    top: responsiveWidth(3.2),
    left: responsiveWidth(3.2),
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    maxHeight: '80%',
    minHeight: '50%',
    maxWidth: '80%',
    minWidth: '50%'
  },
  itemGroupText: {
    position: "absolute",
    bottom: responsiveWidth(3.2),
    left: responsiveWidth(3.2),
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8),
    color: "#FFFFFF"
  },
  categoriesContainer: {
    marginHorizontal: responsiveWidth(-5.33),
    paddingHorizontal: responsiveWidth(5.33)
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
    fontSize: responsiveFontSize(2.5),
    color: "#000000"
  },
  text2IterestHeader: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2.1),
    color: "#0055FF"
  },
  interestRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

module.exports = styles;
