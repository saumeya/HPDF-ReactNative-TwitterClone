import React, { Component } from 'react';
import { Image, View } from 'react-native';

import { Container, Header, Content,Item, Input, Icon, Button, Text, Left, Thumbnail, Body, Right,Card,CardItem,Fab } from 'native-base';

export default class SearchBarExample extends Component {
  render() {
    return (

        <Header style={{backgroundColor:'white', elevation: 0}} searchBar rounded>
        <Left style={{flex:0.15}}>
          <Button transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Thumbnail small source={require('../../img/petyr.jpg')} />
          </Button>
        </Left>
        <Body style={{flex:0.75}}>
          <Item style={{height:40, backgroundColor: 'lightgrey',marginLeft:0}} rounded>
          <Input placeholder="Search Twitter"  onFocus={ () => this.props.navigation.navigate("Searching")}/>

          </Item>
        </Body>
        <Right style={{flex:0.15}}>
          <Button transparent>
            <Icon style={{ color : 'deepskyblue'  }} name='person-add' ></Icon>
          </Button>
        </Right>
      </Header>
    );
  }
}
