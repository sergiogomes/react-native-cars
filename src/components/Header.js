import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Cars</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 22,
  },
  viewStyle: {
    backgroundColor: 'lightblue',
    paddingTop: 30,
  },
};

export default Header;
