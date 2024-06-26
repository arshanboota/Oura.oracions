import { Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const COLOR = {
    white: '#ffffff',
    black: '#000000',
    light_purpule: '#EAEDFF',
    purpule: '#DED3FF',
    dark_blue: '#5A6FD9',
    yellow: '#FFC000',
    fb_blue: '#1877F2',
    border_button: '#D0D5DD',
    lineColor: '#B0B0B0',
    grey: "#EDEDED",
    neutral_grey: "rgba(245,245,245,1)",
    neutral_grey_2: "#757575",
    service_name: "#545454",
    placeholder_color: "#7E7E7E",
    horizantal_line: "#E3E3E3",
    modal_background_color: "rgba(0,0,0,0.4)",
    red: '#DC2804',
    green: '#07794C',
    light_red: '#F2ADA5',
    light_green: '#89CCA9',
    light_grey: '#B0B0B0',
    black33: "#333333",
    black26: "#262626",
    danger: "#B32306",
    success: "#07794C",
    dangerLight: '#FDF3F2',
    dark_green: "#07794C",
    tabBarInavtive: "#262626",
    _757575: "#757575",
    EDEDED: "#EDEDED",
    E3E3E3: "#E3E3E3",
    _232323: "#232323",
    _545454: "#545454",
    _FFF5D6: "#FFF5D6",
    DC2804: "#DC2804",
    DF3F2: "#FDF3F2",
    FFE69B: '#FFE69B',
    FFF7E1: '#FFF7E1',

};

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const FONT = {
    PoppinsRegular: 'Poppins-Regular',
    PoppinsBold: 'Poppins-Bold',
    PoppinsExtraBold: 'Poppins-ExtraBold',
    PoppinsLight: 'Poppins-Light',
    PoppinsSemiBold: 'Poppins-SemiBold',
    PoppinsThin: 'Poppins-Thin',
    PoppinsMedium: 'Poppins-Medium',
    PoppinsBlack: 'Poppins-Black',
}

const TEXT_STYLE = {
    text_regular: {
        fontStyle: "normal",
        fontSize: 14,
        fontFamily: FONT.Satoshi_Medium
    },
    text_bold: {
        fontStyle: "normal",
        fontSize: 14,
        fontFamily: FONT.Satoshi_Bold
    },

    title_regular: {
        fontStyle: "normal",
        fontSize: 24,
        fontFamily: FONT.Satoshi_Medium
    },

    title_bold: {
        fontStyle: "normal",
        fontSize: 24,
        fontFamily: FONT.Satoshi_Bold
    },

    button_regular: {
        fontStyle: "normal",
        fontSize: 16,
        fontFamily: FONT.Satoshi_Medium
    },
}

const Images = {
    login_screen_background: require('../assets/images/Login.png'),
    facebook: require('../assets/images/ff.png'),
    google: require('../assets/images/g.png'),
    apple: require('../assets/images/apple.png'),

};
const commonStyles = {
    horizontalView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    horizontalView_m1: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: hp(1),
    },
    justifyView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    justifyView_m1: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(1),
    },
    justifyView_m2: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(2),
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow_5: {
        elevation: 5,
        shadowColor: COLOR.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    shadow_3: {
        elevation: 3,
        shadowColor: COLOR.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    shadow_10: {
        elevation: 10,
        shadowColor: COLOR.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    noPadding: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingStart: 0,
        paddingEnd: 0,
    },
    noMargin: {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        marginStart: 0,
        marginEnd: 0,
    },
    whiteButton: {
        height: hp(5.58),
        backgroundColor: COLOR.white,
        borderWidth: 2,
        borderColor: COLOR.orange,
    },
}
const setBorderRadius = radiusVal=>{
return
}
export {
    FONT, COLOR, TEXT_STYLE, width, height, wp, hp, Images, commonStyles
};
