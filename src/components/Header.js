import React from 'react';
import {Text, View} from 'react-native';

const Header = ({title}) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
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
