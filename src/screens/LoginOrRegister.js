import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, wp, commonStyles, hp } from '../enums/StyleGuide';
import { SCREEN } from '../enums/AppEnums';
const LoginOrRegister = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate(SCREEN.LOGIN)
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterAs')
  };
  return (
    
    <ImageBackground
      source={require('../assets/images/Landing_Screen4.png')}
      style={styles.backgroundImage}
      resizeMode='stretch'
    >
      <View style={styles.container}>
        <Text style={{ color: COLOR.white, fontSize: wp('7') }}> Oura</Text>
      </View>
      <View style={styles.Buttoncontainer}>
        <TouchableOpacity onPress={handleLoginPress}>
          <LinearGradient
            colors={['#6A50B2', '#4F99DD']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
            style={styles.button}
          >
            <Text style={{ color: 'white', fontSize: 14 }}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <CustomTouchableOpacity
          onPress={handleRegisterPress}
          title="Register"
          colors={['#6A50B2', '#4F99DD']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    width: Dimensions.get('window').width * 1.2,
    height: Dimensions.get('window').height * 1.,
    marginLeft:-25
  },
  container: {
    flex: 1,
    position: 'absolute',
   left:hp(40),
    padding: 20,

  },
  Buttoncontainer: {
    padding: 28,
    marginLeft:20,
    marginTop: '130%',
  },
  button: {
    height:hp(6.5),
    width:wp(85),
    borderRadius:hp(4),
    marginVertical: hp(1),
    ...commonStyles.center,
    
  }
});

export default LoginOrRegister;