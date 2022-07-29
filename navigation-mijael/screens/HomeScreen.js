import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();



    return (
        <View style={styles.container}>
            <StatusBar style="100%" />

            <Image
                style={{ 
                  width: '167.75pt', 
                  height: '78.78pt',   
                  marginVertical: 87
                }}
                    source={require("../assets/Grupo 7.png")}
            ></Image>

            <Text
                style={{
                    // fontSize: 30,
                    // textAlign: "center",
                    // marginTop: '20%',
                    color: '#FFFFFF'
                }}
            >
                Seleccione Ciudad
            </Text>
            <View style={styles.ciudad}>           
                <TouchableOpacity
                    onPress={() => navigation.navigate("StackScreen")}
                    style={{
                        // backgroundColor: "gray",
                        padding: 5,
                        marginTop: '10%',
                        width: '50%',
                        alignSelf: 'center',
                        borderRadius: 10,
                    }}
                >
                    <Image 
                        style={{ 
                            width: '131pt', 
                            height: '135pt',
                            resizeMode: 'contain'
                        }}
                            source={require("../assets/Grupo 111.png")}
                    ></Image>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("StackScreen")}
                    style={{
                        // backgroundColor: "gray",
                        padding: 5,
                        marginTop: '10%',
                        width: '50%',
                        alignSelf: 'center',
                        borderRadius: 10,
                    }}
                >
                    <Image 
                        style={{ 
                            width: '131pt', 
                            height: '135pt',
                            resizeMode: 'contain'
                        }}
                            source={require("../assets/Grupo 112.png")}
                    ></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
  }


const styles = StyleSheet.create({
    ciudad: {
      flex: 1,
      backgroundColor: '#1C1B1B',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'grid',
      gridTemplateColumns: '50% 50%'
    },
  
    container: {
      flex: 1,
      textAlign: 'center',
      backgroundColor: '#1C1B1B',
      alignItems: 'center',
      justifyContent: 'center'
    },
});