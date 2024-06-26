import React, { useState, useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Text, TouchableOpacity, ImageBackground, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR,width,height,wp, hp } from '../enums/StyleGuide';
const OnboardingStarter = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideContent, setSlideContent] = useState([
        {
            heading: 'Lorem Ipsum',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
            ImageBackground: require('../assets/images/Landing_Screen.png'),
        },
        {
            heading: 'Lorem Ipsum ',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
            ImageBackground: require('../assets/images/Landing_Screen2.png'),
        },
        {
            heading: 'Lorem Ipsum ',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
            ImageBackground: require('../assets/images/Landing_Screen3.png'),
        },
    ]);

   
    const navigation = useNavigation();
    const scrollViewRef = useRef();
    const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffset / Dimensions.get('window').width);
        setActiveIndex(currentIndex);
    };

    const renderDots = () => {
        return slideContent.map((_, index) => (
            <View key={index}>
                <TouchableOpacity
                    onPress={() => scrollToIndex(index)}
                    style={[
                        styles.dot,
                        {
                            width: hp(5),
                            backgroundColor: index === activeIndex ? '#D3D3D3' : 'gray',
                            justifyContent: 'flex-start',
                        },
                    ]}
                />
            </View>
        ));
    };
    

    const scrollToIndex = (index) => {
        scrollViewRef.current.scrollTo({ x: index * width, animated: true });
    };

    const handleNext = () => {
        const nextIndex = activeIndex + 1;
        if (nextIndex < slideContent.length) {
            scrollToIndex(nextIndex);
            setActiveIndex(nextIndex);
        } else if (nextIndex === slideContent.length) {
            navigation.navigate('LoginOrRegister');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={300}
                style={styles.scrollView}
            >
                {slideContent.map((slide, index) => (
                    <View key={index} style={styles.slide}>
                        {slide.ImageBackground && (
                            <ImageBackground
                                source={slide.ImageBackground}
                                style={{
                                    flex: 1, width: width,height:height,
                                }}
                                resizeMode="cover"
                            />
                        )}
                        <View style={{position:'absolute',right:0,padding:10}}> 
                            <Text style={{color:COLOR.white,fontSize:wp('7')}}>Oura  </Text>
                        </View>
                        <View style={styles.Container}>
                            <View style={styles.dotsContainer}>{renderDots()}</View>
                            <View style={styles.textContainer}>
                                <Text style={styles.heading}>{slide.heading}</Text>
                                <Text style={styles.slideText}>{slide.text}</Text>
                            </View>
                            <View style={styles.mainContainer}>
                                <LinearGradient colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }} style={styles.linearGradient}>
                                    <TouchableOpacity onPress={handleNext} style={{ alignItems:'center', padding: 10 }}>
                                        <Text style={styles.text}> Next</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                ))}

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    slide: {
        width:width,
        alignItems: 'center',
        height:height * 0.99,
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    textContainer: {
        padding:hp(2),
    },
    Container: {
        flex:1,      
      justifyContent:'flex-end'
    },
    dotsContainer: {
        flexDirection: 'row',
    },
    dot: {
        height: 5,
        marginHorizontal:2 ,
        left:hp(1.5),
    },
    heading: {
        color:COLOR.white,
        fontSize:wp(5.4),
        fontWeight: '400',
    },
    slideText: {
        textAlign: 'justify',
        color:COLOR.white,
        fontSize: wp(4.4),
        fontWeight: '300',
        paddingRight: hp(2)

    },
    Imagcontainer: {
        width: width,
        height:height,
    },
    linearGradient: {
        borderWidth: 1,
        borderRadius:hp(1),
        borderColor:'#6A50B2',
        left:4,
        width: width / 1.09,
        height: height/ 15,
    },
    slideImage: {
        width: width,
        height:height * 7.24,
    },
    text:{
        fontSize:hp(2), 
        color: 'white',
         justifyContent: 'center', 
         marginLeft:hp(1.5),
    },
});

export default OnboardingStarter;