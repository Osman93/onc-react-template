import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Container, Content, Text, View} from 'native-base';
import axios from 'axios';
import HTML from 'react-native-render-html';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Drawer from 'react-native-drawer';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import OneSignal from 'react-native-onesignal';
import {AlertHelper} from '../helpers/AlertHelper';
import Config from "../helpers/Config";
const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;
export default class ExampleLibrary extends React.Component {
	closeControlPanel = () => {
		this._drawer.close();
	};
	openControlPanel = () => {
		this._drawer.open();
	};

	constructor(properties) {
		super(properties);
		OneSignal.init('YOUR_ONESIGNAL_APPID', {kOSSettingsKeyAutoPrompt: true}); // set kOSSettingsKeyAutoPrompt to false prompting manually on iOS

		OneSignal.addEventListener('received', this.onReceived);
		OneSignal.addEventListener('opened', this.onOpened);
		OneSignal.addEventListener('ids', this.onIds);
	}

	componentWillUnmount() {
		OneSignal.removeEventListener('received', this.onReceived);
		OneSignal.removeEventListener('opened', this.onOpened);
		OneSignal.removeEventListener('ids', this.onIds);
	}

	onReceived(notification) {
		console.log('Notification received: ', notification);
	}

	onOpened(openResult) {
		console.log('Message: ', openResult.notification.payload.body);
		console.log('Data: ', openResult.notification.payload.additionalData);
		console.log('isActive: ', openResult.notification.isAppInFocus);
		console.log('openResult: ', openResult);
	}

	onIds(device) {
		console.log('Device info: ', device);
	}

	componentWillMount() {
		AlertHelper.show('info', 'Durum', 'Başarılı');

		axios
			.get(Config.base_url + 'akis')
			.then(res => {
				console.log(res.data);
			})
			.catch(err => {
				console.log(err.response);
			});
	}
	render() {
		return (
			<Drawer
				ref={ref => (this._drawer = ref)}
				content={<View style={{flex: 1, backgroundColor: 'red'}} />}
				tapToClose={true}
				openDrawerOffset={0.2} // 20% gap on the right side of drawer
				panCloseMask={0.2}
				closedDrawerOffset={-3}
				styles={drawerStyles}
				tweenHandler={ratio => ({
					main: {opacity: (2 - ratio) / 2},
				})}>
				<Container style={{flex: 1, backgroundColor: '#f54136'}}>
					<LinearGradient
						start={{x: 0, y: 0}}
						end={{x: 1, y: 0}}
						colors={['#4c669f', '#3b5998', '#192f6a']}
						style={styles.linearGradient}>
						<Content padder>
							<Text>Anasayfa</Text>
							<TouchableOpacity onPress={this.openControlPanel}>
								<Text>Aç</Text>
							</TouchableOpacity>
							<BannerAd
								unitId={TestIds.BANNER}
								size={BannerAdSize.FULL_BANNER}
								requestOptions={{
									requestNonPersonalizedAdsOnly: true,
								}}
								onAdLoaded={() => {
									console.log('Advert loaded');
								}}
								onAdFailedToLoad={error => {
									console.error('Advert failed to load: ', error);
								}}
							/>
							<FastImage
								source={require('../assets/oncLogo.png')}
								resizeMode="contain"
								style={[styles.icon]}
							/>
							<HTML
								html={htmlContent}
								imagesMaxWidth={Dimensions.get('window').width}
							/>
						</Content>
					</LinearGradient>
				</Container>
			</Drawer>
		);
	}
}
const drawerStyles = {
	drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
	main: {paddingLeft: 3},
};
const styles = {
	icon: {
		width: 200,
		height: 200,
	},
	linearGradient: {
		flex: 1,
	},
};
