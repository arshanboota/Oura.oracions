import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CountryPicker } from "react-native-country-codes-picker";
import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
import Icon from 'react-native-vector-icons/Ionicons';
import { FONT } from '../enums/StyleGuide';
import { SCREEN } from '../enums/AppEnums';
const Varificiation = () => {
    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handlePress1 = () => {
        navigation.navigate(SCREEN.VERIFY_CODE)
    };

    return (
        <ImageBackground
            source={require('../assets/images/Varification.png')}
            style={styles.backgroundImage}

        >
            <KeyboardAvoidingView style={{ flex: 1, padding: 25 }}>
                <View style={{ flex: 0.45 }}>
                    <Text style={{ fontSize: 33, color: 'white', fontWeight: '500', margin: 20 }}>Verify Your{"\n"}Number </Text>
                </View>
                <View style={{ margin: 5 }}>
                    <Text style={{ fontSize: 14, marginVertical: 15 }}>Enter your phone number for Varification.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => setShow(true)}
                            style={{
                                width: '20%',
                                height: 40,
                                borderWidth: 1,
                                borderRadius: 15

                            }}
                        >
                            <View style={{ padding:5 }}>
                                {countryCode ? (
                                    <Text style={{ fontSize: 16, padding: 5 }}>{countryCode}</Text>
                                ) : (
                                    <Icon name="chevron-down" size={20} color="black" />
                                )}
                            </View>

                        </TouchableOpacity>

                        <View >
                            <CountryPicker
                                show={show}
                                pickerButtonOnPress={(item) => {
                                    setCountryCode(item.dial_code);
                                    setShow(false);
                                }}
                            />
                        </View>

                        <TextInput placeholder="00000000000" keyboardType='phone-pad' style={{ height: 40, borderWidth: 1, borderRadius: 15, left: 15,  fontSize: 19, fontSize: 16, width: '76%', paddingLeft: 20 }}   ></TextInput>
                    </View>
                    <CustomTouchableOpacity
                        onPress={handlePress1}
                        title="Verify"
                        colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }}
                        style={{ height: 50, width: 306, borderRadius: 36, justifyContent: 'center', alignItems: 'center', top: '70%' }} // Gradient button style
                    />
                </View>
            </KeyboardAvoidingView >
        </ImageBackground>
    )
}

export default Varificiation

const styles = StyleSheet.create({
    input: {
        height: 45,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        marginVertical: 10,

    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 29,
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
    },
    text: {
        fontSize: 13,
        fontWeight: '500',
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',

    },
});





