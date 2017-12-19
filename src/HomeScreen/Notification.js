import React from "react";
import { StatusBar } from "react-native";
import { Image, View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right,Thumbnail, Button, Body, Content,Text, Card, CardItem,Fab,Footer,FooterTab } from "native-base";
export default class HomeScreen extends React.Component {
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
            <Title style={{color: 'black'}}>Notifications</Title>
          </Body>
          <Right />
      </Header>
      <Fab
          style={{ backgroundColor: 'deepskyblue' }}
          position="bottomRight" >
          <Icon name="create" />
      </Fab>
      <Content>
        <Card transparent>
          <CardItem>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex : 0.20}}>
                  <Thumbnail small source={require('../../img/tyrion.jpg')} />
              </View>
              <View style={{flex : 0.80}}>
              <Text >Tyrion Lannister Tweeted</Text>
              </View>
          </View>
        </CardItem>
        <View
          style={{
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
          }}
        />
        <CardItem>
            <View style={{flexDirection: 'row'}}>
               <View style={{flex : 0.20}}>
               <Thumbnail small source={require('../../img/cersei.jpg')} />
               </View>
               <View style={{flex : 0.80}}>
                 <Text >Cersei Lannister Tweeted</Text>
               </View>
           </View>
         </CardItem>
         <View
           style={{
             borderBottomColor: 'lightgrey',
             borderBottomWidth: 1,
           }}
         />
          <CardItem>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex : 0.20}}>
                <Thumbnail small source={require('../../img/samwell.jpg')} />
              </View>
              <View style={{flex : 0.80}}>
                  <Text >Samwell Tarly Tweeted</Text>
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
      <Footer style={{backgroundColor:'white'}} >
      <Left>

            <Text style={{fontWeight :'bold', color:"grey"}}>  All   Mentions</Text>
    </Left>

      </Footer>
    </Container>
   );
  }
}
