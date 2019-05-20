import React, { Component } from "react";
import {
  Content,
  Text,
  List,
  ListItem,
  Separator,
  View,
  Icon
} from "native-base";
import { Actions } from "react-native-router-flux";
import links from "../constants/LinksName";
class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {}

  render() {
    return (
      <Content style={{ marginTop: 24 }}>
        <List>
        <Separator bordered>
            <Text>Main</Text>
          </Separator>
          <ListItem
            onPress={() => Actions.chat()}
            selected={Actions.currentScene == "_" + links.chat}
          >
            <Icon name="home" color="#34495e" />
            <Text> Home</Text>
          </ListItem>
          <Separator bordered>
            <Text>Components</Text>
          </Separator>
          <ListItem
            onPress={() => Actions.index()}
            selected={Actions.currentScene == "_" + links.index}
          >
            <Text>Circuits</Text>
          </ListItem>
          <ListItem
            onPress={() => Actions.about()}
            selected={Actions.currentScene == "_" + links.about}
          >
            <Text>About us</Text>
          </ListItem>
          <ListItem
            onPress={() => Actions.repport()}
            selected={Actions.currentScene == "_" + links.repport}
          >
            <Text>Repport Problems</Text>
          </ListItem>
          <ListItem
            onPress={() => Actions.map()}
            selected={Actions.currentScene == "_" + links.map}
          >
            <Text>Map</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default MenuScreen;
