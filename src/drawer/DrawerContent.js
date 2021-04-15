import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Animated,
} from "react-native";
import { Colors, Images, Fonts, Metrics } from '../GlobalConfig';
import DrawerContentMenu from "./DrawerContentMenu";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalLanguage from "../GlobalLanguage";

export default DrawerContent = (props) => {
    const { activeLanguage = "ID" } = props
    const [menuList, setMenuList] = useState([])
    const [user_data, setUser_data] = useState({})
    const [isLoadingUserData, setIsLoadingUserData] = useState(false)
    const [isDrawerVisible, setIsDrawerVisible] = useState(true)
    useEffect(() => {
        setUser_data({
            user_id: 0,
            user_name: "null",
            company_code: "null"
        })
        setIsLoadingUserData(false)
        setIsDrawerVisible(true)
        setMenuList([
            {
                id: "1",
                name: "Riwayat Sales",
                icon: "file",
                action: "listreceipt",
            },
            {
                id: "2",
                name: "Riwayat Pengiriman",
                icon: "truck",
                action: "listdelivery",
            },
            {
                id: "3",
                name: "Riwayat Pembayaran",
                icon: "tags",
                action: "listpayment",
            },
            {
                id: "4",
                name: "Daftar Pelanggan",
                icon: "user",
                action: "customerlist",
            },
            {
                id: "6",
                name: "Logout",
                icon: "sign-out",
                action: "logout",
            },

        ])
    }, [])
    return (
        <View style={styles.container}>
            {!isDrawerVisible ?
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Image source={Images.LOGO} style={styles.itemImageStyle} />
                    </View>
                    <View style={styles.titleDescContainer}>
                        <Text style={styles.titleDescTextStyle}>{GlobalLanguage[activeLanguage].TEXT_TITLE_DESC}</Text>
                        <Text style={styles.descriptionTextStyle}>{GlobalLanguage[activeLanguage].TEXT_DESCRIPTION}</Text>
                    </View>
                </View> :
                <View style={styles.container}>
                    <FlatList
                        data={menuList}
                        extraData={[menuList]}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.drawerContentContainer}>
                                    <DrawerContentMenu
                                        label={item.name}
                                        icon={item.icon}
                                        action={item.action}
                                    />
                                </View>
                            )
                        }}
                        keyExtractor={(item, index) => {
                            return String(item.id)
                        }}
                    />
                    <View style={{ flex: 1 }} />
                    <View style={styles.footerBottomContainer}>
                        <Text style={styles.footerTextStyle}>Version 1.0</Text>
                    </View>
                </View>}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    titleDescContainer: {
        marginTop: '20%',
        width: '100%',
        paddingHorizontal: '7%',
    },
    titleDescTextStyle: {
        color: Colors.BLUE_DARK,
        fontSize: 25,
        fontFamily: Fonts.INTER_BOLD,
        textAlign: 'left',
        marginBottom: 30,
        letterSpacing: 2,
    },
    descriptionTextStyle: {
        color: Colors.BLUE_DARK,
        fontSize: 12,
        fontFamily: Fonts.INTER_MEDIUM,
        textAlign: 'left',
        letterSpacing: 1
    },
    headerContainer: {
        width: '100%',
        height: 100,
        paddingTop: 10,
        backgroundColor: Colors.BLUE_DARK,
        justifyContent: "center",
        paddingHorizontal: Metrics.SAFE_AREA
    },
    userIconContainer: {
        height: 45,
        width: 45,
        backgroundColor: 'red',
        borderRadius: 100,
        marginVertical: 15,
        overflow: 'hidden'
    },
    itemImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    userDetailContainer: {
        width: '100%',
        height: 50,

    },
    userNameTextStyle: {
        fontSize: 14,
        fontFamily: Fonts.INTER_SEMI_BOLD,
        color: Colors.GRAY_LIGHT,
        letterSpacing: 0.5,
        marginBottom: 5,
    },
    userCompanyNameStyle: {
        fontSize: 12,
        fontFamily: Fonts.INTER_SEMI_BOLD,
        color: Colors.GRAY,
        letterSpacing: 0.5
    },
    headerLogoStyle: {
        flex: 1,
        width: "100%",
        height: "auto",
        resizeMode: "contain",
        // backgroundColor:'red'
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: Metrics.SAFE_AREA
    },
    drawerContentContainer: {
        paddingHorizontal: Metrics.SAFE_AREA
    },
    footerBottomContainer: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerTextStyle: {
        fontFamily: Fonts.INTER_SEMI_BOLD,
        color: Colors.GRAY,
        fontSize: 12,
    }
})