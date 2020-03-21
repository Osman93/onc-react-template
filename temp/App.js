/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {BackHandler, Platform} from 'react-native';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import Splash from './views/Splash';
import Anasayfa from './views/Anasayfa';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
    );
  }
}
