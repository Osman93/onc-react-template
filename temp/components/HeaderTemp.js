import React, {Component} from 'react';
import {
	TouchableOpacity,
	Dimensions,
	StatusBar,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';
import {Header, Left, Body, Right, Title, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../helpers/Color';
const {width, height} = Dimensions.get('window');
class HeaderTemp extends Component {
	state = {
		tabs: false,
	};
	renderRight() {
		if (this.props.back) {
			return (
				<TouchableOpacity onPress={this.props.onPress}>
					{this.props.icon}
				</TouchableOpacity>
			);
		}
	}
	renderLeft() {
		if (this.props.back) {
			return (
				<TouchableOpacity onPress={() => Actions.pop()}>
					<Icon name="left" type="AntDesign" style={{color: 'white'}} />
				</TouchableOpacity>
			);
		} else {
			return (
				<TouchableOpacity onPress={this.props.onPress}>
					{this.props.icon}
				</TouchableOpacity>
			);
		}
	}
	render() {
		return (
			<LinearGradient
				start={{x: 0, y: 0}}
				end={{x: 1, y: 0.2}}
				colors={Color.colorGradient}
				style={(styles.headerStyle, {height: this.props.tabs ? height : 80})}>
				<StatusBar hidden />
				<Header transparent noShadow={true}>
					<Left style={{flex: 1}}>{this.renderLeft()}</Left>
					<Body
						style={[
							{flex: 4, justifyContent: 'center', alignItems: 'center'},
							styles.itemStyle,
						]}>
						<Title style={{textAlign: 'center', color: 'white'}}>
							{this.props.title}
						</Title>
					</Body>
					<Right style={{flex: 1}}>{this.renderRight()}</Right>
				</Header>
				{this.props.tabs}
			</LinearGradient>
		);
	}
}
const styles = {
	headerStyle: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: width + 5,
		borderBottomLeftRadius: 35,
		borderBottomRightRadius: 35,
		zIndex: 10,
	},
	itemStyle: {
		justifyContent: 'center',
		marginBottom: 10,
	},
};
export default HeaderTemp;
