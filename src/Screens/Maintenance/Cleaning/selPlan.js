import React, { Component } from 'react';
import { Container, View, Content, ListItem, Text, Radio, Right, Left, Button, H3, Header, Body, Icon, Title } from 'native-base';

export default class selPlanCleaning extends Component {

  constructor(props){
    super(props);
    this.state = {
      plan_id : "3",
      plans : [{
        id_plan: 1,
        text: "2 days a week"
      },{
        id_plan: 2,
        text: "5 days a week"
      },{
        id_plan: 3,
        text: "7 days a week"
      }]
    }
  }

  checkPlanSel(id_plan){
    return id_plan==this.state.plan_id;
  }

  selPlan(id_plan){
    this.setState({plan_id: id_plan})
  }

  goToVehicleNo(){
    this.props.navigation.navigate("selTimeCleaning")
  }

  renderList() {
    return this.state.plans.map((plan) => {
        return (
          <ListItem onPress={() => this.selPlan(plan.id_plan)} >
            <Left>
              <Text>{plan.text}</Text>
            </Left>
            <Right>
              <Radio selected={this.checkPlanSel(plan.id_plan)} />
            </Right>
        </ListItem>
        );
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
                <Title>Cleaning</Title> 
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please select your desired plan </H3>
            </View>
            <View>
            {
              this.renderList()
            }
            </View>
          <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
            <Button
              onPress={() => this.goToVehicleNo()}
              style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
          </View>
          </View>
        </Content>
      </Container>
    );
  }

}