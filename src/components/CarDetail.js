import React from 'react';
import {View, Text, Image, Linking} from 'react-native';

import Item from './Item';
import Button from './Button';
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
                    <Text style={headerText}>
                      {car.brand} - {model.name}
                    </Text>
                  </View>
                </ItemSection>
                <ItemSection>
                  <Image style={imageStyle} source={{uri: model.image}} />
                </ItemSection>
                <ItemSection>
                  <Button
                    buttonPress={buttonPress}
                    url={model.url}
                    title={'Click me'}
                  />
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

const buttonPress = (url) => {
  Linking.openURL(url);
};

const styles = {
  imageStyle: {
    height: 200,
    flex: 1,
    width: 0,
    borderRadius: 4,
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
