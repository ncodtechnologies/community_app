import React, { Component } from 'react';
import {View, ActivityIndicator,CameraRoll,Alert,PermissionsAndroid } from 'react-native';
import { Container, Header, Content, Left, Right, Title, Text, Body, H2, H3, Button, Icon } from 'native-base';
import QRCode from 'react-native-qrcode';
import server_url from "../../info/server"
//import { captureScreen } from "react-native-view-shot";
//import Share from 'react-native-share';

export default class Pass extends Component {

  constructor(props){
    super(props);
    this.state ={
       isLoading: false,
       visitor : props.navigation.state.params.visitor,
      }
  }



  snapIt(){
    Alert.alert("Demo App", "This option is disabled for demo");
  /*    captureScreen({
        format: "jpg",
        quality: 0.8
      })
      .then(
        uri => {
          console.log("Image saved to", uri)

          let shareImageBase64 = {
            title: "React Native",
            message: "Hola mundo",
            url: uri,
            subject: "Share Link" //  for email
          };
          
          CameraRoll.saveToCameraRoll(uri)
          .then(Alert.alert('Success', 'Photo added to camera roll!'))
          .catch(err => console.log('err:', err))
          
     //     Share.open(shareImageBase64);
        },
        error => console.error("Oops, snapshot failed", error)
      );
   */   
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
            <Title>Visitor Pass</Title>
          </Body>
          <Right>
            <Button style={{ justifyContent: 'center', alignItems: 'center' }} onPress={()=> this.snapIt()} >
              <Icon style={{ fontSize: 23, color: 'white' }} name='share' />
              <Text style={{ fontSize: 11, color: 'white' }} >Share</Text>
            </Button>
        </Right>
      </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop:20 }}>
              <View style={{ alignItems:"center", width: 300 }}>
                  <H2 style={{ alignItems:"center",textAlign: 'center' }}>Scan the below QR code to gain access</H2>
              </View>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row', marginTop:10}}>
            {!this.state.isLoading ? (
              <View style={{ alignItems:"center", elevation: 8, padding: 7, backgroundColor: 'white', borderRadius:7, borderColor:"#16a085" }}>
                <QRCode
                    value={this.state.visitor.pass_code}
                    size={250}
                    bgColor='black'
                    fgColor='white'/>
              </View>
            ) : (
              <ActivityIndicator/>
            )
          }
            </View>
            <View style={{ justifyContent: 'center', flexDirection: 'row'}}>
              <View style={{ alignItems:"flex-start", width: 300}}>
                  <Text style={{fontWeight: "bold", fontSize:17}} >Visitor:</Text>
                  <H3 style={{ alignItems:"flex-start",padding: 3, fontSize:17 }}>Name: {this.state.isLoading ? "" : this.state.visitor.name}</H3>
                  <H3 style={{ alignItems:"flex-start",padding: 3, fontSize: 17 }}>Unit: {this.state.isLoading ? "" : this.state.visitor.unit}</H3>
              </View>
            </View>
            
        </Content>
      </Container>
    );
  }
}

