import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon } from 'native-base'
import axios from 'axios'
import Cards from '../Components/Cards'

export default class TopRate extends React.Component {
  state  = {
    movies: null
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "",
    })
    .then(({data}) => {
      console.log(data.results);
      this.setState({ movies: data.results });
    });
  }

  _keyExtractor = item => item.id
  _renderItem = ({item}) => {
    return <Cards item = {item} key = {item.id}/>
  }
  render() {
    return (
      <FlatList
        data={this.state.movies}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
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
