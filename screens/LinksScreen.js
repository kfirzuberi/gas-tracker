import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,Image, TextInput, ScrollView, Button } from 'react-native';

import { ExpoLinksView } from '@expo/samples';
import NewRecordForm from '../components/NewRecordForm';

export default class LinksScreen extends React.Component {


  static navigationOptions = {
    title: 'Links',
  };


  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />



<NewRecordForm />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
