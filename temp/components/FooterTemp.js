import React from 'react';
import {
  Text,
  Platform,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {Footer, FooterTab, Button, Text as NBText, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../helpers/Color';
const {width, height} = Dimensions.get('window');
class FooterTemp extends React.Component {
  state = {
    screen: 'home',
  };
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.2}}
        colors={Color.colorGradient}>
        <Footer style={{backgroundColor: 'transparent'}}>
          <FooterTab>
            <Button
              style={{
                backgroundColor:
                  this.state.screen == 'home'
                    ? Color.footerActiveBgColor
                    : 'transparent',
              }}
              vertical
              onPress={() => {
                this.setState({screen: 'home'});
                Actions.home();
              }}>
              <Icon
                name="home"
                style={{
                  color:
                    this.state.screen == 'home'
                      ? Color.footerActiveTextColor
                      : Color.footerPassiveTextColor,
                }}
              />
              <Text
                style={{
                  color:
                    this.state.screen == 'home'
                      ? Color.footerActiveTextColor
                      : Color.footerPassiveTextColor,
                }}>
                Anasayfa
              </Text>
            </Button>
            <Button
              style={{
                backgroundColor:
                  this.state.screen == 'screen1'
                    ? Color.footerActiveBgColor
                    : 'transparent',
              }}
              vertical
              onPress={() => {
                this.setState({screen: 'screen1'});
                Actions.screen1();
              }}>
              <Icon
                name="ios-book"
                style={{
                  color:
                    this.state.screen == 'screen1'
                      ? Color.footerActiveTextColor
                      : Color.footerPassiveTextColor,
                }}
              />
              <Text
                style={{
                  color:
                    this.state.screen == 'screen1'
                      ? Color.footerActiveTextColor
                      : Color.footerPassiveTextColor,
                }}>
                Screen1
              </Text>
            </Button>
            <Button
              style={{
                backgroundColor:
                  this.state.screen == 'screen2'
                    ? Color.footerActiveBgColor
                    : 'transparent',
              }}
              vertical
              onPress={() => {
                this.setState({screen: 'screen2'});
                Actions.screen2();
              }}>
              <Icon
                name="ios-book"
                style={{
                  color:
                    this.state.screen == 'screen2'
                      ? Color.footerActiveTextColor
                      : Color.footerPassiveTextColor,
                }}
              />
              <Text
                style={{
                  color:
                    this.state.screen == 'screen2'
                      ? Color.footerActiveTextColor
                      : Color.footerPassiveTextColor,
                }}>
                Screen2
              </Text>
            </Button>
            <Button
              style={{
                backgroundColor:
                  this.state.screen == 'expMaster'
                    ? Color.footerActiveBgColor
                    : 'transparent',
              }}
              vertical
              onPress={() => {
                this.setState({screen: 'expMaster'});
                Actions.expMaster();
              }}>
              <Icon
                name="ios-book"
                style={{
                  color:
                    this.state.screen == 'expMaster'
                      ? Color.footerActiveTextColor
                      : Color.footerPassiveTextColor,
                }}
              />
              <Text
                style={{
                  color:
                    this.state.screen == 'expMaster'
                      ? Color.footerActiveTextColor
                      : Color.footerPassiveTextColor,
                }}>
                Example Master
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </LinearGradient>
    );
  }
}
export default FooterTemp;
