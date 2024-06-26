import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, KeyboardAvoidingView, map, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native'
import CustomComponent from '../components/CustomComponent'
import LikesboxComponent from '../components/LikesboxComponent'
import CustomCircles from '../components/CustomCircles'
import { BarChart } from 'react-native-chart-kit';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { COLOR, hp } from '../enums/StyleGuide'

const Home = () => {
    const navigation = useNavigation();
    const data = [
        { key: '1', text: 'Withdrawal Availability' },
        { key: '2', text: 'Monthaly Earnings' },
        { key: '3', text: '$0' },
        { key: '4', text: '$0' },
        { key: '5', text: 'Avg. Selling Price' },
        { key: '6', text: 'Active Orders' },
        { key: '7', text: '$0' },
        { key: '8', text: '     $0($0)' },
    ];

    const data1 = {
        labels: ['1 Weak', '2 Weak', '3 Weak', '4 Weak'],
        datasets: [
            {
                data: [35, 20, 50, 30, 29, 33],

            },
        ],
    };
    const renderItem = ({ item }) => (
        <View >
            <View style={styles.column}>
                <Text style={{ fontWeight: '300' }}>{item.text}</Text>
            </View>

        </View>
    );

    const renderFlatList = (data) => {
        return (
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                numColumns={2}
                contentContainerStyle={styles.container}
            />
        );
    };

    return (
        <ScrollView style={{ flex: 1, margin: 10, marginBottom: 70 }}>
            <View style={{ flex: 1, justifyContent: 'center', margin: 10, borderBottomWidth: 2, borderBottomColor: 'lightgray' }}>
                <View style={{ justifyContent: 'space-between', width: 330, flexDirection: 'row' }}>
                    <Image
                        style={{ height: 30, width: 30, borderRadius: 30, resizeMode: 'contain' }}
                        source={require('../assets/images/notification.png')}
                    />
                    <Image
                        style={{ height: 25, width: 25, borderRadius: 30, resizeMode: 'contain' }}
                        source={require('../assets/images/notification.png')}
                    />
                </View>
                <View>

                </View>

            </View>
            <View style={styles.Container}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image
                            style={{ height: 113, width: 110, borderRadius: 30, resizeMode: 'contain' }}
                            source={require('../assets/images/user.png')}
                        />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', }}>Hazal Finch</Text>
                        <Text style={{ fontSize: 12, fontWeight: '300' }}>Flood Blogar </Text>
                        <Text style={{ fontSize: 12, fontWeight: '300', }}>San Franciso,LA United states</Text>
                        <Text style={{ fontSize: 14, fontWeight: '500', }}>Lorem Ipsumm is simply dummy{'\n'}text of printing</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                            <Icon name="create-outline" color="black" size={19} marginLeft={-23} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                    <CustomComponent
                        imagePath={require('../assets/images/iconinsta.png')}
                        title="Instagram"
                        count="12K"
                    />
                    <CustomComponent
                        imagePath={require('../assets/images/iconyoutube.png')}
                        title="Youtube"
                        count="12K"
                    />
                    <CustomComponent
                        imagePath={require('../assets/images/iconLinkedin.png')}
                        title="LinkedIn"
                        count="12K"
                    />
                </View>
            </View>
            <View style={styles.Container2}>
                <LikesboxComponent
                    text="Total Likes       "
                    imagePath={require('../assets/images/heart.png')}
                    mainText="22.3K"
                    additionalText="+23 more"
                />
                <LikesboxComponent
                    text="Total Ratings      "
                    imagePath={require('../assets/images/star1.png')}
                    mainText="1 K"
                    additionalText="+5 more"
                />
            </View>

            <View style={styles.Container3}>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: '500', }}>Earnings</Text>
                    <Text style={{ fontSize: 17, fontWeight: '500', color: "blue", position: 'absolute', right: '10%' }}>Details</Text>

                    <View style={styles.Container4}>
                   
                        {data.map((item, index) => (
                            <View style={{ width: '48%',  }} key={item.key}>
                                <View style={{ flexDirection: 'row',justifyContent:'space-between',alignContent:'center'}}>
                                    <View >
                                        {index % 2 === 0 ? (
                                            <Text style={{ fontWeight: '300',right:hp(8),}}>{item.text}</Text>
                                        ) : null}
                                    </View>
                                    <View >
                                        {index % 2 !== 0 ? (
                                            <Text style={{ fontWeight: '300',left:hp(9) ,top:-20 }}>{item.text}</Text>
                                        ) : null}
                                    </View>
                                </View>
                            </View>
                        ))}
                        <View style={{ flexDirection: 'row' }}>
                            <CustomCircles circleText="88%" outsideText="Response" borderLeftColor="green" borderRightColor="green" borderBottomColor="green" />
                            <CustomCircles circleText="47%" outsideText="Delivery" borderBottomColor="red" borderLeftColor="red" />
                            <CustomCircles circleText="79%" outsideText="Delivery" borderLeftColor="red" borderRightColor="red" borderBottomColor="red" />
                            <CustomCircles circleText="1h" outsideText="Time" borderTopColor="green" borderRightColor="green" borderBottomColor="green" />
                        </View>
                    </View>
                </View>




                <Text style={{ fontSize: 20, fontWeight: '600', padding: 10 }}>Analytics</Text>
                <View style={styles.Container5}>
                    <BarChart
                        data={data1}
                        width={300}
                        height={250}
                        yAxisLabel=""
                        fromZero={true}
                        yAxisInterval={7}
                        chartConfig={{
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            decimalPlaces: 0,
                            color: (opacity = 0.1) => `rgba(256, 0.9, 0, ${opacity})`,
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />

                </View>
            </View>
        </ScrollView>
    )
}

export default Home
const styles = StyleSheet.create({
    Container: {
        flex: 0.35,
        backgroundColor: COLOR.purpule,
        padding: 10,
        borderRadius: 10,
        marginVertical: 15

    },
    Container2: {
        flex: 0.35,
        backgroundColor: COLOR.purpule,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    Container3: {
        flex: 0.30,
        backgroundColor: COLOR.purpule,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,


    },
    Container4: {
        backgroundColor: COLOR.white,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        marginVertical: 30,
        width: '98%',
        marginLeft: '-20%',
        alignItems: 'center',

    },
    Container5: {
        backgroundColor: COLOR.purpule,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,



    },

    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 19,
    },
    column: {
        flex: 1,
        margin: -4,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },


});





