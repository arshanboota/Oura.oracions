import {CountryPicker} from "react-native-country-codes-picker";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native'

import React, { useState } from 'react'
export default function Plus() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  return (
    <View style={{flex:1}}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
            width: '80%',
            height: 60,
            backgroundColor: 'black',
            padding: 10,
        }}
      >
        <Text style={{
            color: 'white',
            fontSize: 20
        }}>
            {countryCode}
        </Text>
      </TouchableOpacity>
      <CountryPicker
        show={show}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </View>
  );
}