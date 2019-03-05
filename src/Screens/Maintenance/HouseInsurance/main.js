import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, Left, Right, Body, Title, Button, Text, H3, ListItem, CheckBox, Icon } from 'native-base';
import server_url from "../../../info/server"

export default class Main extends Component {

  constructor(props) {
    super(props);
  }
  

  reqService = () => {
    
    
    fetch(server_url + 'sr/requestGeneral?type=HouseInsurance', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.text())
    .then((responseJson) => {
      console.log(responseJson);
      Alert.alert("Thank You","Your request is registered successfully. Your Reference Id is " + responseJson);    
      this.props.navigation.navigate("Home");
   
     })
    .catch((error) =>{
      console.error(error);
    });

}
 
  render() {
    return (
      <Container>
        <Header  style={{ backgroundColor: '#0574CA' }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Tutoring</Title>
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>We provide a comprehensive home insurance policy that provides coverage against damages or losses that might incur due to unforeseen natural causes.
                </H3>
            </View>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={() => this.reqService()}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
