import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content,Item, Input, Icon, Button, Text, Left, Thumbnail, Body, Right,Card,CardItem,Fab } from 'native-base';

export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'white'}} searchBar rounded>
        <Left style={{flex:0.15}}>
          <Button transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Thumbnail small source={require('../../img/petyr.jpg')} />
          </Button>
        </Left>
        <Body style={{flex:0.75}}>
          <Item style={{height:40, backgroundColor: 'lightgrey',marginLeft:0}} rounded>
          <Input placeholder="Search Twitter"/>
          </Item>
        </Body>
        <Right style={{flex:0.15}}>
          <Button transparent>
            <Icon style={{ color : 'deepskyblue'  }} name='person-add' ></Icon>
          </Button>
        </Right>
      </Header>
      <Fab
          style={{ backgroundColor: 'deepskyblue' }}
          position="bottomRight" >
          <Icon name="create" />
      </Fab>
      <Content>
        <Card transparent>
        <CardItem>
              <Text style = {{color:"black", fontWeight: 'bold'}}>Westeros Trends{"\n"}</Text>
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
              <Text style={{fontSize:25}}>1</Text>
              </View>
              <View style={{flex : 0.80}}>
                <Text style = {{fontSize : 18}}>Dragon Queen</Text>
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
               <Text style={{fontSize:25}}>2</Text>
               </View>
               <View style={{flex : 0.80}}>
                 <Text style = {{fontSize : 18}}>#whitewalkers</Text>
                  <Text style = {{fontSize : 15, color: 'grey'}}>1860 Tweets</Text>
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
                <Text style={{fontSize:25}}>3</Text>
                </View>
                <View style={{flex : 0.80}}>
                  <Text style = {{fontSize : 18}}>#aryastark</Text>
                    <Text style = {{fontSize : 15, color: 'grey'}}>1560 Tweets</Text>
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
                 <Text style={{fontSize:25}}>4</Text>
                 </View>
                 <View style={{flex : 0.80}}>
                   <Text style = {{fontSize : 18}}>#dragonsss</Text>
                     <Text style = {{fontSize : 15, color: 'grey'}}>1855 Tweets</Text>
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
                <Text style = {{fontSize : 18, color : 'deepskyblue'}}>Show more</Text>
            </CardItem>
         </Card>
       </Content>
     </Container>
   );
  }
}
