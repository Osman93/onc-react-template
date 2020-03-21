import React from 'react';
import {Container, Content, Text} from 'native-base';
import axios from "axios";
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
			<Container>
				<Content padder>
					<Text>Anasayfa</Text>
				</Content>
			</Container>
		);
	}
}
