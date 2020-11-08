import React from 'react';
import {View} from 'react-native';

const Item = ({children}) => {
  return <View style={styles.viewStyle}>{children}</View>;
};

const styles = {
  viewStyle: {
    borderWidth: 1,
    borderColor: 'lightblue',
    shadowColor: 'black',
    shadowOffSet: {width: 1, height: 1},
    opacity: 0.1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export default Item;
