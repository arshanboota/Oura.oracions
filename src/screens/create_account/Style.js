import { StyleSheet } from "react-native";
import { hp, width } from "../../enums/StyleGuide";
const styles = StyleSheet.create({
    input: {
        height: 45,
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: 'lightgray',
        borderWidth: 2,
        marginVertical: 13,
    },
    textInput: {
        height: 45,
        borderWidth: 1.5,
        borderRadius: 15,
        fontSize: hp(2),
        width: '48%',
        paddingLeft: 20,
        marginLeft:7,
        borderColor: 'lightgray'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '-3%',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    box: {
        width: 20,
        height: 20,
        right: 5,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'lightgray'
    },
    text: {
        fontSize: 11,
        fontWeight: '400',
        left: '15%',
    },

    backgroundImage: {
        flex: 1,

    },
});

export default styles