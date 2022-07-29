import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

// import Navigation from './Navigation';

// import HomeScreen from "./screens/HomeScreen"
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from "./screens/SettingsScreen"
import StackScreen from "./screens/StackScreen"



const HomeStackNavigator = createBottomTabNavigator();
const Tab = createBottomTabNavigator();


function MyStack() {
  return (
    <HomeStackNavigator.Screen 
      initialRouteName="HomeScreen"
    >
      <HomeStackNavigator.Screen 
        name='HomeScreen'
        component={HomeScreen}
      />

      <HomeStackNavigator.Screen 
        name='StackScreen'
        component={StackScreen}
        options={{
          herderBackTitleVisible: false
        }}
      />

    </HomeStackNavigator.Screen>
  )
}


function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#FFF843'
        }}
    >
        <Tab.Screen 
        // style={styles.container}
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="home" color="black" size={20} />
                ),
                tabBarBadge: '9',
                headerShown: false
            }}
        />
        {/* <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Rutinas',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="earth" size={24} color="black" />
              ),
          }}
        /> */}

        <Tab.Screen 
            name="StackScreen" 
            component={StackScreen}
            options={{
              tabBarLabel: 'Stack',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="earth" size={20} color="black" />
              ),
              headerShown: false
          }}
        />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
          <MyTabs />
          <MyStack />
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     textAlign: 'center',
//     backgroundColor: '#1C1B1B',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });