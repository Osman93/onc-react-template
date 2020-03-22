import React from 'react'
import {View,Text} from "react-native";
import {Icon} from "native-base";
import Master from '../../components/Master';

export default class Screen1 extends React.Component {
	renderScene() {
		return (
			<View>
				<Text>Screen1</Text>
			</View>
		)
	}
	render(){
		return(
		<Master
				headerTitle={'Screen1'}
				headerIcon={<Icon name="menu" style={{color: 'white'}} />}
				rightMenu={false}
				renderScene={this.renderScene()}
			/>
		);
	}
}