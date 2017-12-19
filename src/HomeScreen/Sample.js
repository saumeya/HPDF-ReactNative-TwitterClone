import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Thumbnail } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
      <Header style={{backgroundColor:'white'}}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Thumbnail small source={require('../../img/petyr.jpg')} />
          </Button>
        </Left>
        <Body>
         <Title style={{color: 'black'}}>Sample</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>
            {"\n\t\t"}Future Scope
        </Text>
      </Content>
      </Container>
    );
  }
}
