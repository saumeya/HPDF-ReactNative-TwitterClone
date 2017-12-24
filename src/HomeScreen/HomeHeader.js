import React from "react";
import { StatusBar } from "react-native";
import { Image, View } from 'react-native';
import { Container, Header, Title, Fab, Left, Icon, Right, Thumbnail, Button, Body, Content, Text, Card, CardItem } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Header transparent style={{backgroundColor:'white', elevation: 0}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Thumbnail small source={require('../../img/petyr.jpg')} />
            </Button>
          </Left>
          <Body>
           <Title style={{color: 'black'}}>Home</Title>
          </Body>
         <Right />
        </Header>

      );
    }
  }
