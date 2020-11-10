import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
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
    <ScrollView>
      <CarDetail cars={carList} />
    </ScrollView>
  );
};

export default CarList;
