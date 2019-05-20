import React, { Component } from "react";
import { Content } from "native-base";
import HeaderComp from "../components/HeaderComp";
import {Text} from 'native-base'
class AboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content style={{margin:15}}>
        <Text style={{textAlign:"justify"}}>Et et sea lorem invidunt sanctus sit justo sed. Ipsum ipsum kasd ipsum kasd est duo labore et amet. Ipsum ipsum no sit consetetur no at erat nonumy duo. Invidunt et kasd nonumy diam, et magna vero clita lorem amet et et ipsum. Dolores erat et diam kasd stet stet et. Ipsum dolore lorem sea sanctus takimata stet aliquyam, eirmod at diam est ipsum dolor stet nonumy tempor. Et magna ipsum amet ipsum elitr ipsum sit et. Invidunt sadipscing sit duo sed sit sea voluptua aliquyam labore. Et kasd sanctus tempor eos lorem duo et sit at. Sanctus sadipscing lorem et eos diam nonumy duo, eirmod elitr invidunt et eirmod invidunt, diam voluptua accusam dolores nonumy ipsum vero et, voluptua stet dolore labore dolor et justo et voluptua, labore nonumy aliquyam invidunt diam clita eirmod, ipsum et sadipscing ipsum duo lorem. Dolore consetetur consetetur clita kasd lorem. Diam diam tempor ut labore, dolores ipsum sea et diam sadipscing kasd, erat amet clita eos kasd voluptua ea amet. Tempor takimata no erat sadipscing no dolor elitr takimata dolor, dolor lorem eirmod invidunt ipsum invidunt. Amet ipsum dolor ipsum duo aliquyam et clita dolor, no sed erat vero eos dolore kasd at.</Text>
      </Content>
    );
  }
}

export default AboutScreen;
