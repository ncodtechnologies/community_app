import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, H3 } from 'native-base';

export default class SelTime extends Component {
  
  constructor(props) {
    super(props);

  }

  goToHome()
  {
    Alert.alert("Thank you", "Thank you for your request. We will contact you soon.");
    this.props.navigation.navigate("Home")
                
  }


  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please enter suitable time for cleaning </H3>
            </View>
            <Item style={{ marginTop:15 }} >
              <Input placeholder="Time" 
                    />
            </Item>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={()=>this.goToHome()}
                style={{backgroundColor:"#16a085" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
