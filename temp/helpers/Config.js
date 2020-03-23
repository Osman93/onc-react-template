import {Platform} from 'react-native';
import {TestIds} from '@react-native-firebase/admob';
import axios from 'axios';
export default class Config {
  static base_url = 'http://on-csoft.com/';
  static test_url = 'http://test.on-csoft.com/';
  static admob_id = (Platform.OS == 'ios') ? TestIds.BANNER : TestIds.BANNER;
  static onesignal_app_id = 'onesignal_app_id';
  static setAuthToken(token) {
    axios.defaults.headers.common['Authorization'] = '';
    delete axios.defaults.headers.common['Authorization'];
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }
}
