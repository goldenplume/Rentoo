import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export default class Rect extends React.PureComponent {
  render() {
    const { color, style } = this.props;
    console.log("Color:=>", color);
    console.log("Style:=>", style);
    
    return (
      <View style={[style, {backgroundColor: {color}}]}>
        
      </View>
    );
  }
}

Rect.propTypes = {
  color: PropTypes.any.isRequired,
  style: PropTypes.any,
};

Rect.defaultProps = {
  color: "#FFFFFF",
  style: {
    width: responsiveHeight(2),
    height: responsiveHeight(2),
  },
};