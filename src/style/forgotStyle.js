
import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(5.33)
  },
  forgotText: {
    fontFamily: "TruenoSBd",
    fontSize: 26,
  },
  formLayout: {
    marginTop: responsiveHeight(3),
    flexDirection: "column",
  },
  formItem: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#F2F2F2", 
    height: responsiveHeight(5),
    paddingLeft: 10,
    borderRadius: 5,
  },
  resetText:{
    marginTop: responsiveHeight(2),
    fontFamily: "SFProText-Regular",
    fontSize: 15,
  },
  btnConfirmLayout: {
    marginTop: responsiveHeight(2),
    backgroundColor: "#99BBFF",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnConfirmText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 17,
    textAlign: "center"
  }
});

module.exports = styles;