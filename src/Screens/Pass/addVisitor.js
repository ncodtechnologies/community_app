import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, Left, Right, Icon, Body, Title, Item, Input, Button, Text, H3 } from 'native-base';

export default class AddVisitor extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      visitor : {
        name : ""
      }
    };
  }

  goToAccess()
  {
    this.props.navigation.navigate("VisitorTime",
      {
        visitor: this.state.visitor
      }
    )
                
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
            <Title>New Visitor</Title>
          </Body>
          <Right>
        </Right>
      </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Have a Visitor? Please fill in the Visitor's name </H3>
            </View>
            <Item style={{ marginTop:15 }} >
              <Input placeholder="Visitor Name"
                     onChangeText={(text) => this.setState({ 
                      visitor : {
                        name : text
                      }
                  })}
                    />
            </Item>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={()=>this.goToAccess()}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
