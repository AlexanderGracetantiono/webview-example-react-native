import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { Colors, Fonts, Metrics } from '../../GlobalConfig';
import { WebView } from 'react-native-webview';

export default HomeScreen = (props) => {
    const [websiter_url, setWebsiter_url] = useState("lalalala")
   
    useEffect(() => {
       
        setWebsiter_url("https://www.youtube.com/")
    }, [])
    const namaFungsi = () => {
        //ngapain kek
        namaFungsi_2();
    }
    const namaFungsi_2 = () => {
        //ngapain kek
        console.log("lalalalal")
    }
    return (
        <View style={styles.container}>
            <WebView source={{ uri: websiter_url }} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        flexDirection: 'row'
    },
    categoryContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    categoryNameContainer: {
        width: Metrics.SCREEN_WIDTH * 0.18,
        height: Metrics.SCREEN_WIDTH * 0.18,
        backgroundColor: Colors.BLUE_DARK,
        borderRadius: 6,
        marginLeft: Metrics.SAFE_AREA,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemCategoryTextStyle: {
        fontFamily: Fonts.INTER_SEMI_BOLD,
        fontSize: 14,
        letterSpacing: 0.5,
        color: Colors.WHITE,
        textAlign: 'center'
    },
    containerItems: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    cartSalesContainer: {
        width: '40%',
        position: 'absolute',
        right: 0,
        top: Metrics.NAVBAR_HEIGHT,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartCloseOptionContainer: {
        width: 50,
        height: 50,
    },
    cartCloseOptionImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    flatListContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.WHITE
    },
    flatlistRowStyle: {
        flex: 1,
    },

})