import React from 'react';
import {View, Text, Image} from 'react-native';

import Item from './Item';

const CarDetail = ({cars}) => {
  const {imageStyle} = styles;

  const renderList = () => {
    return (
      <View>
        {cars.map((car) => (
          <View key={car.brand}>
            {car.model.map((model) => (
              <Item key={model.name}>
                <Text>
                  {car.brand} {model.name}
                </Text>
                <Text>{model.url}</Text>
                <Image style={imageStyle} source={{uri: model.image}} />
              </Item>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return renderList();
};

const styles = {
  imageStyle: {
    height: 200,
    width: 500,
  },
};

export default CarDetail;
