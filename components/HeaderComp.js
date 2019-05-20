import React, { Component } from 'react';
import { Header, Left } from 'native-base';
import Settings from '../constants/Settings'
import {Text} from 'react-native'
class HeaderComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<Header style={{marginTop:24}}>
            <Left><Text onPress={()=>{
            }}>{Settings.title+' '+this.props.title}</Text></Left>
        </Header>);
    }
}
 
export default HeaderComp;