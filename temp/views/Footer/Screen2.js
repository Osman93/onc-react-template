import React from 'react'
import {View,Text} from "react-native";
import {Icon} from "native-base";
import Master from '../../components/Master';

export default class Screen2 extends React.Component {
	renderScene() {
		return (
			<View>
				<Text>Screen2</Text>
			</View>
		)
	}
	render(){
		return(
		<Master
				headerTitle={'Screen2'}
				headerIcon={<Icon name="menu" style={{color: 'white'}} />}
				rightMenu={false}
				renderScene={this.renderScene()}
			/>
		);
	}
}