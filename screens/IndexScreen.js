import React, { Component } from "react";
import { Content, Button, Icon } from "native-base";
import HeaderComp from "../components/HeaderComp";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import dim from "../constants/Layout";

const pad = 15

class IndexScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <View style={{ margin: 10 }}>
          <Button
            block
            light
            onPress={() => {
              Actions.map({prop:1});
            }}
          >
            <Icon name="map" />
            <Text>Dans L’ancienne Médina</Text>
          </Button>
        </View>

        <View style={{ margin: pad }}>
          <Button
            block
            light
            onPress={() => {
              Actions.map();
            }}
          >
            <Icon name="map" />
            <Text>Circuit Des Galeries</Text>
          </Button>
        </View>

        <View style={{ margin: pad }}>
          <Button
            block
            light
            onPress={() => {
              Actions.map();
            }}
          >
            <Icon name="map" />
            <Text>Circuit  Dromadaire</Text>
          </Button>
        </View>
        <View style={{margin:pad}}>
          <Button
           block
           light
            onPress={() => {
              Actions.map();
            }}
          >
            <Icon name="map"/>
            <Text>Circuits Arrière Pays</Text>
          </Button>
        </View>
      </Content>
    );
  }
}

export default IndexScreen;
