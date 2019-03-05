import React, { Component } from 'react';
import {View, AsyncStorage, Alert} from 'react-native';
import { Container, Header, Content,  Item, Input, Button, Text, H3, DatePicker } from 'native-base';
import server_url from "../../info/server"

export default class OTP extends Component {

  constructor(props){
    super(props);
    this.state = {
      otp : "",
      phone_no : props.navigation.state.params.phone_no,
      token : ""
    }
  }

  goToMenu = () => {
    this._storeUserData();
    this.props.navigation.navigate("Menu");
  }
 
  _storeUserData = async () => {
    try {
      console.log("Storing user data");
      await AsyncStorage.setItem('token', this.state.token);
      console.log(this.state.token);
      this._retrieveData();
    } catch (error) {
      console.log(error);
    }
  }

  resendOTP = () => {
    Alert.alert("OTP","New OTP is requested");
  }

  getAuth = () => {
    console.log("Requesting..");
    fetch(server_url + 'tenant/checkOTP', {
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
        isLoading: false,
        token: responseJson
      }, function(){
        this.goToMenu();
      });

    })
    .catch((error) =>{
      console.error(error);
    });

  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1, backgroundColor:"#0574CA" }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3 style={{color:'white'}} >Please Enter the OTP you have received </H3>
            </View>
            <Item style={{ marginTop:15 }} >
              <Input  style={{color:'white'}}
              onChangeText={(text) => this.setState({ 
                otp : text
              })}
              />
            </Item>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button rounded light
                onPress={() => this.resendOTP()}
                 ><Text> Resend OTP </Text></Button><Button  rounded light
                onPress={() => this.getAuth()}
                 ><Text> Login </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
