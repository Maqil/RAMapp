import { Content } from "native-base";
import {WebView} from 'react-native';
import React, { Component } from 'react'
import dim from '../constants/Layout'
class WebViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
      console.log(this.props)
        //alert(this.props.link)
    }
    
    render() { 
        return (<Content>
            <WebView
                source={this.props.link}
                style={{height:dim.window.height,width:dim.window.width}}
            />
        </Content>);
    }
}
 
export default WebViewScreen;