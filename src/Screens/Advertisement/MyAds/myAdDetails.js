import React, { Component } from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class MyAdDetails extends Component {
  

  constructor(props){
    super(props);
    this.state ={
       isLoading: false,
       id_adv : 1,
       ad : {
         description: "New Sofa",
         title: "Sofa set",
         date: "10/2/2019",
         price: "250"
       }
      }
  }

  componentDidMount(){
    return;
    return fetch('http://10.0.2.2/sulafa/controller/Adv/getAdvDt.php?id_adv='+this.state.id_adv)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.ad);
        this.setState({
          isLoading: false,
          ad : responseJson.ad
        }, function(){
          
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <Container>
        <Content>
          <Card style={{ borderTopColor: '#16a085', borderTopWidth: 4 }}>
            <CardItem>
              <Left>
                <Body style={{ marginLeft:15 }} >
                  <Text>{this.state.ad.title}</Text>
                  <Text note>{this.state.ad.date}</Text>
                </Body>
              </Left>
              <Right>
                <Body >
                  <Text style={{ fontWeight:'bold', padding:5, color: '#16a085' }} > DHS.{this.state.ad.price} </Text>
                </Body>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../../Images/Ads/ad1.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <View >
                  <Text style={{ fontWeight:"bold", fontSize: 18 }} >Description </Text>
                </View>
                <View style={{ marginTop: 15, marginLeft:10 }} >
                  <Text>{this.state.ad.description}</Text>
                </View>
                <View style={{ marginTop:20, justifyContent: 'flex-end', flexDirection: 'row', flex:1 }}>
                  <View style={{ alignItems:"flex-end", flexDirection:"row", flex:1  }}>
                  <Button style={{ backgroundColor:"#16a085" }}
                  onPress={() => this.props.navigation.navigate("PostPicture", {ad: this.state.ad})}
                  >
                    <Icon name='create' /> 
                  </Button>
                  <Button style={{ backgroundColor:"#16a085", marginLeft: 5 }}>
                    <Icon name='trash' /> 
                  </Button>
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}