import React from 'react';
import {View, Text , Dimensions} from 'react-native';
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
import Master from '../../components/Master';

export default class Screen2 extends React.Component {
	renderTabs() {
		return (
			<Tabs
				renderTabBar={() => <ScrollableTab style={styles.scrollableTabStyle} />}
				tabBarUnderlineStyle={{backgroundColor: 'white'}}>
				<Tab
					heading={
						<TabHeading style={{backgroundColor: 'transparent'}}>
							<Text style={{color: 'white'}}>Deneme</Text>
						</TabHeading>
					}>
					<View
						style={{
							backgroundColor: 'white',
							height: Dimensions.get('window').height,
						}}>
						<Text>Deneme Yazı</Text>
					</View>
				</Tab>
				<Tab
					heading={
						<TabHeading style={{backgroundColor: 'transparent'}}>
							<Text style={{color: 'white'}}>Deneme2</Text>
						</TabHeading>
					}>
					<View
						style={{
							backgroundColor: 'white',
							height: Dimensions.get('window').height,
						}}>
						<Text>Deneme2 Yazı</Text>
					</View>
				</Tab>
			</Tabs>
		);
	}
	render() {
		return (
			<Master
				headerTitle={'Screen2'}
				headerIcon={<Icon name="menu" style={{color: 'white'}} />}
				rightMenu={true}
				renderTabs={this.renderTabs()}
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

