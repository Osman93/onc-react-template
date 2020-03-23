import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Color from "../helpers/Color";

const h = Dimensions.get('window').height;
const height = h * 2;

class Splash extends Component {
  circle = new Animated.Value(0);
  logo = new Animated.Value(0);
 
  componentWillMount() {
    Animated.parallel([
      Animated.timing(this.circle, {
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(this.logo, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  }
  componentDidMount() {
    setTimeout(() => {
      Actions.login();
    }, 2000);
  }

  render() {
    const translateY = this.circle.interpolate({
      inputRange: [0, 1],
      outputRange: [-height, 0],
    });
    const transY = this.logo.interpolate({
      inputRange: [0, 1],
      outputRange: [height, 0],
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('../assets/oncLogo.png')}
          resizeMode="contain"
          style={[styles.icon, {transform: [{translateY: transY}]}]}
        />
        <Animated.View style={[styles.circle, {transform: [{translateY}]}]} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.colorSplashBefore,
  },
  icon: {
    width: 200,
    height: 200,
  },
  circle: {
    width: height,
    height,
    backgroundColor: Color.colorSplashAfter,
    borderRadius: h,
    position: 'absolute',
    zIndex: -1,
  },
};
export default Splash;
