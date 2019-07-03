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
    paddingHorizontal: responsiveWidth(5.33)
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: responsiveHeight(5)
  },
  profilePicture: {
    height: responsiveHeight(10),
    width: responsiveHeight(10),
    marginBottom: responsiveHeight(1),
    borderRadius: 500,
    overflow: "hidden"
  },
  editProfilePicture: {
    color: "#0055FF",
    fontFamily: "SFProText-Regular",
    fontWeight: "600",
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
  priceText: {
    fontSize: responsiveFontSize(5)
  },
  separatorLine: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginVertical: responsiveHeight(2.5)
  },
  btnSave: {
    position: "absolute",
    bottom: responsiveHeight(5),
    right: responsiveWidth(5),
    left: responsiveWidth(5),
    height: responsiveHeight(7),
    borderRadius: 5,
    backgroundColor: "#0055FF",
    justifyContent: "center",
    alignItems: "center"
  },
  textBtnSave: {
    fontFamily: "SFProText-Semibold",
    color: "#fff",
    fontSize: responsiveFontSize(2.4)
  }
});

module.exports = styles;
