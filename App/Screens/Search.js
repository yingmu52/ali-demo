import React from 'react';
import { View, FlatList } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { SkypeIndicator } from 'react-native-indicators'
import Cards from '../Components/Cards'

import axios from 'axios';
export default class Search extends React.Component {
  state = {
    text: null,
    movies: null,
    spiner: false
  }

  handleSearch = () => {
    this.setState({ spiner: true })
    const { text } = this.state
    console.log(text)
    axios({
      method: 'GET',
      url: ""
    })
      .then(({ data }) => this.setState({ movies: data.results, spiner: false }))
  }
  _renderItem = ({ item }) => {
    return (
      <Cards item={item} key={item.id} />
    )
  }
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={text => this.setState({ text })} />
            <Icon name="ios-people" />
          </Item>
          <Button transparent onPress={() => this.handleSearch()}>
            <Text>Search</Text>
          </Button>
        </Header>
        <View>
          {
            this.state.spiner ? 
            <SkypeIndicator /> :
            <FlatList
               data={this.state.movies}
               keyExtractor={this._keyExtractor}
               renderItem={this._renderItem}
             />
          }

        </View>
      </Container>

    );
  }
}
