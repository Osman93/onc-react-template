import React, { Component } from "react";
import { View, Text ,Keyboard} from "native-base";
import Drawer from "react-native-drawer";
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import Config from "../helpers/Config";
import SideBar from "./SideBar";
import HeaderTemp from "./HeaderTemp";
class Master extends Component {
	render() {
		
		return (
			<Drawer
				ref={ref => (this._drawer = ref)}
				type="overlay"
				content={<SideBar />}
				tapToClose={true}
				openDrawerOffset={0.2} // 20% gap on the right side of drawer
				panCloseMask={0.2}
				closedDrawerOffset={-3}
				styles={drawerStyles}
				side={this.props.rightMenu ? "right" : "left"}
				tweenHandler={ratio => ({
					main: { opacity: (2 - ratio) / 2 }
				})}
			>
				<HeaderTemp
					onPress={() => {this._drawer.open();}}
					icon={this.props.headerIcon}
					title={this.props.headerTitle}
					back={this.props.rightMenu}
					tabs={this.props.renderTabs}
				/>
				{this.props.renderScene}
				<BannerAd
					unitId={Config.admob_id}
					size={BannerAdSize.FULL_BANNER}
					requestOptions={{
						requestNonPersonalizedAdsOnly: true,
					}}
					onAdLoaded={() => {
						console.log('Advert loaded');
					}}
					onAdFailedToLoad={error => {
						console.error('Advert failed to load: ', error);
					}}
				/>
			</Drawer>
		);
	}
}
const drawerStyles = {
	drawer: { shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 3 },
	main: { paddingLeft: 0 }
};
export default Master;