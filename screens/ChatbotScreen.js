import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import IconBot from "../assets/images/bot.png";
import KeyboardSpacer from "react-native-keyboard-spacer";
import {
  View,
  Platform,
  Animated,
  Linking,
  Text,
  StyleSheet,
  TextInput,
  Slider,
  Button
} from "react-native";

import { Constants, Speech } from "expo";

// import { Button, Text } from "native-base";
import { Actions } from "react-native-router-flux";
import settings from "../constants/Settings";
const link = settings.linkAddrs;
export default class ChatbotScreen extends React.Component {
  state = {
    messages: [],
    link: null,
    circuit: null,
    pitch: 1.0,
    result: ""
  };

  talk = () => {
    let options = {
      pitch: this.state.pitch
    };
    Speech.speak(this.state.result, options);
  };

  constructor(props) {
    super(props);
    this.answerDemo = this.answerDemo.bind(this);
  }
  prepareMessagesContainerHeight(value) {
    if (this.props.isAnimated === true) {
      return new Animated.Value(value);
    }
    return value;
  }

  onKeyboardWillShow(e) {
    this.setIsTypingDisabled(true);
    this.setKeyboardHeight(
      e.endCoordinates ? e.endCoordinates.height : e.end.height
    );
    this.setBottomOffset(this.props.bottomOffset);
    const newMessagesContainerHeight = this.getMessagesContainerHeightWithKeyboard();
    if (this.props.isAnimated === true) {
      Animated.timing(this.state.messagesContainerHeight, {
        toValue: newMessagesContainerHeight,
        duration: 210
      }).start();
    } else {
      this.setState({
        messagesContainerHeight: newMessagesContainerHeight
      });
    }
  }

  onKeyboardWillHide() {
    this.setIsTypingDisabled(true);
    this.setKeyboardHeight(0);
    this.setBottomOffset(0);
    const newMessagesContainerHeight = this.getBasicMessagesContainerHeight();
    if (this.props.isAnimated === true) {
      Animated.timing(this.state.messagesContainerHeight, {
        toValue: newMessagesContainerHeight,
        duration: 210
      }).start();
    } else {
      this.setState({
        messagesContainerHeight: newMessagesContainerHeight
      });
    }
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello! Ask me and I will answer you.",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Bot",
            avatar: IconBot
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    fetch(link, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      method: "post",
      body: JSON.stringify({ msg: messages[0].text })
    })
      .then(res => res.json())
      .then(res => {
        console.log();
        if (res.success) {
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages)
          }));
          this.answerDemo(messages, res.data.output.text[0]);
        } else {
          alert("Message not sent");
        }
      })
      .catch(err => {
        alert("MError");
        console.log(err);
      });
  }
  answerDemo(messages, msg) {
    if (messages.length > 0) {
      this.setState(previousState => {
        return {
          typingText: "Bot is typing"
        };
      });
    }
    setTimeout(() => {
      if (true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive("Nice picture!");
          } else if (messages[0].location) {
            this.onReceive("My favorite place");
          } else {
            if (!this._isAlright) {
              if (msg.indexOf("/map:") > -1) {
                let link = msg.substr(
                  msg.indexOf("/map:") + "/map:".length,
                  msg.length
                );
                let newmsg = msg.substr(0, msg.indexOf("/map:"));
                this.setState({
                  link: link
                });
                msg = newmsg;
                this.setState({ circuit: false });
              } else if (msg.indexOf("(circuit tours)") > -1) {
                this.setState({ circuit: true });
              } else {
                this.setState({ circuit: false, result: msg });
              }
              this.onReceive(msg);
            }
          }
        }
      }
    });
  }
  onReceive(text) {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Bot",
            avatar: IconBot
          }
        })
      };
    });
  }
  v;
  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={newMessages => {
            this.onSend(newMessages);
          }}
          user={{
            _id: 1
          }}
          renderAvatarOnTop={true}
          renderUsernameOnMessage={true}
          value={this.state.message}
          // onChangeText={message => this.setState({ message })}
          onPressAvatar={this.talk}
          // onPressAvatar={() => {
          //   if (this.state.circuit == true) Actions.index();
          //   else if (this.state.link != null)
          //     Linking.openURL(this.state.link).catch(err => console.log(err));
          // }}
        />

        {Platform.OS === "android" ? <KeyboardSpacer /> : null}
      </View>
    );
  }
}
