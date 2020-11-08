import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Axios from 'axios';

const CarList = () => {
  const [carList, setCarList] = useState([]);

  const {imageStyle} = styles;

  useEffect(() => {
    Axios.get('https://givecars.herokuapp.com').then((resp) => {
      setCarList(resp.data);
    });
  }, []);

  return (
    <View>
      <Text>Car List</Text>
      <View>
        {carList.map((car) => (
          <View>
            {car.model.map((model) => (
              <View>
                <Text>
                  {car.brand} {model.name}
                </Text>
                <Text>{model.url}</Text>
                <Image style={imageStyle} source={{uri: model.image}} />
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = {
  imageStyle: {
    height: 200,
    width: 500,
  },
};

export default CarList;
