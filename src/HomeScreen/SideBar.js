import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, Card, CardItem, Thumbnail, Icon, Button, View, Footer, Left, Right } from "native-base";

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
         <Card transparent>
          <CardItem button onPress={() => this.props.navigation.navigate("Home")}>
              <Thumbnail source={require('../../img/petyr.jpg')} />
          </CardItem>
          <CardItem>
              <Text style = {{color:"black"}}>Petyr Baelish{"\n"}<Text style = {{color : "grey"}}>@Little Finger</Text></Text>
          </CardItem>
          <CardItem>
              <Text style = {{color:"black"}}>1000 <Text style = {{color : "grey"}}>Following</Text> </Text>
              <Text style = {{color:"black"}}>  10 <Text style = {{color : "grey"}}>Followers</Text></Text>
          </CardItem>
          <View
            style={{
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
            }}
          />
         <CardItem>
         </CardItem>

         <CardItem button onPress={() => this.props.navigation.navigate("Sample")}>
              <Icon name="ios-person-outline" />
              <Text style = {{color:"black"}}>Profile</Text>
         </CardItem>
         <CardItem button onPress={() => this.props.navigation.navigate("Sample")}>
              <Icon name="ios-list-box-outline" />
              <Text style = {{color:"black"}}>Lists</Text>
         </CardItem>
        <CardItem button onPress={() => this.props.navigation.navigate("Sample")}>
              <Icon name="ios-flash-outline" />
              <Text style = {{color:"black"}}>Moments</Text>
         </CardItem>
        <CardItem button onPress={() => this.props.navigation.navigate("Sample")}>
              <Icon name="ios-browsers-outline" />
              <Text style = {{color:"black"}}>Highlights{"\n"}</Text>
        </CardItem>
        <View
           style={{
             borderBottomColor: 'lightgrey',
             borderBottomWidth: 1,
           }}
         />
         <CardItem>
         </CardItem>
         <CardItem>
              <Text style = {{color:"black"}}>Settings and privacy</Text>
        </CardItem>
        <CardItem>
              <Text style = {{color:"black"}}>Help Center{"\n"}</Text>
       </CardItem>
       <View
         style={{
           borderBottomColor: 'lightgrey',
           borderBottomWidth: 1,
         }}
       />
       <Footer style={{backgroundColor:'white'}}>
            <Left>
                <Icon style={{ color : 'deepskyblue', marginLeft: 10 }} name='ios-moon-outline'></Icon>
            </Left>
            <Right>
                <Icon style={{ color : 'deepskyblue' ,marginRight: 10 }} name='ios-apps-outline' ></Icon>
            </Right>
      </Footer>
     </Card>
    </Content>
   </Container>
  );
 }
}
