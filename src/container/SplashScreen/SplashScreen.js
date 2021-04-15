import React, { useEffect, useState } from 'react';
import {
	View,
	Image,
	StyleSheet
} from 'react-native';
import { Colors, Images } from '../../GlobalConfig';
import { Actions } from 'react-native-router-flux';
import { wait } from '../../GlobalFunction';

export default SplashScreen = (props) => {
	useEffect(() => {
		wait(2000)
			.then(() => {
				Actions.home()

				// AsyncStorage.getItem(StorageKeys.sellerData, (err, res) => {
				// 	if (res) {
				// 	}
				// 	else Actions.login()
				// })
			})
	}, [])

	return (
		<View style={styles.splashContainerStyle}>
			<Image resizeMethod="resize" fadeDuration={0} source={Images.LOGO} style={styles.splashLogoStyle} />
		</View>
	);
}
const styles = StyleSheet.create({
	splashContainerStyle: {
		flex: 1,
		backgroundColor: Colors.BLUE_DARK,
		alignItems: "center",
		justifyContent: "center"
	},
	splashLogoStyle: {
		flex: 0.7,
		width: "50%",
		height: "auto",
		resizeMode: "contain"
	}
})