import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';
import { connect } from "react-redux";
import HomeScreen from "./screen";
import { reqMaintenance } from "../action";

class _Container extends Component {
  componentDidMount = () => {
    console.log("/////////params : "+JSON.stringify(this.props.navigation.state.params))
  };

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreen {...this.props} />
      </View>
    );
  };
}

const mapStateToProps = ({ reqMaintenance, token }) => ({
  reqMaintenance,
  token
});
const mapDispatchToProps = dispatch => ({
  reqMaintenance: data => dispatch(reqMaintenance(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

