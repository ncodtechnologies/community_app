import React, { Component } from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Text, H3, H2, DatePicker } from 'native-base';
import server_url from "../../info/server"

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      phone_no : ""
    }
  }

  componentDidMount(){
 //   this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        console.log(value);
        this.props.navigation.navigate("MainMenu");
      }
      else
      {

      }
    } catch (error) {
      
        this.props.navigation.navigate("MainMenu");
    }
  };

  goToOTP = () => {
   this.props.navigation.navigate("OTP",{
             phone_no: this.state.phone_no
           })
  }
  
  goToRegister = () => {
    this.props.navigation.navigate("Register");
   }

  getAuth = () => {
    this.goToOTP();
    return;
    console.log("Logging in...");
    fetch(server_url + 'tenant/sendOTP', {
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
        console.log(responseJson);
 /*       responseJson.authentication;
        if(responseJson.authentication == 1)
          this.goToOTP();
        else if(responseJson.authentication == -1)
          Alert.alert("Verification Pending","Your details are not verified yet. You will receive an SMS after verification. Thank you");
        else if(responseJson.authentication == 0)
          Alert.alert("Not Registered", "Please register your details");
      */    });

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1, backgroundColor:"#0574CA" }}>
          <View style={{ padding: 25, alignItems: 'center' }} > 
            <View>
              <H2 style={{color:'white', fontWeight: 'bold'}}>Community App</H2>
            </View>
            <Item style={{ marginTop:15 }} >
              <Input placeholder="" style={{color:'white'}}
              onChangeText={(text) => this.setState({ 
                phone_no : text
              })}
              />
            </Item>
            <View style={{ height:120 }}>
            <View style={{ justifyContent:"center", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button rounded light
                onPress={() => this.getAuth()}
                 ><Text> Log in </Text></Button>
            </View>
            <View style={{ justifyContent:"center", flexDirection: "row", flex:1,marginTop:8 }} >
              <TouchableOpacity onPress={()=> this.goToRegister()} >
                <Text style={{color:'white'}} >Not Registered yet? Register</Text>
              </TouchableOpacity> 
            </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
