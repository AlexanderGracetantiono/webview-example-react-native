import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Colors, Fonts, } from '../GlobalConfig';
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default DrawerContentMenu = (props) => {
    const { activeLanguage, label, icon } = props
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(false)
    }, [])
    const handleMenuOnClick = () => {
        setIsLoading(true)
        // let strkey = props.action + ""
        // if (strkey == "logout") {
        //     getUserData()
        //         .then((res) => {
        //             const formdata = new FormData();
        //             formdata.append('company_code', res.company_code)
        //             formdata.append('user_id', res.user_id)
        //             modelAuthentication.sellerLogout(formdata, res => {
        //                 const { status, result } = res
        //                 console.log("DATA RES:", result)
        //                 Actions.login()
        //                 wait(200).then(() => {
        //                     setIsLoading(false)
        //                 })
        //             })
        //         })
        //         .catch(err => {
        //             Actions.login()
        //             wait(200).then(() => {
        //                 setIsLoading(false)
        //             })
        //         })
        // } else {
        //     Actions.jump(props.action)
        // }
    }

    return (
        <View>
            <TouchableOpacity
                disabled={isLoading}
                onPress={handleMenuOnClick}
                style={[styles.container,isLoading&&{backgroundColor:Colors.GRAY_LIGHT}]}>
                <View style={styles.iconContainerStyle}>
                    <FontAwesome
                        size={25}
                        name={icon}
                        color={Colors.BLUE_DARK}
                    />
                </View>
                <View style={styles.textContaienrStyle}>
                    <Text style={styles.menuTitleStyle}>{label}</Text>
                </View>
                <View style={[styles.iconContainerStyle, { alignItems: 'flex-end' }]}>
                    <FontAwesome
                        size={16}
                        name={"chevron-right"}
                        color={Colors.GRAY}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: Colors.GRAY
    },
    menuTitleStyle: {
        fontSize: 14,
        fontFamily: Fonts.INTER_MEDIUM,
        color: Colors.BLUE_DARK
    },
    iconContainerStyle: {
        width: 45,
        height: 30,
        justifyContent: 'center'
    },
    textContaienrStyle: {
        flex: 1,
        height: 30,
        justifyContent: 'center'
    }
})