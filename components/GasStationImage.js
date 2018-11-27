import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,Image } from 'react-native';


getGasImage = (gasStation)=>{

console.log(gasStation);
switch (gasStation){
case 'sonol':
return require('../assets/images/gasStationIcons/sonol.png');
case 'delek':
return require('../assets/images/gasStationIcons/delek.png');
case 'paz':
return require('../assets/images/gasStationIcons/paz.png');
}
};

export class GasStationImage extends Component {
render() {
  return (
    <Image
      style={{
        width: 42,
        height: 42,
        resizeMode: 'contain',
      }}
      source={getGasImage((this.props.station+'').toLowerCase())}/>
  );
}
}