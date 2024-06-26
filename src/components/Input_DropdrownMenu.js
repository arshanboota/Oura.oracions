import React from 'react';
import { View, TextInput, StyleSheet ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Input_DropdrownMenu = ({ iconName, placeholder, onChangeText, secureTextEntry, value, style,onPress }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
                <Icon name={iconName} size={21} color="#767676" />
            </View>
            <View style={styles.inputField}>
                <TextInput
                    style={[styles.input, style]}
                    placeholder={placeholder}
                    placeholderTextColor="#767676"
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    value={value}
                />
                <TouchableOpacity onPress={onPress}>
                <Icon name='chevron-down' size={23} color="#767676" marginRight={10}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
     
        height: 45,
        flexDirection: 'row',
        borderRadius: 15,
        flexDirection: 'row',         
        borderWidth: 1,
       
    },
    inputIcon: {
        marginLeft: 10,
        justifyContent: "center",
        marginRight:10
    },
    inputField: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        color: '#000',
        fontSize: 13,
        fontWeight: '400',
    },
});

export default Input_DropdrownMenu;
