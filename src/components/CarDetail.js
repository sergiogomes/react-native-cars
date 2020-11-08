import React from 'react';
import {View, Text, Image} from 'react-native';

import Item from './Item';
import ItemSection from './ItemSection';

const CarDetail = ({cars}) => {
  const {imageStyle} = styles;

  const renderList = () => {
    return (
      <View>
        {cars.map((car) => (
          <View key={car.brand}>
            {car.model.map((model) => (
              <Item key={model.name}>
                <ItemSection>
                  <Text>
                    {car.brand} {model.name}
                  </Text>
                </ItemSection>
                <ItemSection>
                  <Text>{model.url}</Text>
                </ItemSection>
                <ItemSection>
                  <Image style={imageStyle} source={{uri: model.image}} />
                </ItemSection>
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
