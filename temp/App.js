/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {BackHandler, Platform , StatusBar , View} from 'react-native';
import {Router, Stack, Scene, Actions , Tabs} from 'react-native-router-flux';
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from "./helpers/AlertHelper";
import Splash from './views/Splash';
import ExampleLibrary from './ExampleUsage/ExampleLibrary';
import ExampleMaster from './ExampleUsage/ExampleMaster';
import Home from './views/Home';
import Screen1 from './views/Footer/Screen1';
import Screen2 from './views/Footer/Screen2';
import FooterTemp from './components/FooterTemp';



export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.disableYellowBox = true
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
            key="expLib"
            component={ExampleLibrary}
            hideNavBar={true}
            panHandlers={null}
          />
          <Tabs key="tab" tabs tabBarComponent={FooterTemp} hideNavBar={true}>
              <Scene
                key="home"
                component={Home}
                hideNavBar={true}
                panHandlers={null}
              />
               <Scene
                key="expMaster"
                component={ExampleMaster}
                hideNavBar={true}
                panHandlers={null}
              />
              <Scene key="screen1" component={Screen1} hideNavBar={true}/>
              <Scene key="screen2" component={Screen2} hideNavBar={true}/>
          </Tabs>
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
