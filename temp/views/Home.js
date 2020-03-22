import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
	Spinner,
	H1,
	H3,
	Container,
	Tabs,
	Tab,
	ScrollableTab,
	TabHeading,
	Input,
	Item,
	Icon,
} from 'native-base';
import Master from '../components/Master';
import FooterTemp from '../components/FooterTemp';

export default class Home extends React.Component {
	renderScene() {
		return (
			<View
				style={{
					flex: 1,
				}}>
				<Text>Osman</Text>
				
			</View>
		);
	}
	render() {
		return (
			<Master
				headerTitle={'Home'}
				headerIcon={<Icon name="menu" style={{color: 'white'}} />}
				rightMenu={false}
				renderScene={this.renderScene()}
			/>
		);
	}
}
const styles = {
	scrollableTabStyle: {
		backgroundColor: 'transparent',
		height: 40,
	},
};
