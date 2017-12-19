import React from "react";
import { StatusBar } from "react-native";
import { Image, View } from 'react-native';
import { Container, Header, Title, Fab, Left, Icon, Right, Thumbnail, Button, Body, Content, Text, Card, CardItem } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
     const { navigate } = this.props.navigation;
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
           <Title style={{color: 'black'}}>Home</Title>
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
                  <Thumbnail source={require('../../img/tyrion.jpg')} />
                </View>
                <View style={{flex : 0.80}}>
                  <Text style = {{fontWeight : 'bold'}}>Tyrion Lannister <Text style = {{fontWeight : 'normal', color : 'grey'}}>@tyrion  2m</Text></Text>
                  <Text>I try to know as many people as I can, You never know which one you’ll need.{"\n"}</Text>

                  <Image source={require('../../img/tyriontweet.jpg')} style={{ width: null, flex: 1}}/>
                    <View style={{flexDirection: 'row'}}>
                      <View style = {{flex : 0.25}}>
                        <Button iconLeft transparent>
                          <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-text-outline" />
                          <Text style={{ color : 'grey' ,marginRight: 5 }}>5</Text>
                        </Button>
                     </View>
                     <View style = {{flex : 0.25}}>
                        <Button iconLeft transparent>
                          <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-git-compare-outline" />
                          <Text style={{ color : 'grey' ,marginRight: 5 }}>4</Text>
                        </Button>
                     </View>
                     <View style = {{flex : 0.25}}>
                        <Button iconLeft transparent>
                          <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-heart-outline" />
                          <Text style={{ color : 'grey' ,marginRight: 5 }}>8</Text>
                        </Button>
                     </View>
                     <View style = {{flex : 0.25}}>
                      <Button iconLeft transparent>
                        <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-mail-outline" />
                      </Button>
                    </View>
                 </View>
              </View>
            </View>
          </CardItem>
        </Card>
        <Card transparent>
          <CardItem>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex : 0.20}}>
                <Thumbnail source={require('../../img/cersei.jpg')} />
              </View>
              <View style={{flex : 0.80}}>
                <Text style = {{fontWeight : 'bold'}}>Cersei Lannister <Text style = {{fontWeight : 'normal', color : 'grey'}}>@Queen 18m</Text></Text>
                <Text>When you play the game of thrones you win or you die. There is no middle ground.{"\n"}</Text>

                <Image source={require('../../img/cerseitweet.jpg')} style={{ width: null, flex: 1}}/>
                  <View style={{flexDirection: 'row'}}>
                    <View style = {{flex : 0.25}}>
                      <Button iconLeft transparent>
                        <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-text-outline" />
                        <Text style={{ color : 'grey' ,marginRight: 5 }}>5</Text>
                      </Button>
                   </View>
                   <View style = {{flex : 0.25}}>
                      <Button iconLeft transparent>
                        <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-git-compare-outline" />
                        <Text style={{ color : 'grey' ,marginRight: 5 }}>4</Text>
                      </Button>
                   </View>
                   <View style = {{flex : 0.25}}>
                      <Button iconLeft transparent>
                        <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-heart-outline" />
                        <Text style={{ color : 'grey' ,marginRight: 5 }}>8</Text>
                      </Button>
                   </View>
                   <View style = {{flex : 0.25}}>
                    <Button iconLeft transparent>
                      <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-mail-outline" />
                    </Button>
                  </View>
               </View>
            </View>
          </View>
        </CardItem>
      </Card>
      <Card transparent>
        <CardItem>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex : 0.20}}>
              <Thumbnail source={require('../../img/samwell.jpg')} />
            </View>
            <View style={{flex : 0.80}}>
              <Text style = {{fontWeight : 'bold'}}>Samwell Tarly <Text style = {{fontWeight : 'normal', color : 'grey'}}>@sam  3h</Text></Text>
              <Text>Dragonglass is here!!!!{"\n"}</Text>

              <Image source={require('../../img/samtweet.jpg')} style={{ width: null, flex: 1}}/>
                <View style={{flexDirection: 'row'}}>
                  <View style = {{flex : 0.25}}>
                    <Button iconLeft transparent>
                      <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-text-outline" />
                      <Text style={{ color : 'grey' ,marginRight: 5 }}>5</Text>
                    </Button>
                 </View>
                 <View style = {{flex : 0.25}}>
                    <Button iconLeft transparent>
                      <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-git-compare-outline" />
                      <Text style={{ color : 'grey' ,marginRight: 5 }}>4</Text>
                    </Button>
                 </View>
                 <View style = {{flex : 0.25}}>
                    <Button iconLeft transparent>
                      <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-heart-outline" />
                      <Text style={{ color : 'grey' ,marginRight: 5 }}>8</Text>
                    </Button>
                 </View>
                 <View style = {{flex : 0.25}}>
                  <Button iconLeft transparent>
                    <Icon style={{ color : 'grey' ,marginLeft: 2 }} name="ios-mail-outline" />
                  </Button>
                </View>
             </View>
          </View>
        </View>
      </CardItem>
    </Card>
      </Content>
    </Container>
    );
  }
}
