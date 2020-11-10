import React from 'react';
import {View} from 'react-native';

const ItemSection = ({children}) => {
  return <View style={styles.viewStyle}>{children}</View>;
};

const styles = {
  viewStyle: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
  },
};

export default ItemSection;
