import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import { Container, Header, Card, CardItem, Body, Text, View, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
  stretch: {
    flex:1,
    height: 90,
    resizeMode: 'contain',
  },
  cardBody: {
    justifyContent: 'space-around',
    height: 90
  },
  cardFooter: {
    flexDirection: "row",  
    alignItems: "center", 
    justifyContent: "space-around" 
  },
  card: {
    
  },
  footer_text: {
    fontSize: 14
  }
});

class Menu extends React.Component {

 requestForm = (type) => {
   console.log(type);
    this.props.navigation.navigate("ReqDescription",{
              service_type: type
            })
  }

  render() {
        return ( 
          <Container >
            <View  style={{ flex:1, alignContent:'center', justifyContent: 'center' }} >
              <View style={{ alignItems: "center" ,height: 550 }}>
                  <Grid style={{ width: 320 }} > 
                  <Row  >
                  <Col >
                    <TouchableOpacity 
                      onPress={() => this.props.navigation.navigate("Pass")}   >
                      <Card transparent style={styles.card} >
                        <CardItem cardBody  style={styles.cardBody} >
                          <Image style={styles.stretch} source={require('../Images/Assets/qr.png')} />
                        </CardItem>
                        <CardItem footer style={styles.cardFooter}>
                          <Text style={styles.footer_text} >Entry Pass</Text>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  </Col>
                  <Col > 
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("Maintenance")}   >
                    <Card transparent style={styles.card} >
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../Images/Assets/maintenance.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text style={styles.footer_text} >Service Requests</Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                  </Col>
                  </Row>
                  <Row  >
                  <Col >
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("Advertisement")}    >
                    <Card transparent style={styles.card} >
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../Images/Assets/ad.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text style={styles.footer_text}>Advertisement</Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                  </Col>
                  <Col >
                      <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate("Notification")}    >
                      <Card transparent style={styles.card} >
                        <CardItem cardBody  style={styles.cardBody} >
                          <Image style={styles.stretch} source={require('../Images/Assets/announcement.png')} />
                        </CardItem>
                        <CardItem footer style={styles.cardFooter}>
                          <Text style={styles.footer_text}>Announcements </Text>
                        </CardItem>
                      </Card>
                      </TouchableOpacity>
                  </Col>
                  </Row>
                  <Row >
                  <Col >
                    <TouchableOpacity 
                      onPress={() => this.props.navigation.navigate("Promoions")}    >
                    <Card transparent style={styles.card} >
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../Images/Assets/promotions.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text style={styles.footer_text}>Promotions </Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                  </Col>
                  <Col >
                    <TouchableOpacity 
                      onPress={() => this.props.navigation.navigate("Contract")}    >
                    <Card transparent style={styles.card} >
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../Images/Assets/contract.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text style={styles.footer_text}>Contract </Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                  </Col>
                  </Row>
                  <Row>
                    <Col >
                    <TouchableOpacity 
                      onPress={() => this.props.navigation.navigate("Info")}    >
                    <Card transparent style={styles.card} >
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../Images/Assets/info.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text style={styles.footer_text}>Info </Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                    </Col>
                  </Row>
                </Grid>
                </View>
              </View>
          </Container>
        );
  }
}

export default Menu;