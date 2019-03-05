import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Left, Right, Body, Title, Button, Text, H3, Textarea, Icon } from 'native-base';

export default class reqDescription extends Component {

  constructor(props){
    super(props);
    this.state = {
      maintenance_request : {
       type : props.navigation.state.params.service_type,
       description : ""
      }
    }
  }

  goToReqDate = () => {
    console.log(this.state.maintenance_request);
    this.props.navigation.navigate("ReqDate",{
          maintenance_request : this.state.maintenance_request
        })
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
              <Title>Maintenance</Title>
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please give a breif description about the service needed </H3>
            </View>
            <View style={{ marginTop:15 }} >
              <Textarea rowSpan={5} bordered placeholder="Description" 
                  onChangeText={(text) => this.setState({ 
                    maintenance_request : {
                      type: this.state.maintenance_request.type,
                      description: text
                    }
                })}
              />
            </View>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={() => this.goToReqDate()}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
