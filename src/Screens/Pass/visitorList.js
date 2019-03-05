import React, { Component } from 'react';
import { ListView, ActivityIndicator, View, Image } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Left, Body, Right, Thumbnail, Title } from 'native-base';
import server_url from "../../info/server"

export default class VisitorList extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: null,
      isLoading: true
    };
  }

  goToPass(visitor) {
    if(visitor.approval == "1")
      this.props.navigation.navigate("VisitorPass",{ visitor: visitor });
  }

  componentDidMount(){
    return fetch(server_url + 'visitors/getVisitorsOfTenant?id_tenant=1')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          listViewData: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
        this.setState({
          isLoading: false
        });
      });
      }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const CHECK_ICON = require('../../Images/Assets/check_icon.png');
    const PENDING_ICON = require('../../Images/Assets/pending_icon.png');

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container> 
        <Content>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Guests</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate("AddVisitor")} >
            <Icon name='add' />
          </Button>
        </Right>
      </Header>
      {this.state.isLoading ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (
          <ListView
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              
            <ListItem avatar  onPress={()=>this.goToPass(data)} >
              <Body style={{ marginLeft: 15 }} >
                <Text>{data.name}</Text>
                <Text note>Valid on {data.date}</Text>
              </Body>
              <Right>
                <View style={{width: 20, height: 20}} >
                  <Image source={data.approval == "0" ? PENDING_ICON : CHECK_ICON} style={{height: 20, width: null}}/>
                </View>
              </Right>
            </ListItem>

            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
     )}
        </Content>
        
          
      </Container>
    );
  }
}