import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		position: 'relative',
	},
	upperContainer: {
		flexDirection: 'column',
		justifyContent: "space-around",
		alignItems: 'center',
		height: responsiveHeight(30),
	},
	name: {
		fontSize: 20,

	},
	location: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	locationText: {
		marginLeft: 5,
		fontSize: 15,
	},
	profileContent: {
		fontSize: 15,
	},
	inboxText: {
		marginLeft: responsiveWidth(4),
		marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3),
  },
	midContainer: {
		paddingLeft: responsiveWidth(4),
		paddingRight: responsiveWidth(4),
		height: responsiveHeight(47),
		width: responsiveWidth(96)
	},	
	itemLayout: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: responsiveHeight(2),
		marginBottom: responsiveHeight(2)
	},
	checkbox: {
		width: responsiveWidth(10),
	},
	itemContainer: {
		marginLeft: responsiveWidth(2),
		width: responsiveWidth(80),
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignSelf: 'flex-start'
		
	},
	upperItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
  upperText: {
    color: "black",
    fontSize: 15
  },
  inlineText: {
    color: "#676767",
    fontSize: 13,
	},
  inlineBlackText: {
    color: "black",
    fontSize: 13,
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
		alignSelf: 'flex-end'
	},
	messgengerRightName: {
		marginTop: responsiveHeight(2),
		alignSelf: 'flex-end',
		fontSize: 11,
		color: "white"
	},
	messengerLeftLayout: {
		flexDirection: 'row',
		justifyContent: "flex-start",
		alignSelf: 'flex-start'
	},
	imageLeft: {
		marginTop: responsiveHeight(2),
	},
	
	buttonBottomLayout: {
		flexDirection: 'row',
		justifyContent: "space-between",
	},
	leftbtn: {
		flexDirection: 'row',
		width: responsiveWidth(15),
		justifyContent: "space-between",
		alignItems: "center"
	},
	sendBtnText: {
		fontFamily: 'SFProText-Semibold',
		fontSize: 15,
		color: "#0055FF"
	},
	interestContainer: {
    marginTop: responsiveHeight(2),
    flexDirection: "column",
    justifyContent: "space-between",
    
  },
  interestInsideContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    
  },
  interestHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    height: responsiveHeight(30),
  },
  itemIterestBtnContainer: {
    flexDirection: "column",

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
    fontSize: 15,
  },
  currencyText: {
    marginTop: 5,
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    color: "#767676"
  },
  currencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  currencyContainer: {
    width: responsiveWidth(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currency: {
    width: responsiveWidth(3),
    height: responsiveHeight(3),
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
		fontSize: 20,
		marginBottom: responsiveHeight(2),
		marginTop: responsiveHeight(3),
		marginLeft: responsiveWidth(4),
		borderTopWidth: 2,
	},
	borderline: {
		height: 2,
		backgroundColor: '#E5E5E5',
		marginTop: responsiveHeight(3)
	}

});

  module.exports = styles;
