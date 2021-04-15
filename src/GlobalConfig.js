import { Dimensions, Platform } from "react-native"

export const Fonts = {
    APEX_BOLD: 'ApexNew-Bold',
    APEX_REGULAR: 'ApexNew-Book',
    APEX_MEDIUM: 'ApexNew-Medium',
    MINION_REGULAR: 'MinionPro-Regular',
    INTER_BOLD: "Inter-Bold",
    INTER_LIGHT: "Inter-Light",
    INTER_MEDIUM: "Inter-Medium",
    INTER_REGULAR: "Inter-Regular",
    INTER_SEMI_BOLD: "Inter-SemiBold",
    // APEX_BOLD: 'R',
    // APEX_REGULAR: 'ApexNew-Book',
    // APEX_MEDIUM: 'ApexNew-Medium',
    // MINION_REGULAR: 'MinionPro-Regular'
}
export const SafeAreaPadding = {
    contentHorizontalPadding: 15,
    contentVerticalPadding: 15,
}
export const Colors = {
    BLUE_DARK: "#14274e",
    BLUE_DARK_LIGHT: "#394867",
    WHITE_LIGHT_GRAY: "#f1f6f9",

    RED_DARK: "#5e0003",
    RED: '#910005',
    GREEN: '#3A8048',
    BLACK: '#000000',
    GRAY: '#a7a9ab',
    GRAY_LIGHT: '#efefef',
    WHITE: '#ffffff',
    BLUE: '#0691ce'
}

export const PropertyColors = {
    SUCCESS_COLOR: Colors.GREEN,
    WARNING_COLOR: Colors.BLACK,
    ERROR_COLOR: Colors.RED
}

export const Metrics = Object.freeze({
    SAFE_AREA: 16,
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,
    NAVBAR_HEIGHT: 56
})

export const WarningMessage = {
    ErrorMessage: 'Koneksi tidak tersedia'
}

export const StorageKeys = {
    sellerToken: 'seller_token',
    sellerData: 'seller_data',
}

export const Images = {
    LOGO: require("./assets/images/logo.png"),
}

export const ArrayOfPhonePrefix = [
    {
        countryName: 'Indonesia',
        prefix: '+62'
    },
    {
        countryName: 'China',
        prefix: '+86'
    },
]

export const ArrayOfLanguage = [
    {
        languageName: 'Bahasa Indonesia',
        code: 'ID'
    },
    {
        languageName: 'English',
        code: 'EN'
    },
]


export const Version = Platform.OS == 'android' ? '1.6.0' : '1.2.0'
export const StoreURL = Platform.OS == 'android' ? 'https://play.google.com/store/apps/details?id=com.cekori' : 'https://apps.apple.com/us/app/cekori/id1478556984'