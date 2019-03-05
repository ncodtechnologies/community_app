import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, Label, Item, Input, Button, Text, H3, DatePicker } from 'native-base';
import server_url from "../../info/server"

export default class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : "",
      phone_no : "",
      emirates_id : "",
      unit : ""
    }
  }
  
  RegisterUser = () => {
    console.log("Requesting..");
    fetch(server_url + 'tenant/regTenant', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then((response) => response.text())
    .then((responseJson) => {
      
    console.log(responseJson);
      this.setState({
        isLoading: false
      }, function(){
        console.log(JSON.stringify(responseJson));
        Alert.alert("Thank you!", "Thank you for providing your details. An SMS will be sent after your details are verified by the admin.")
        this.props.navigation.navigate("Login");
      });

    })
    .catch((error) =>{
      console.log(error);
      Alert.alert("Try Again!", "Registration Failed. Please try again later!")
    });

  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1,backgroundColor:"#0574CA" }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3 style={{color:'white'}} >Please provide your Details </H3>
            </View>
            <Item style={{ marginTop:15 }} stackedLabel >
              <Label style={{color:'white'}} >Name</Label>
              <Input  style={{color:'white'}}
              onChangeText={(text) => this.setState({ 
                name : text
              })}
              />
            </Item>
            <Item style={{ marginTop:15 }} stackedLabel >
              <Label style={{color:'white'}} >Phone No</Label>
              <Input  style={{color:'white'}}
              onChangeText={(text) => this.setState({ 
                phone_no : text
              })}
              />
            </Item>
            <Item style={{ marginTop:15 }} stackedLabel >
              <Label style={{color:'white'}} >Emirates ID</Label>
              <Input  style={{color:'white'}}
              onChangeText={(text) => this.setState({ 
                emirates_id : text
              })}
              />
            </Item>
            <Item style={{ marginTop:15 }} stackedLabel >
              <Label style={{color:'white'}} >Flat No</Label>
              <Input  style={{color:'white'}}
              onChangeText={(text) => this.setState({ 
                unit : text
              })}
              />
            </Item>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button rounded light
                onPress={() => this.RegisterUser()}
                 ><Text> Register </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
