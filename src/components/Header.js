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
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
};

export default Header;
