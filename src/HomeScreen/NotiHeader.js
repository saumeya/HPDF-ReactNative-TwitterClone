import React from "react";
import { StatusBar } from "react-native";
import { Image, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right,Thumbnail, Button, Body, Content,Text, Card, CardItem,Fab,Footer,FooterTab } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
    return (
        <Header style={{backgroundColor:'white' , elevation:0}}>
         <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Thumbnail small source={require('../../img/petyr.jpg')} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black'}}>Notifications</Title>
          </Body>
          <Right />
      </Header>
    );
  }
}
