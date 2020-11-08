import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';

import CarDetail from './CarDetail';

const CarList = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    Axios.get('https://givecars.herokuapp.com').then((resp) => {
      setCarList(resp.data);
    });
  }, []);

  return (
    <View>
      <Text>Car List</Text>
      <CarDetail cars={carList} />
    </View>
  );
};

export default CarList;
