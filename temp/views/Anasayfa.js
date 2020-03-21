import React from 'react';
import { Dimensions } from "react-native";
import {Container, Content, Text} from 'native-base';
import axios from "axios";
import HTML from 'react-native-render-html';
import FastImage from "react-native-fast-image";
const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;
export default class Anasayfa extends React.Component {

	componentWillMount(){
		axios.get('http://on-csoft.com/akis')
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err.response);
		})
	}
	render() {
		return (
			<Container style={{flex:1,backgroundColor:'#f54136'}}>
				<Content padder>
					<Text>Anasayfa</Text>
					<FastImage
         			 source={require('../assets/oncLogo.png')}
			          resizeMode="contain"
			          style={[styles.icon]}
			        />
					<HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
				</Content>
			</Container>
		);
	}
}
const styles = {
 
  icon: {
    width: 200,
    height: 200,
  },
 
};
