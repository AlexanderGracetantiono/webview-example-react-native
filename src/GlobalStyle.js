import {
    StyleSheet,
} from 'react-native';
import { Colors, Fonts, Metrics } from './GlobalConfig';

const GlobalStyle = StyleSheet.create({
    globalStyleEmptyComponentContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    globalTable_ContentHeaderLabelContainer: {
        paddingHorizontal: Metrics.SAFE_AREA,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor:Colors.WHITE
    },
    globalTable_TableContentHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1.5,
        borderColor: Colors.GRAY
    },
    globalTable_TableContentHeaderSubContainer: {
        width: '50%',
    },
    globalTable_TableContentLabelHeaderContainer: {
        paddingVertical: 10,
        backgroundColor: Colors.BLUE_DARK,
        paddingHorizontal: Metrics.SAFE_AREA
    },
    globalTable_TableContentLabelHeaderTextStyle: {
        fontFamily: Fonts.INTER_BOLD,
        color: Colors.WHITE,
        fontSize: 12,
        letterSpacing: 1
    },
    globalTable_TableContentBodyContainer: {
        flex: 1,
        borderBottomWidth: 1.5,
        borderColor: Colors.GRAY,
        backgroundColor:Colors.WHITE
    },
    globalTable_TableItemContainerHeaderStyle: {
        paddingHorizontal: Metrics.SAFE_AREA,
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: Colors.GRAY,
    },
    globalTable_TableItemContainerMappingContainer: {
        minHeight: 300,
        width: '100%',
        paddingHorizontal: Metrics.SAFE_AREA
    },
    globalTable_HeaderTextStyle: {
        fontFamily: Fonts.INTER_BOLD,
        color: Colors.BLUE_DARK,
        fontSize: 12,
        letterSpacing: 1.5
    }
});

export default GlobalStyle