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
export default class ExampleMaster extends React.Component {
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
							backgroundColor: 'gray',
							height: Dimensions.get('window').height,
						}}>
						<Text>asdasd</Text>
					</View>
				</Tab>
				<Tab
					heading={
						<TabHeading style={{backgroundColor: 'transparent'}}>
							<Text style={{color: 'white'}}>Deneme2</Text>
						</TabHeading>
					}>
					<View style={{flex: 1, backgroundColor: 'darkgray'}} />
				</Tab>
				<Tab
					heading={
						<TabHeading style={{backgroundColor: 'transparent'}}>
							<Text style={{color: 'white'}}>Deneme</Text>
						</TabHeading>
					}>
					<View />
				</Tab>
				<Tab
					heading={
						<TabHeading style={{backgroundColor: 'transparent'}}>
							<Text style={{color: 'white'}}>Deneme2</Text>
						</TabHeading>
					}>
					<View style={{flex: 1, backgroundColor: 'lightgray'}} />
				</Tab>
				<Tab
					heading={
						<TabHeading style={{backgroundColor: 'transparent'}}>
							<Text style={{color: 'white'}}>Deneme</Text>
						</TabHeading>
					}>
					<View />
				</Tab>
				<Tab
					heading={
						<TabHeading style={{backgroundColor: 'transparent'}}>
							<Text style={{color: 'white'}}>Deneme2</Text>
						</TabHeading>
					}>
					<View />
				</Tab>
			</Tabs>
		);
	}
	renderScene() {
		return (
			<View style={{flex: 1, backgroundColor: 'green', paddingTop: 100}}>
				<Text>Osman</Text>
			</View>
		);
	}
	render() {
		return (
			<Master
				headerTitle={'Bloglar'}
				headerIcon={<Icon name="menu" style={{color: 'white'}} />}
				rightMenu={false}
				renderTabs={this.renderTabs()} //yada renderScene={this.renderScene}
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
