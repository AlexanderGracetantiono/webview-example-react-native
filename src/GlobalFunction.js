// import AsyncStorage from '@react-native-community/async-storage';
import { Linking } from 'react-native';
import { StorageKeys } from './GlobalConfig';
/**
 * Run the function after x ms
 * @param {milisec} ms 
 */
export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
export function getResponseAPI(err_code) {
    let str_message =""
    switch (err_code) {
        case "E05":
            break;
        case "E06":
            break;
        case "E07":
            break;
        case "E_INVALID_API_KEY_1":
            str_message="Invalid Token"
            break;
        default:
            str_message="There's an error in the system"
            break;
    }
    return str_message
}

/**
 * Check the formatting of string
 * @param {String} param 
 */
export function isEmail(param) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return reg.test(param)
}
export const openAppSetting = () => {
    Linking.openSettings()
}
/**
 * Check the formatting of password
 * @param {String} param 
 */
export function isStrongPassword(param) {
    let reg = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
    return reg.test(param)
}
export const currencyFormat = (value, currency = "") => {
    if (value) {
        var parts = String(value).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var resultJoin = currency + " " + parts.join(".")
        return resultJoin;
    }
    else return '0'
}
/**
 * Return the user_data Local Storage :
 * token_type,
 * expires_in,
 * access_token,
 * refresh_token,
 * user_data
 * @param {milisec} ms 
 */
// export function getUserData() {
//     return new Promise((resolve, reject) => {
//         try {
//             AsyncStorage.getItem(StorageKeys.sellerData, (err, res) => {
//                 if (res) resolve(JSON.parse(res))
//                 else reject(err)
//             })
//         } catch (e) {
//             reject(e)
//         }
//     })
// }