import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import { Container, Header, Card, CardItem, Body, Text, Left, Right, Icon, Title, Button, Segment } from 'native-base';
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

class Maintenance extends Component {

  constructor(props){
    super(props);
    this.state ={
      selectedSegment : 2
      }
  }

 requestForm = (type) => {
   console.log(type);
    this.props.navigation.navigate("ReqDescription",{
              service_type: type
            })
  }

  selSegment(segment_id){
    this.setState({
      selectedSegment: segment_id
    })
  }

    render() {
        return ( 
          <Container>
          <Header hasSegment style={{ backgroundColor: '#0574CA' }}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Segment style={{ backgroundColor: '#0574CA' }} >
                  <Button first active={this.state.selectedSegment==1}
                   onPress={()=>this.selSegment(1)}
                  ><Text>Maintenance</Text></Button>
                  <Button last active={this.state.selectedSegment==2}
                   onPress={()=>this.selSegment(2)}
                   ><Text>G. Services</Text></Button>
                </Segment>
              </Body>
              <Right />
          </Header>
          {
            (this.state.selectedSegment == 1) ? 
            <MaintenanceReqs {...this.props} />
            :
            <GeneralServices {...this.props} />
          }
          </Container>
        );
    }
}

export default Maintenance;

  const MaintenanceReqs = ({ navigation }) => (
            <ScrollView> 
              <Grid>
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("ReqDescription", {service_type : "AC Services"})}   >
                    <Card>
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../../Images/ac.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text>AC Services</Text>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("ReqDescription", {service_type : "Doors Repair"})}   >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/aluminium.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Doors Repair</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                </Row>
                <Row>
                  <Col >
                    <TouchableOpacity onPress={() => navigation.navigate("ReqDescription", {service_type : "Electric"})}  >
                    <Card>
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../../Images/electric.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text>Electric Services</Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                  </Col>
                  <Col >
                    <TouchableOpacity onPress={() => navigation.navigate("ReqDescription", {service_type : "Carpentary"})}   >
                    <Card>
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../../Images/carpentary.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text>Carpentary </Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("ReqDescription", {service_type : "Plumbing"})}   >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/plumbing.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Plumbing</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("ReqDescription", {service_type : "Painting"})}   >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/painting.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Painting</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                </Row>
                <Row>
                  <Col >
                    <TouchableOpacity onPress={() => navigation.navigate("ReqDescription", {service_type : "Satellite"})}   >
                    <Card>
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../../Images/satellite.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text>Satellite</Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </Grid>
              </ScrollView>
        );


const GeneralServices = ({ navigation }) => (
          <ScrollView> 
            <Grid>
              
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("CarCleaning") }   >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/car_cleaning.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Car Cleaning</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
              <Col >
                <TouchableOpacity onPress={() => navigation.navigate("ReqDescription", {service_type : "Housemaid"})}  >
                <Card>
                  <CardItem cardBody  style={styles.cardBody} >
                    <Image style={styles.stretch} source={require('../../Images/housemaid.png')} />
                  </CardItem>
                  <CardItem footer style={styles.cardFooter}>
                    <Text>House Maid</Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
              </Col>
              </Row>
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("ReqDescription", {service_type : "Baby Sitting"})}   >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/babysitting.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Baby Sitting</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
              <Col >
                <TouchableOpacity onPress={() => navigation.navigate("Laundry")}   >
                <Card>
                  <CardItem cardBody  style={styles.cardBody} >
                    <Image style={styles.stretch} source={require('../../Images/laundry.png')} />
                  </CardItem>
                  <CardItem footer style={styles.cardFooter}>
                    <Text>Laundry Services</Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
              </Col>
              </Row>
              <Row>
              <Col >
                <TouchableOpacity onPress={() =>  navigation.navigate("PersonalTrainer")}   >
                <Card>
                  <CardItem cardBody  style={styles.cardBody} >
                    <Image style={styles.stretch} source={require('../../Images/trainer.png')} />
                  </CardItem>
                  <CardItem footer style={styles.cardFooter}>
                    <Text>Personal Trainer</Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
              </Col>
              <Col >
                <TouchableOpacity onPress={() =>  navigation.navigate("SwimmingTrainer")}   >
                <Card>
                  <CardItem cardBody  style={styles.cardBody} >
                    <Image style={styles.stretch} source={require('../../Images/swimming.png')} />
                  </CardItem>
                  <CardItem footer style={styles.cardFooter}>
                    <Text>Swimming Trainer</Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
              </Col>
              </Row>
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("ReqDescription", {service_type : "Pest Control"})}   >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/pest-control.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Pest Control</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("Cheff")}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/cheff.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Personal Cheff</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("Tailoring")}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/tailoring.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Tailoring</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("Tutoring")}   >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/tutoring.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Tutoring</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("Driver")}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/driver.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Personal Driver</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("HouseInsurance")}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../Images/house_insurance.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>House Insurance</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
              </Row>
            </Grid>
            </ScrollView>
      );