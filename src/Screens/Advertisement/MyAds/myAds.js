import React, { Component } from 'react';
import { ListView,View, ActivityIndicator, Image } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Left, Right, Title, Body, Text } from 'native-base';
import server_url from "../../../info/server"

export default class MyAds extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      isLoading: true,
      listViewData: null
    }
  }

  componentDidMount(){
    console.log("Requestingg ... ");
    return fetch(server_url + 'advertisement/getMyAds?id_tenant=1')
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
           });
  }

  goToDt(id_adv) {
      this.props.navigation.navigate("MyAdDetails",{ id_adv:id_adv });
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const CHECK_ICON = require('../../../Images/Assets/check_icon.png');
    const PENDING_ICON = require('../../../Images/Assets/pending_icon.png');

    return (
      <Container> 
        <Header  style={{ backgroundColor: '#0574CA' }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
                <Title>My Ads</Title> 
            </Body>
            <Right>
              <Button transparent onPress={() => this.props.navigation.navigate("PostPicture")} >
                <Text>Post Ad</Text>
              </Button>
          </Right>
        </Header>
        <Content>
          <List
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              
            <ListItem avatar  onPress={() => this.goToDt(data.id_adv)}>
              <Body style={{ marginLeft: 15 }} >
                <Text>{data.title}</Text>
                <Text note>{data.timestamp.split(" ")[0]}</Text>
              </Body>
              <Right>
                <View style={{width: 20, height: 20}} >
                  <Image source={data.status == "0" ? PENDING_ICON : CHECK_ICON} style={{height: 20, width: null}}/>
                </View>
              </Right>
            </ListItem>

            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
        </Content>
          
      </Container>
    );
  }
}