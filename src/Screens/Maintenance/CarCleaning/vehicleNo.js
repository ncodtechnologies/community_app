import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, H3, Left, Right, Icon, Body, Title } from 'native-base';
import server_url from "../../../info/server"

export default class VehicleNo extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      sr :  props.navigation.state.params.sr
    }
  }

  componentDidMount(){
    console.log(this.state.sr);
  }

  reqService = () => {
    
    console.log(JSON.stringify(this.state.sr));
    fetch(server_url + 'sr/requestCarCleaning', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.sr),
    })
    .then((response) => response.text())
    .then((responseJson) => {
        console.log(responseJson);
        Alert.alert("Thank you", "Thank you for your request. We will contact you soon.");
        this.props.navigation.navigate("Home")
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
                <Title>Car Cleaning</Title> 
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please enter your Vehicle number </H3>
            </View>
            <Item style={{ marginTop:15 }} >
              <Input placeholder="Vehicle No." 
              onChangeText={(text) => this.setState({ 
                sr : {
                  days : this.state.sr.days,
                  vehicle_no : text
                }
              })}
                    />
            </Item>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={()=>this.reqService()}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
