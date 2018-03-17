import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = { styles.title }>
          Happy Search
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 88, 
    color: 'red'
  }
});
