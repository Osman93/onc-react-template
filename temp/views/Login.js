import React, {Component} from 'react';
import {
	View,
	Text,
	Dimensions,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import {Container, H1, H2, Item, Label, Input} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {Actions} from 'react-native-router-flux';
import OneSignal from 'react-native-onesignal';
import Color from '../helpers/Color';
import Config from '../helpers/Config';
import {AlertHelper} from '../helpers/AlertHelper';

const {width, height} = Dimensions.get('window');
export default class Login extends Component {
	state = {
		entryno: '',
		password: '',
	};
	constructor(properties) {
		super(properties);
		OneSignal.init(Config.onesignal_app_id);
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
	render() {
		return (
			<LinearGradient
				start={{x: 0, y: 0}}
				end={{x: 1, y: 0.2}}
				colors={Color.colorGradient}
				style={styles.container}>
				<FastImage
					source={require('../assets/oncLogo.png')}
					style={styles.styleLogo}
					resizeMode="contain"
				/>
				<ScrollView style={styles.styleScrollView}>
					<View style={styles.styleFlexStartView}>
						<H1 style={{color: 'black', fontWeight: '600'}}>Giriş Yap</H1>
					</View>
					<Item stackedLabel style={styles.padding}>
						<Label>Giriş No </Label>
						<Input
							autoFocus={false}
							onChangeText={e => this.setState({entryno: e})}
							value={this.state.entryno}
						/>
					</Item>
					<Item stackedLabel style={styles.padding}>
						<Label>Şifre </Label>
						<Input
							onChangeText={s => this.setState({password: s})}
							value={this.state.password}
							secureTextEntry={true}
						/>
					</Item>
					<TouchableOpacity
						style={{flex: 1}}
						onPress={() => {
							AlertHelper.show('success', 'Durum', 'Giriş Başarılı');
							Actions.home();
						}}>
						<LinearGradient
							start={{x: 0, y: 0}}
							end={{x: 1, y: 0.2}}
							colors={Color.colorGradient}
							style={styles.buttonStyle}>
							<Text style={styles.textStyle}>Giriş</Text>
						</LinearGradient>
					</TouchableOpacity>
					<View style={styles.styleFlexEndView}>
						<Text style={styles.styleTextAccount}>
							Hesabınız yok mu? Lütfen&nbsp;
							<Text
								uppercase={false}
								onPress={() => Actions.register()}
								style={styles.styleTextUnderlineAccount}>
								hesap açınız
							</Text>
						</Text>
					</View>
				</ScrollView>
			</LinearGradient>
		);
	}
}
const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	padding: {
		marginLeft: 15,
		marginRight: 15,
		marginBottom: 10,
	},
	styleLogo: {
		width: width / 2,
		height: height / 2.7,
	},
	styleScrollView: {
		backgroundColor: 'white',
		flex: 1,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		width: width,
	},
	styleFlexStartView: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: 20,
	},
	styleFlexEndView: {
		justifyContent: 'flex-end',
		flex: 1,
		marginBottom: 20,
	},

	styleTextAccount: {
		textAlign: 'center',
		color: '#373c41',
	},
	styleTextUnderlineAccount: {
		textAlign: 'center',
		color: 'black',
		textDecorationLine: 'underline',
	},
	buttonStyle: {
		width: width - 90,
		left: 45,
		borderRadius: 30,
		padding: 10,
		marginTop: 30,
		marginBottom: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		color: 'white',
		fontWeight: '900',
	},
};
