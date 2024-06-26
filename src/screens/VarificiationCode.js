import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../enums/AppEnums';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
const VarificiationCode = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handlePress1 = () => {
        navigation.navigate(SCREEN.LOGIN)
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

                <View style={{ flex: 0.5, }}>
                    <Text style={{ fontSize: 13, fontWeight: '500' }}>     Enter your phone number for Varification.</Text>
                    <View style={{ flexDirection: 'row', top: 30 }}>
                        <TextInput placeholder="" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '15%', marginLeft: 15 }}   ></TextInput>
                        <TextInput placeholder="" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '15%', marginLeft: 15 }}   ></TextInput>
                        <TextInput placeholder="" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '15%', marginLeft: 15 }}   ></TextInput>
                        <TextInput placeholder="" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '15%', marginLeft: 15 }}   ></TextInput>
                        <TextInput placeholder="" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '15%', marginLeft: 15 }}   ></TextInput>
                    </View>
                </View>
               
                <CustomTouchableOpacity
                    onPress={handlePress1}
                    title="Verify"
                    colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }}
                    style={{ height: 50, width: 300, borderRadius: 36, justifyContent: 'center', alignItems: 'center', margin: 10,bottom:160 }} // Gradient button style
                />
            </KeyboardAvoidingView >
        </ImageBackground>
    )
}

export default VarificiationCode

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





