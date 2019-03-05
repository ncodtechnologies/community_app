import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, CheckBox, ListItem, Button, Text, H3, Left, Right, Icon, Body, Title } from 'native-base';
import server_url from "../../info/server"

export default class VisitorAccess extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      valleyChecked : false,
      gateChecked : false,
      isLoading: false,
      visitor : {
        name : props.navigation.state.params.visitor.name,
        date : props.navigation.state.params.visitor.date,
        time_from : props.navigation.state.params.visitor.time_from,
        gate_access : 0,
        valley_access : 0
      }
    };
  }

  onCheckBoxPress(isValley) {
    if(isValley)
    {
      let _valleyChecked = this.state.valleyChecked;
      let _gateChecked = this.state.gateChecked;
      this.setState({
        visitor : {
          name : this.state.visitor.name,
          date : this.state.visitor.date,
          time_from : this.state.visitor.time_from,
          gate_access : this.state.visitor.gate_access,
          valley_access : !_valleyChecked
        },
        valleyChecked: !_valleyChecked
      });
    }
    else
    {
      let _gateChecked = this.state.gateChecked;
      this.setState({
        visitor : {
          name : this.state.visitor.name,
          date : this.state.visitor.date,
          time_from : this.state.visitor.time_from,
          gate_access : !_gateChecked,
          valley_access : this.state.visitor.valley_access
        },
        gateChecked: !_gateChecked
      });
    }
  }

  submitVisitor()
  {
    fetch(server_url + 'visitors/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          name : this.state.visitor.name,
          date : this.state.visitor.date,
          time_from : this.state.visitor.time_from,
          gate_access :  this.state.visitor.gate_access ? 1 : 0,
          valley_access : this.state.visitor.valley_access ? 1 : 0
        }
      ),
    })
    .then((response) => response.text())
    .then((responseJson) => {
      console.log(JSON.stringify(responseJson));
      Alert.alert("Thank You","Your request will be verified and approved soon. Thank You!");    
      this.props.navigation.navigate("VisitorList");
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    
    const { navigation } = this.props;
    const visitor = navigation.getParam('visitor');

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
              <H3>Where would you like to give access to the visitor? </H3>
            </View>
            <ListItem>
              <CheckBox checked={this.state.gateChecked} color="green" 
              onPress={()=>this.onCheckBoxPress(false)}
              />
              <Body>
                <Text>Gate</Text>
              </Body>
            </ListItem>
            <ListItem>
              <CheckBox checked={this.state.valleyChecked} color="green"
              onPress={()=>this.onCheckBoxPress(true)}
              />
              <Body>
                <Text>Valley</Text>
              </Body>
            </ListItem>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={()=>this.submitVisitor()}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}