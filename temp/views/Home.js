import React from 'react';
import {
	Share,
	Platform,
	Text,
	View,
	ScrollView,
	Dimensions,
	Image,
	TouchableOpacity,
	Linking,
	FlatList,
	AsyncStorage,
	StyleSheet,
	WebView,
} from 'react-native';
import {
	Header,
	Footer,
	FooterTab,
	Button,
	Icon,
	Text as NBText,
	Card,
	CardItem,
	Left,
	Right,
	Body,
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
} from 'native-base';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import FastImage from 'react-native-fast-image';
import Config from '../helpers/Config';
import Master from '../components/Master';
import FooterTemp from '../components/FooterTemp';

export default class Home extends React.Component {
	state = {
		page1: 1,
		data: [],
		isRefreshing: true,
		last_page: '',
	};

	loadHaber = () => {
		const {data, page1} = this.state;
		axios
			.get(Config.base_url + 'akis?page=' + page1)
			.then(res => {
				return res.data;
			})
			.then(res => {
				//console.log(res);
				this.setState({
					data: page1 === 1 ? res.data : [...data, ...res.data],
					isRefreshing: false,
					last_page: res.last_page,
				});
			})
			.catch(err => {});
	};
	handleRefresh = () => {
		this.setState(
			{
				isRefreshing: true,
			},
			() => {
				this.loadHaber();
			},
		);
	};
	handleLoadMore = () => {
		this.setState(
			{
				page1: this.state.page1 + 1,
			},
			() => {
				if (this.state.page1 <= this.state.last_page) {
					this.loadHaber();
				}
			},
		);
	};
	componentDidMount() {
		this.loadHaber();
	}
	componentWillMount() {}
	renderFlatListFooter = () => {
		var data = Object.keys(this.state.data);
		if (this.state.page1 <= this.state.last_page && data.length != 0) {
			return (
				<View style={styles.flatListFooterStyleActive}>
					<Spinner color="white" />
				</View>
			);
		} else {
			return <View style={styles.flatListFooterStyle} />;
		}
	};
	renderCardImage(ok) {
		if (ok) {
			return (
				<CardItem cardBody>
					<FastImage
						source={{
							uri: "http://on-csoft.com/images/uploads/KPSS/" + ok,
						}}
						resizeMode="cover"
						style={{
							height: 240,
							width: null,
							flex: 1,
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
						}}
					/>
				</CardItem>
			);
		}
	}
	renderScene() {
		console.disableYellowBox = true;
		const {data, isRefreshing} = this.state;
		if (!isRefreshing && data) {
			return (
				<View style={{flex: 1}}>
					{data && (
						<FlatList
							style={{marginTop: 0, marginBottom: 0}}
							horizontal={false}
							data={data}
							numColumns={1}
							renderItem={({item, index}) => (
								<TouchableOpacity
									key={item.Adi}
									style={{flex: 1}}
									>
									<Card style={styles.cardStyle}>
										{this.renderCardImage(item.Resim)}
										<CardItem header style={{borderRadius: 20}}>
											<Text style={{fontWeight: '600'}}>{item.Icerik}</Text>
										</CardItem>
									</Card>
								</TouchableOpacity>
							)}
							keyExtractor={i => i.Adi.toString()}
							refreshing={isRefreshing}
							onRefresh={this.handleRefresh.bind(this)}
							onEndReached={this.handleLoadMore.bind(this)}
							onEndThreshold={0.5}
							ListFooterComponent={this.renderFlatListFooter}
						/>
					)}
				</View>
			);
		} else {
			return (
				<View style={styles.loadingStyle}>
					<Spinner color="black" />
				</View>
			);
		}
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
