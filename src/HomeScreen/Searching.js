import React, { Component } from 'react';
import { Image, View } from 'react-native';

import { Container, Header, Content,Item, Input, Icon, Button, Text, Left, Thumbnail, Body, Right,Card,CardItem,Fab } from 'native-base';

export default class Searching extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'white'}} searchBar rounded>
        <Left style={{flex:0.15}}>
          <Button transparent
            onPress={() => this.props.navigation.navigate("Home")}>
            <Icon style={{ color : 'deepskyblue'  }} name='arrow-back' ></Icon>
          </Button>
        </Left>
        <Body style={{flex:0.75}}>
          <Item style={{height:40 , marginLeft:0}}>
          <Input placeholder="Search Twitter" />

          </Item>
        </Body>
    </Header>
  </Container>
);
}
}
