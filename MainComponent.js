import React, { Component } from "react";
import { Container } from "native-base";
import IndexScreen from "./screens/IndexScreen";
import MenuScreen from "./screens/MenuScreen";
import HeaderComp from "./components/HeaderComp";
import MapScreen from "./screens/MapScreen";
import { Router, Stack, Scene, Drawer } from "react-native-router-flux";
import AboutScreen from "./screens/AboutScreen";
import Links from "./constants/LinksName";
import RepportProblemScreen from "./screens/RepportProblemScreen";
import ChatbotScreen from "./screens/ChatbotScreen";
import WebViewScreen from "./screens/WebViewScreen";
/**
 * ## page state page numbers, screen equivalant
 * 1- IndexScreen
 * 2- MenuScreen
 * 3- SuggestPlacesScreen
 * 4- AboutScreen
 * 5- RepportScreen
 * 6- MapScreen
 * 7- MoreInfoAboutPlaceScreen
 */

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home"
    };
  }

  render() {
    return (
      <Container>
        <Router>
          <Stack key="root">
            <Drawer
              hideNavBar
              key="drawerMenu"
              contentComponent={MenuScreen}
              drawerWidth={250}
              drawerPosition="left"
            >
              <Scene
                initial
                key={Links.chat}
                component={ChatbotScreen}
                title="Home"
              />
              <Scene
                key={Links.index}
                component={IndexScreen}
                title="Circuits"
              />
              <Scene key={Links.map} component={MapScreen} title="Map" />
              <Scene
                key={Links.about}
                component={AboutScreen}
                title="About us"
              />
              <Scene
                key={Links.repport}
                component={RepportProblemScreen}
                title="More informations"
              />
              <Scene
                key="webview"
                component={WebViewScreen}
                title="Location"
              />
            </Drawer>
          </Stack>
        </Router>
      </Container>
    );
  }
}

export default MainComponent;
