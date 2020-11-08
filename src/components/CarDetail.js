import React from 'react';
import {View, Text, Image} from 'react-native';

import Item from './Item';
import ItemSection from './ItemSection';

const CarDetail = ({cars}) => {
  const {imageStyle, headerContainer, headerText} = styles;

  const renderList = () => {
    return (
      <View>
        {cars.map((car) => (
          <View key={car.brand}>
            {car.model.map((model) => (
              <Item key={model.name}>
                <ItemSection>
                  <View style={headerContainer}>
                    <Text style={headerText}>{car.brand}</Text>
                    <Text style={headerText}>{model.name}</Text>
                  </View>
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
    flex: 1,
    width: 0,
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
};

export default CarDetail;
