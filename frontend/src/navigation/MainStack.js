// Screen
import React from "react";
import {Image} from "react-native";
import {ScreenSize} from "../utils";
// Navigation
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {ForgotPasswordStack, GuestStack, HostStack, SignUpStack,} from './'
import {LoginFail, LoginRole, LoginScreen} from '../screens'

export function MainStack() {
    const Stack = createStackNavigator();

    const backButtonImg = () => {
        return (
            <Image
                source={require("../images/backButton.png")}
                style={{
                    height: ScreenSize.width * 0.1,
                    width: ScreenSize.width * 0.1,
                    marginLeft: ScreenSize.width * 0.06,
                }}
            />
        );
    };

    const HeaderStyle = {
        headerBackImage: backButtonImg,
        headerStyle: {
            backgroundColor: "white",
            height: ScreenSize.height * 0.156,
        },
        headerTitleStyle: {fontSize: ScreenSize.width * 0.06},
        headerTintColor: "black",
        headerBackTitleVisible: false,
        title: "Quên mật khẩu",
    };
    
    return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={HeaderStyle} initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="LoginRole"
                        component={LoginRole}
                        options={{title: "Đăng nhập"}}
                    />
                    <Stack.Screen
                        name="LoginFail"
                        component={LoginFail}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPasswordStack}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUpStack}
                        options={{headerShown: false}}
                    />           
                    <Stack.Screen
                        name="HostStack"
                        component={HostStack}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="GuestStack"
                        component={GuestStack}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            
    );
}
