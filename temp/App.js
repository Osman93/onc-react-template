/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {BackHandler, Platform , StatusBar , View} from 'react-native';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from "./helpers/AlertHelper";
import Splash from './views/Splash';
import Anasayfa from './views/Anasayfa';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex:1}}>
      <Router
        tintColor="white"
        backAndroidHandler={() => {
          if (Actions.currentScene == 'anasayfa') {
            return BackHandler.exitApp();
          }
          return Actions.pop();
        }}>
        <Stack key="root">
          <Scene
            key="splash"
            component={Splash}
            title="Splash"
            hideNavBar={true}
          />
          <Scene
            key="anasayfa"
            component={Anasayfa}
            hideNavBar={true}
            panHandlers={null}
          />
        </Stack>
      </Router>
      <DropdownAlert
          defaultContainer={{ padding: 8, paddingTop: StatusBar.currentHeight, flexDirection: 'row' }}
          ref={ref => AlertHelper.setDropDown(ref)}
          onClose={() => AlertHelper.invokeOnClose()}
        />
      </View>
    );
  }
}
