import React, { Component } from 'react';
import { Alert,  TouchableOpacity, View, TimePickerAndroid, DatePickerAndroid } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Right, Icon, Body, Title, Input, H3, Item } from 'native-base';
import server_url from "../../../info/server"

export default class FurnitureIn extends Component {

  constructor(props){
    super(props);
    this.state ={
       _date : "SELECT DATE",
       _time : "SELECT TIME",
       date: null
      }
  }

  showPicker = async (stateKey, options) => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        this.setState({_date: 'Failed selection'});
      } else {
        // <<<< Newly selected date >>>>
        var date = new Date(year, month, day);
        this.setState({
            _date: year + "-" + month + "-" + day,
            date: date
          });
      }
      
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  reqService = () => {
      
    if(this.state._date == "SELECT DATE" || this.state._time == "SELECT TIME")
    {
      alert("Please select date and time");
      return;
    }
    
    fetch(server_url + 'contract/reqFurnitureMove', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          type: "Move In",
          date: this.state._date,
          time: this.state._time
        }),
    })
    .then((response) => response.text())
    .then((responseJson) => {
      console.log(responseJson);
      Alert.alert("Thank You","Your request is registered successfully. You will receive an approval shortly. Your reference No is: FI1204. Thank You!");
      this.props.navigation.navigate("ContractHome");   
   })
    .catch((error) =>{
      console.log(error);
    });

      //this.props.navigation.navigate("ContractHome");

  }

  showTimePicker = async (stateKey, options) => {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open(options);
      if (action === TimePickerAndroid.dismissedAction) {
        this.setState({_time: 'Failed selection'});
      } else {
        var date = new Date(hour, minute);
        var TimeType = 'AM'
        var _hour = hour
        if(hour <= 11)
          TimeType = 'AM';
        else
          TimeType = 'PM';
          
        if( hour > 12 )
        _hour = hour - 12;
        if( hour == 0 )
        _hour = 12;

        this.setState({
            _time: _hour + " : " + minute + " " + TimeType
          });
      }
      
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

 
  render () {
    return (
      <Container>
        <Header  style={{ backgroundColor: '#0574CA' }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
              
            <Body>
              <Title>Furniture Move In</Title>
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please provide a suitable date for furniture move in </H3>
            </View>
            <View style={{ marginTop:15 }} >
            <Item>          
              <Button transparent  onPress={this.showPicker.bind(this, 'spinner', { date: this.state.presetDate })} >
                <Text>{this.state._date}</Text>
              </Button>
            </Item>
            <Item>          
              <Button transparent  onPress={this.showTimePicker.bind(this, 'spinner', { date: this.state.presetDate, is24Hour: false })} >
                <Text>{this.state._time}</Text>
              </Button>
            </Item>
            </View>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
              onPress={() => this.reqService()} 
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
 
}