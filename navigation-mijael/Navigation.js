import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from "@react-navigation/native"

// screens
import HomeScreen from "./screens/HomeScreen";
// import SettingsScreen from "./screens/SettingsScreen";

const HomeStackNavigator = createBottomTabNavigator();
const Tab = createBottomTabNavigator();


function MyStack() {
    return (
      <HomeStackNavigator.Navigator 
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
  
      </HomeStackNavigator.Navigator>
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
        style={styles.container}
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="home" color="#FFF843" size={24} />
                ),
                tabBarBadge: '9',
            }}
        />
        {/* <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Rutinas',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="earth" size={24} color="#FFF843" />
              ),
          }}
        /> */}
    </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
            <MyStack />
        </NavigationContainer>
    );
}