import React from 'react';
import {LoginView, StartView, RegisterView, HomeView} from '../view/page';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const MyRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{headerShown: false}}
          // options={{ title: 'Selamat Datang' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{title: 'Selamat Datang'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyRoute;
