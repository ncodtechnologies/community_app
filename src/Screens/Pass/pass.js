import React from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';

export default class Pass extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: false,
      tenant : {
        pass_hash: "12233456",
        tenant: "John Doe"
      }
    }
  }

  componentDidMount(){
/*    return fetch('http://ncod.in/Sulafa/controller/getTenantDt.php')
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
     //     tenant: responseJson.tenant,
        }, function(){
          console.log(responseJson);
        });

      })
      .catch((error) =>{
        console.error(error);
      });
    */ 
   }

  render(){

    return (
      <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left/>
          <Body>
            <Title>My Pass</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate("VisitorList")} >
            <Text>Guests</Text>
          </Button>
        </Right>
      </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop:15 }}>
              <View style={{ alignItems:"center", width: 300 }}>
                  <H2 style={{ alignItems:"center",textAlign: 'center' }}>Scan the below QR code to gain access</H2>
              </View>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row', marginTop:1}}>
            {!this.state.isLoading ? (
              <View style={{ alignItems:"center", elevation: 8, padding: 7, backgroundColor: 'white', borderRadius:7, borderColor:"#16a085" }}>
                <QRCode
                    value={this.state.tenant.pass_hash}
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
                <Text style={{fontWeight: "bold", fontSize: 20}} >Owner: John</Text>
                <Text style={{fontWeight: "bold", fontSize: 20}} >Unit: 12 B</Text>
              </View>
            </View>
        </Content>
      </Container>
    );
  }
}
