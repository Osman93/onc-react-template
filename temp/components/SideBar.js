import React, {Component} from 'react';
import {Dimensions, ScrollView, BackHandler, Platform} from 'react-native';
import {
	View,
	Text,
	List,
	ListItem,
	Left,
	Body,
	Icon,
	Content,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {Actions} from 'react-native-router-flux';
import OneSignal from 'react-native-onesignal';
import axios from 'axios';
import Color from '../helpers/Color';
import Config from '../helpers/Config';

const {width, height} = Dimensions.get('window');
class SideBar extends Component {
	constructor(properties) {
		super(properties);
		OneSignal.init(Config.onesignal_app_id);
	}

	exitApp() {
		OneSignal.setSubscription(false);
		BackHandler.exitApp();
		Actions.splash();
	}

	render() {
		return (
			<LinearGradient
				start={{x: 0, y: 0}}
				end={{x: 1, y: 0}}
				colors={Color.colorGradient}
				style={styles.container}>
				<View style={styles.imageViewStyle}>
					<View style={styles.middleStyle}>
						<FastImage
							source={require('../assets/oncLogo.png')}
							style={{width: width * 0.8 - 40, height: 120}}
							resizeMode="contain"
						/>
						<Text style={styles.textStyle}>ONC</Text>
					</View>
					<ScrollView>
						<List style={{width: width * 0.8}}>
							<ListItem
								style={styles.listItemStyle}
								onPress={() => Actions.expLib()}>
								<Icon
									name="calendar"
									type="AntDesign"
									style={styles.iconStyle}
								/>
								<Text style={styles.listItemTextStyle}>Library Example</Text>
							</ListItem>

							<ListItem
								style={styles.listItemStyle}
								onPress={() => this.exitApp()}>
								<Icon name="logout" type="AntDesign" style={styles.iconStyle} />
								<Text style={styles.listItemTextStyle}>Exit</Text>
							</ListItem>
						</List>
					</ScrollView>
				</View>
			</LinearGradient>
		);
	}
}
const styles = {
	container: {
		flex: 1,
	},
	imageViewStyle: {
		flex: 1,
		paddingTop: 20,
	},
	menuItemViewStyle: {
		paddingLeft: 20,
	},
	listItemStyle: {
		borderColor: 'white',
	},
	listItemTextStyle: {
		color: 'white',
	},
	iconStyle: {
		color: 'white',
		marginRight: 30,
	},
	textStyle: {
		color: 'white',
		fontWeight: '900',
		fontSize: 18,
	},
	middleStyle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
};
export default SideBar;
