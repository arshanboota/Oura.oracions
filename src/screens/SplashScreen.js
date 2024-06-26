import { View, Image, ImageBackground ,StyleSheet} from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { hp ,wp,commonStyles} from '../enums/StyleGuide';
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardingStarter');
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/Splash-Background.png')}
      style={styles.ImageBackground}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../assets/images/Logo2.png')}
        />
      </View>
    </ImageBackground>
  )
}
export default SplashScreen

const styles = StyleSheet.create({
  ImageBackground:{
    flex:1,
  },

  image_container:{
  flex:1,
  ...commonStyles.center,
  } ,
  
  image:{
    height: hp(30), 
    width: wp(30),
    resizeMode: 'contain'
  }
})