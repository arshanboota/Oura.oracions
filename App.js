import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//import { createStore } from 'redux';
import { createStore} from 'redux';
import { Provider, connect } from 'react-redux';

// Actions
const increment = () => ({
  type: 'INCREMENT',
});

const decrement = () => ({
  type: 'DECREMENT',
});

// Reducer
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Component
const Counter = ({ count, increment, decrement }) => (
  <View style={styles.container}>
    <Text style={styles.counterText}>{count}</Text>
    <Button title="Increment" onPress={increment} />
    <Button title="Decrement" onPress={decrement} />
  </View>
);

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// App
const App = () => (
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>
);

export default App;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
});

// import React, { useEffect, useState } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingStarter from './src/screens/OnboardingStarter';
// import { SCREEN } from './src/enums/AppEnums';
// import LoginOrRegister from './src/screens/LoginOrRegister';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterAs from './src/screens/RegisterAs';
// import CreateAccount from './src/screens/create_account/CreateAccount';
// import AccountDetails from './src/screens/AccountDetails';
// import BottomTabNavigation from './src/navigation/BottomTabNavigation';
// import EditProfile from './src/screens/EditProfile';
// import Varificiation from './src/screens/Varificiation';
// import VarificiationCode from './src/screens/VarificiationCode';
// const Stack = createNativeStackNavigator();
// const App = () => {
//   // const [loading, setLoading] = useState(false);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator >
//         <Stack.Screen options={{ headerShown: false }} name={SCREEN.SPLASH} component={SplashScreen} />
//         <Stack.Screen options={{ headerShown: false }} name={SCREEN.LOGIN} component={LoginScreen} />
//         <Stack.Screen options={{ headerShown: false }} name={SCREEN.ONBORDING} component={OnboardingStarter} />
//         <Stack.Screen options={{ headerShown: false }} name={SCREEN.LOGINOREGISTER} component={LoginOrRegister} />
//          <Stack.Screen options={{ headerShown: false }} name={SCREEN.REGISTER} component={RegisterAs} />
//         <Stack.Screen options={{ headerShown: false }} name={SCREEN.CREATE_ACCOUNT} component={CreateAccount} />
//         <Stack.Screen options={{ headerShown: false }} name={SCREEN.ACCOUNT_DETAILS} component={AccountDetails} />
//         <Stack.Screen options={{ headerShown: false }} name={SCREEN.TAB_NAVIGATION} component={BottomTabNavigation} />
//         <Stack.Screen options={{ headerShown: false }} name={SCREEN.EDIT_PROFILE} component={EditProfile} /> 
//         <Stack.Screen options={{ headerShown: false }} name={SCREEN.VERIFY_NUMBER} component={Varificiation} /> 
//         <Stack.Screen options={{ headerShown: false }} name={SCREEN.VERIFY_CODE} component={VarificiationCode} /> 
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;