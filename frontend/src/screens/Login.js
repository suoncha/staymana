// Screen
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, StatusBar } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { ScreenSize, TextStyle } from "../utils";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HostStack,
  GuestStack,
  SignUpStack,
  ForgotPasswordStack,
} from "../navigation";
import { LoginFail } from "./shared/LoginFail";

const AuthContext = React.createContext();

export function LoginHandler() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            hostRole: action.hostRole,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isSignout: false,
      userToken: null,
      hostRole: false,
    }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({
          type: "SIGN_IN",
          token: "dummy-auth-token",
          hostRole: data.hostRole,
        });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

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
    headerTitleStyle: { fontSize: ScreenSize.width * 0.06 },
    headerTintColor: "black",
    headerBackTitleVisible: false,
    title: "Quên mật khẩu",
  };

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={HeaderStyle}>
          {state.userToken == null ? (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginRole"
                component={LoginRole}
                options={{ title: "Đăng nhập" }}
              />
              <Stack.Screen
                name="LoginFail"
                component={LoginFail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordStack}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpStack}
                options={{ headerShown: false }}
              />
            </>
          ) : state.hostRole ? (
            <Stack.Screen
              name="HostStack"
              component={HostStack}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="GuestStack"
              component={GuestStack}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
    </AuthContext.Provider>
  );
}

import { Pressable, ScrollView } from "react-native";
import { InputPassword, InputText } from "../components";

function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  const [username, setUsername] = React.useState("username");
  const [password, setPassword] = React.useState("password");

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <AnimatedSplash
      isLoaded={loading}
      logoImage={require("../images/splash.png")}
      backgroundColor={"#ffffff"}
      logoHeight={ScreenSize.width * 0.8}
      logoWidth={ScreenSize.height * 0.8}
    > 
      <ScrollView style={{backgroundColor: Color.white_100}}>
      <View style={{ alignItems: "center", paddingVertical: ScreenSize.height * 0.15}}>
        <View style={{alignItems: "center",}}>
        
          <Image 
            source={require("../images/loginScreen.png")}
            style={{width: ScreenSize.width * 0.67, height: ScreenSize.width * 0.4}}
          ></Image>
          <View style={{padding: ScreenSize.height * 0.02}}></View>
          <Image 
            source={require("../images/logoTextOnly.png")}
            style={{width: ScreenSize.width * 0.68, height: ScreenSize.width * 0.12}}
          ></Image>
          
        </View>
        <InputText title="Số điện thoại" placeholder="Nhập số điện thoại" rightIcon='check-circle-outline' keyboardType="numeric"></InputText>
        <InputPassword title='Mật khẩu'></InputPassword>
        <View style={{ marginVertical: ScreenSize.height * 0.01, marginHorizontal: ScreenSize.width * 0.08, flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>

            <Text style={{...TextStyle.h3, color: Color.grey_100 }}>Nhớ mật khẩu </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={{...TextStyle.h3, color: Color.primary_100}}>Quên mật khẩu</Text>
            </Pressable>
          </View>
        </View>
        <ButtonFullWidth content='Đăng nhập' onPress={() => navigation.navigate("LoginRole", {username: username, password: password})}></ButtonFullWidth>
            
        <View style={{ marginTop: ScreenSize.height * 0.02, flexDirection: 'row' }}>
          <Text style={{...TextStyle.h3, color: Color.grey_100 }}>Chưa có tài khoản? </Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{...TextStyle.h3, color: Color.primary_100}}>Đăng ký</Text>
          </Pressable>
        </View>

      </View>

      </ScrollView>
    </AnimatedSplash>
  );
}

import { ButtonFullWidth } from '../components';
import { Color } from '../utils'
import { Divider } from "react-native-paper";

function LoginRole({ route, navigation }) {
  const { username, password } = route.params;
  const { signIn } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={{...styles.container}}>
        <Image 
          source={require("../images/logoImageOnly.png")}
          style={{width: ScreenSize.width * 0.4, height: ScreenSize.width * 0.4}}
        ></Image>
        <Image 
          source={require("../images/logoTextOnly.png")}
          style={{width: ScreenSize.width * 0.68, height: ScreenSize.width * 0.12}}
        ></Image>
      </View>
    
      <View style={{paddingBottom: ScreenSize.height * 0.1}}>
        <Divider style={{ color: Color.grey_100, height: ScreenSize.height * 0.001}} />
        <View style={{padding: ScreenSize.height * 0.04}}></View>
        <Text style={TextStyle.h3}>Bạn muốn đăng nhập với tư cách là</Text>
        <View style={{padding: ScreenSize.height * 0.012}}></View>
        <ButtonFullWidth content='Chủ trọ' onPress={() => signIn({ username, password, hostRole: true })}></ButtonFullWidth>
        <View style={{padding: ScreenSize.height * 0.015}}></View>
        <ButtonFullWidth content='Khách thuê trọ' onPress={() => signIn({ username, password, hostRole: false })}></ButtonFullWidth>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  roleSelectView: {
    flex: 1,
    backgroundColor: Color.white_100,
    alignItems: 'center',
  },

});
