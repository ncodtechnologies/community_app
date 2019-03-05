import React, { Component } from 'react';
import {Alert} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button, Title } from 'native-base';
import server_url from "../../info/server"

export default class ListIconExample extends Component {

  contractRenewal = () => {

    fetch(server_url + 'contract/contractRenewal?id_tenant=1', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.text())
    .then((responseJson) => {
      console.log(responseJson);
      Alert.alert("Thank You!","Contract renewal requested. It will be processed soon. Your Reference No. is: "+responseJson);
    //  this.props.navigation.navigate("Home");   

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
            <Title>Contract Details</Title>
          </Body>
          <Right />
      </Header>
        <Content>
          <ListItem icon  onPress={() => this.contractRenewal()} >
            <Left>
              <Icon name="refresh" />
            </Left>
            <Body>
              <Text>Contract Renewal</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="clipboard" />
            </Left>
            <Body>
              <Text>Contract Expiry</Text>
            </Body>
            <Right>
              <Text>01/06/2019</Text>
            </Right>
          </ListItem>
          <ListItem icon  onPress={() => this.props.navigation.navigate("ChequeReminder")} >
            <Left>
              <Icon name="alarm" />
            </Left>
            <Body>
              <Text>Cheque Reminder</Text>
            </Body>
            <Right>
              <Icon style={{ color: "#E67E22" }} name="warning" />
            </Right>
          </ListItem>
          <ListItem icon  onPress={() => this.props.navigation.navigate("FurnitureIn")} >
            <Left>
              <Icon name="arrow-dropleft-circle" />
            </Left>
            <Body>
              <Text>Furniture Move In</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem icon  onPress={() => this.props.navigation.navigate("FurnitureOut")} >
            <Left>
              <Icon name="arrow-dropright-circle" />
            </Left>
            <Body>
              <Text>Furniture Move Out</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem icon  onPress={() => this.props.navigation.navigate("FlatInspection")} >
            <Left>
              <Icon name="done-all" />
            </Left>
            <Body>
              <Text>Flat Inspection</Text>
            </Body>
            <Right />
          </ListItem>
        </Content>
      </Container>
    );
  }
}