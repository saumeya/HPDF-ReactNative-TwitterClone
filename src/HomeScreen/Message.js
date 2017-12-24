import React from "react";
import { StatusBar } from "react-native";
import { Image, View } from 'react-native';

import { Container, Header, Title, Left, Icon, Right,Thumbnail, Button, Body, Content,Text, Card, CardItem,Fab } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Fab
            style={{ backgroundColor: 'deepskyblue' }}
            position="bottomRight" >
            <Icon name="mail-open" />
        </Fab>
        <Content >
        <Card transparent>
         <CardItem>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex : 0.20}}>
                  <Thumbnail source={require('../../img/sansa.jpg')} />
              </View>
              <View style={{flex : 0.80}}>
                <Text >Sansa Stark <Text style = {{fontWeight : 'normal', color : 'grey'}}>@sansa  12h</Text></Text>
                  <Text>I am Sansa Stark of Winterfell. This is my Home. And you cannot frighten me.{"\n"}</Text>
            </View>
          </View>
        </CardItem>
        <View
          style={{
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
          }}
        />
        </Card>
       </Content>
      </Container>
    );
  }
}
