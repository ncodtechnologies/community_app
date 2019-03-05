import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class AdDetails extends Component {
  render() {

    return (
      <Container>
        <Content>
          <Card style={{ borderTopColor: '#16a085', borderTopWidth: 4 }}>
            <CardItem>
              <Left>
                <Body style={{ marginLeft:15 }} >
                  <Text>Sofa set</Text>
                  <Text note>Dec 15, 2018</Text>
                </Body>
              </Left>
              <Right>
                <Body >
                  <Text style={{ fontWeight:'bold', padding:5, color: '#16a085' }} > DHS.2000 </Text>
                </Body>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../Images/Ads/ad1.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <View >
                  <Text style={{ fontWeight:"bold", fontSize: 18 }} >Description </Text>
                </View>
                <View style={{ marginTop: 15, marginLeft:10 }} >
                  <Text>- White Color </Text>
                  <Text>- Clean </Text>
                  <Text>- Used for 5 months only </Text>
                  <Text>- Comfortalbe </Text>
                </View>
                <View style={{ marginTop:20, justifyContent: 'flex-end', flexDirection: 'row', flex:1 }}>
                  <View style={{ alignItems:"flex-end" }}>
                  <Button style={{ backgroundColor:"#16a085" }}>
                    <Icon name='call' /> 
                    <Text> Call +971 1234567 </Text>
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