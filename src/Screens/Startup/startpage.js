import React, { Component } from 'react';
import { AsyncStorage, Image, StyleSheet, TouchableOpacity, Alert  } from 'react-native';
import { Container, Header, Card, CardItem, Body, Text, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
  stretch: {
    width: 80,
    height: 80
  },
  cardBody: {
    height: 125,
    justifyContent: 'space-around'
  },
  cardFooter: {
    flexDirection: "row",  
    alignItems: "center", 
    justifyContent: "space-around" 
  }
});

class Menu extends Component {

  componentDidMount(){
    
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
        console.log(value);
        this.props.navigation.navigate("MainMenu");
      }else
      {
        this.props.navigation.navigate("MainMenu");
      }
    } catch (error) {
      Alert.alert(error);
      
    }
  };

 requestForm = (type) => {
   console.log(type);
    this.props.navigation.navigate("ReqDescription",{
              service_type: type
            })
  }
    render() {
        return ( 
          <Container >
            <View style={{alignItems: "center", flexDirection: "row", flex:1}}>
                <Grid  > 
                <Row style={{height:180}} >
                <Col >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Login")}   >
                    <Card >
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text>Login</Text>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
                <Col > 
                  <TouchableOpacity
                     onPress={() => this.props.navigation.navigate("Register")}   >
                  <Card >
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch}  />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Register</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                </Row>
              </Grid>
              </View>
          </Container>
        );
    }
}

export default Menu;