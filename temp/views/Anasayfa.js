import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Container, Content, Text, View} from 'native-base';
import axios from 'axios';
import HTML from 'react-native-render-html';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Drawer from 'react-native-drawer';

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;
export default class Anasayfa extends React.Component {
	closeControlPanel = () => {
		this._drawer.close();
	};
	openControlPanel = () => {
		this._drawer.open();
	};
	componentWillMount() {
		axios
			.get('http://on-csoft.com/akis')
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
