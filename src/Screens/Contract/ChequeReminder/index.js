import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button, Title } from 'native-base';
export default class ChequeList extends Component {
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
            <Title>Cheque Reminders</Title>
          </Body>
          <Right />
      </Header>
        <Content>
          <ListItem icon>
            <Left>
              <Icon name="done-all" />
            </Left>
            <Body>
              <Text>5,000</Text>
            </Body>
            <Right>
              <Text>01/01/2019</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="alarm" />
            </Left>
            <Body>
              <Text>5,000</Text>
            </Body>
            <Right>
              <Text>01/06/2019</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="alarm" />
            </Left>
            <Body>
              <Text>5,000</Text>
            </Body>
            <Right>
              <Text>01/06/2020</Text>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="alarm" />
            </Left>
            <Body>
              <Text>5,000</Text>
            </Body>
            <Right>
              <Text>01/06/2020</Text>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
