import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, secureTextEntry, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../components/Firebase'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import styles from './Style';
import { SCREEN } from '../../enums/AppEnums';
import { hp } from '../../enums/StyleGuide';
const CreateAccount = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [color, setcolor] = useState('white');

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    const handlePress = () => {
        setcolor('black')
    };

    const handlePress1 = () => {
        navigation.navigate(SCREEN.VERIFY_NUMBER)
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}  >
            <ImageBackground
                source={require('../../assets/images/Create_Account.png')}
                style={styles.backgroundImage}>
                <View style={{ flex: 0.41, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    
                    <Text style={{ fontSize:33, color: 'white', fontWeight: '700', left: -40 }}> Create New{"\n"} Account </Text>
                </View>
                <View style={{ flex: 0.5, margin: 25 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput placeholder="James" style={styles.textInput} ></TextInput>
                        <TextInput placeholder="Water" style={styles.textInput}></TextInput>
                    </View>
                    <View style={{ marginTop:10 }}>
                        <View style={styles.input}>
                            <Icon name="mail-outline" color="gray" size={19} marginLeft={20} margin={10} />
                            <TextInput
                                style={{ fontSize:hp(2.3)}}
                                placeholder="example@xyz.com"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>
                        <View style={styles.input}>
                            <Icon name="lock-closed-outline" color="gray" size={19} marginLeft={20} margin={10} />
                            <TextInput
                                style={{  fontSize:hp(2.3) }}
                                placeholder="*******"
                                keyboardType='phone-pad'
                                secureTextEntry={secureTextEntry}
                                // value={password}
                                // onChangeText={(text) => setPassword(text)}
                            />
                        </View>

                        <View style={styles.input}>
                            <Icon name="lock-closed-outline" color="gray" size={19} marginLeft={20} margin={10} />
                            <TextInput
                                style={{  fontSize:hp(2.3) }}
                                placeholder="*******"
                                keyboardType='phone-pad'
                                secureTextEntry={true}
                                // value={password}
                                // onChangeText={(text) => setPassword(text)}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.rowContainer}>
                        <TouchableOpacity onPress={handlePress} style={[styles.box, { backgroundColor: color }]} />
                        <Text style={styles.text}>I agree to the Aura terms of use and Privacy Policy</Text>
                    </View>
                </View>

                <CustomTouchableOpacity
                    onPress={handlePress1}
                    title="Register"
                    colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }}
                    style={{ height: 50, width: 306, borderRadius: 36, justifyContent: 'center', alignItems: 'center', margin: 10, left: 20, }} // Gradient button style
                />

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' ,marginTop:10}} onPress={() => navigation.navigate(SCREEN.LOGIN)}>
                    <Text style={{ color: 'gray', alignItems: 'center' }}>Allready have an account  </Text>
                    <Text style={{ textDecorationLine: 'underline', color:'#4F99DD', fontWeight: '700', textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>
                
            </ImageBackground>
        </KeyboardAvoidingView >
    )
}

export default CreateAccount





