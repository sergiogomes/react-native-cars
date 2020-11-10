import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({title, buttonPress, url}) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity onPress={() => buttonPress(url)} style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 6,
    paddingBottom: 6,
    color: 'black',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 4,
    marginLeft: 7,
    marginRight: 7,
  },
};

export default Button;
