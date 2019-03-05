import React, { Component } from 'react';
import {  TouchableOpacity, View, TimePickerAndroid, DatePickerAndroid } from 'react-native';
import { Container, Header, Content, Button, Text, Left, Right, Icon, Body, Title, Input, H3, Item } from 'native-base';

export default class VisitorTIme extends Component {

  constructor(props){
    super(props);
    this.state ={
       _date : "VISITING DATE",
       _time : "VISITING TIME",
       date: null,
       visitor : {
         name : props.navigation.state.params.visitor.name,
         date : "",
         time_from : ""
       }
      }
  }

  gotoAccess(){
      this.props.navigation.navigate("visitorAccess", {
        visitor: {
        name : this.state.visitor.name,
        date : this.state._date,
        time_from : this.state._time,
      } 
    })
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
                <Title>New Visitor</Title>
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please provide the date and time for access </H3>
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
              onPress={() => this.gotoAccess()} 
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
 
}