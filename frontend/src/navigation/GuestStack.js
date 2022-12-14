import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenSize } from "../utils";

import { GuestNotification } from "../screens";
import { GuestNavBar } from "./GuestNavBar";

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
  headerTitleAlign: 'center',
};

export const GuestStack = () => {
  return (
    <Stack.Navigator screenOptions={HeaderStyle} initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={GuestNavBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GuestNotification"
        component={GuestNotification}
        options={{ title: "Thông báo" }}
      />
    </Stack.Navigator>
  );
};
