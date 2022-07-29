import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";


export default function StackScreen() {

    const navigation = useNavigation();

    return (
        <View>
{/* FONDO */}
            <ImageBackground
                style={ styles.fondo }
                source={require('../assets/Enmascarar grupo 7.png')}
                resizeMode='cover'
            >
                <StatusBar style= '100%' />
{/* LOGO */}
            <Image
                style={{ 
                  width: '167.75pt', 
                  height: '78.78pt',   
                  marginVertical: 87
                }}
                    source={require("../assets/Grupo 7.png")}
            ></Image>

                <View style={styles.container}> 

                    <View 
                        style={ styles.login }
                    >
                        <Text
                            style={{
                                textAlign: 'left',
                                fontSize: '16pt',
                                color: '#FFFFFF',
                            }}
                        >
                            Nombre de Usuario
                        </Text>
                        <TextInput
                            style={{
                                fontSize: '16pt',
                                borderRadius: '8pt',
                                width: '249pt',
                                height:'54pt',
                                borderWidth: 1,
                                borderColor: '#FFF843',
                                color: 'white',
                            }}
                        />

                        <Text
                            style={{
                                textAlign: 'left',
                                fontSize: '16pt',
                                color: '#FFFFFF',
                            }}
                        >
                            Password
                        </Text>
                        <TextInput
// PARA OCULTAR LA CONTRASEÑA
                            password={true}
                            secureTextEntry={true}

                            style={{
                                fontSize: '16pt',
                                borderRadius: '8pt',
                                width: '249pt',
                                height:'54pt',
                                borderWidth: 1,
                                borderColor: '#FFF843',
                                color: 'white',
                            }}
                        />
                    </View>

                    <TouchableOpacity
// BOTON DE INGRESAR
                        onPress={() => navigation.navigate("StackScreen")}
                        style={{
                            backgroundColor: "#FFF843",
                            padding: 5,
                            marginTop: '10%',
                            width: '251pt',
                            height: '50pt',
                            alignSelf: 'center',
                            borderRadius: '8pt',
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: '25pt',
                                color: '#000000',
                            }}
                        >
                            INGRESAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
  }



  const styles = StyleSheet.create({
    fondo: {
        justifyContent: 'center',
        width:'100vw',
        height:'100vh',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#1C1B1B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        padding: '20pt',
        justifyContent: 'left',
        alignItems: 'left',
        textAlign: 'left',
    }
  });