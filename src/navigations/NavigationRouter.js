import React, { Component } from 'react'
import { Scene, Router, Actions, Stack, Drawer } from 'react-native-router-flux'
import {
    Easing,
    Alert,
    BackHandler,
    StyleSheet,
    Platform
} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
// screens identified by the router
import DrawerContent from '../drawer/DrawerContent'
import SplashScreen from '../container/SplashScreen/SplashScreen'
import HomeScreen from '../container/HomeScreen/HomeScreen'
import { Colors } from '../GlobalConfig';

class NavigationRouter extends Component {
    showExitAlert() {
        Alert.alert(
            'Keluar Aplikasi',
            'Apakah Anda yakin untuk keluar aplikasi?',
            [
                {
                    text: 'Tidak',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Ya', onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false },
        );
    }

    handleback = () => {
        let screen = Actions.currentScene;
        switch (screen) {
            case 'home':
                this.showExitAlert()
                // BackHandler.exitApp()
                return true;
            case 'login':
                this.showExitAlert()
                // BackHandler.exitApp()
                return true;
            case 'splash':
                BackHandler.exitApp()
                return true;
            default:
                Actions.pop()
                return true;
        }
    }

    render() {
        const MyTransitionSpec = ({
            duration: 250,
            easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
            // timing: Animated.timing,
        });
        const backButtonNormal = () => (
            <TouchableOpacity onPress={this.handleback} style={{ height: 50, width: 25, justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
                <FontAwesome
                    size={16}
                    name={"chevron-left"}
                    color={Colors.GRAY}
                />
            </TouchableOpacity>
        )
        const transitionConfig = () => ({
            transitionSpec: MyTransitionSpec,
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;
                const width = layout.initWidth;

                // right to left by replacing bottom scene
                return {
                    transform: [{
                        translateX: position.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [width, 0, -width],
                        }),
                    }]
                };
            }
        });

        return (
            <Router
                navigationBarStyle={{ backgroundColor: Colors.BLUE_DARK }}
                backAndroidHandler={this.handleback}>
                <Drawer
                    hideNavBar
                    key="drawerMenu"
                    drawerWidth={300}
                    drawerIcon={<FontAwesome
                        size={25}
                        name={"bars"}
                        color={Colors.WHITE}
                    />}
                    contentComponent={DrawerContent}
                    renderBackButton={backButtonNormal}>
                    <Stack
                        transitionConfig={transitionConfig}
                        key='root'>
                        <Scene
                            initial
                            key='splash'
                            hideNavBar
                            component={SplashScreen} />
                        <Scene
                            key='home'
                            hideNavBar
                            component={HomeScreen} />
                       
                    </Stack>
                </Drawer>
            </Router >
        )
    }
}

const styles = StyleSheet.create({
    // headerTitle: Platform.OS == 'android' ? {
    //     marginLeft: 0,
    //     color: Colors.WHITE,
    //     fontSize: 16,
    //     fontFamily: Fonts.INTER_REGULAR,
    //     letterSpacing: 0.7
    // } : {
    //         color: Colors.WHITE,
    //         fontSize: 16,
    //         fontFamily: Fonts.INTER_REGULAR,
    //         letterSpacing: 0.7
    //     },
    // headerTitleBig: {
    //     color: Colors.WHITE,
    //     fontFamily: Fonts.INTER_REGULAR,
    //     fontSize: 20,
    //     letterSpacing: 0.7
    // },
    // headerTitleBigNoLeft: Platform.OS == 'android' ? {
    //     marginLeft: 0,
    //     color: Colors.WHITE,
    //     fontFamily: Fonts.INTER_REGULAR,
    //     fontSize: 20,
    //     letterSpacing: 0.7
    // } : {
    //         color: Colors.WHITE,
    //         fontFamily: Fonts.INTER_REGULAR,
    //         fontSize: 20,
    //         letterSpacing: 0.7
    //     }
})

export default NavigationRouter