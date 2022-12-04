import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { ScreenSize } from '../utils';

import { CreateHouse, CreateRoom, CreateBill, AddGuest, GuestDetail } from "../screens"
import { HostList, ViewGuest, ViewHouse, ViewRoom } from "../screens"
import { HostInfo } from "../screens"
import { HostNavBar } from './NavBar';

const Stack = createStackNavigator();
const ViewStack = createStackNavigator();

const backButtonImg = () => {
  return (
    <Image 
      source={require('../images/backButton.png')}
      style={{
        height: ScreenSize.width * 0.1,
        width: ScreenSize.width * 0.1,
        marginLeft: ScreenSize.width * 0.06,
      }}
    />
  )
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'HostHome':
      return 'Feed';
    case 'HostProfile':
      return 'Trang cá nhân';
    case 'HostChat':
      return 'Tin nhắn';
  }
}

function renderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  if (routeName == 'HostViewStack') return false;
  return true;
}

export const HostViewStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerBackImage: backButtonImg,
      headerStyle: {
        backgroundColor: "white",
        height: ScreenSize.height * 0.156
      },
      headerTitleStyle: {fontSize: ScreenSize.width * 0.06},
      headerTintColor: "black",
      headerBackTitleVisible: false
    }}
    initialRouteName="HostList"
  >
    <Stack.Screen name="HostList" component={HostList} options={{ title: 'Nhà trọ của bạn' }}/>
    <Stack.Screen name="ViewHouse" component={ViewHouse} options={({ route }) => ({ title: route.params.name })}/>
    <Stack.Screen name="ViewRoom" component={ViewRoom} options={({ route }) => ({ title: route.params.name })}/>
    <Stack.Screen name="ViewGuest" component={ViewGuest} options={({ route }) => ({ title: route.params.name })}/>
  </Stack.Navigator>
  );
};

export const HostStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerBackImage: backButtonImg,
        headerStyle: {
          backgroundColor: "white",
          height: ScreenSize.height * 0.156
        },
        headerTitleStyle: {fontSize: ScreenSize.width * 0.06},
        headerTintColor: "black",
        headerBackTitleVisible: false
      }}
      initialRouteName="Feed"
    >
      <Stack.Screen name="Feed" component={HostNavBar} options={({ route }) => ({ headerTitle: getHeaderTitle(route), headerShown: renderTitle(route)})}/>
      <Stack.Screen name="CreateHouse" component={CreateHouse} options={{ title: 'Tạo nhà trọ' }}/>
      <Stack.Screen name="CreateRoom" component={CreateRoom} options={{ title: 'Tạo phòng trọ' }} initialParams={{ fromHouse: false }}/>
      <Stack.Screen name="CreateBill" component={CreateBill} options={{ title: 'Tạo hóa đơn' }}/>
      <Stack.Screen name="AddGuest" component={AddGuest} options={{ title: 'Quét mã QR' }}/>
      <Stack.Screen name="GuestDetail" component={GuestDetail} options={{ title: 'Thêm người' }}/>

      <Stack.Screen name="HostInfo" component={HostInfo} options={{ title: 'Thông tin cá nhân' }}/>
    </Stack.Navigator>
    );
};

// Work in progress
// export const GuestStack = () => {
//   return (
//     <Stack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "white",
//         height: ScreenSize.height * 0.156
//       },
//       headerTintColor: "black",
//       headerBackTitleVisible: false
//     }}
//     initialRouteName="Feed"
//   >
//     <Stack.Screen name="Feed" component={HostNavBar} options={{ headerShown: false }}/>
//     <Stack.Screen name="CreateHouse" component={CreateHouse} options={{ title: 'Tạo nhà trọ' }}/>
//     <Stack.Screen name="CreateRoom" component={CreateRoom} options={{ title: 'Tạo phòng trọ' }} initialParams={{ fromHouse: false }}/>
//     <Stack.Screen name="CreateBill" component={CreateBill} options={{ title: 'Tạo hóa đơn' }}/>
//     <Stack.Screen name="AddGuest" component={AddGuest} options={{ title: 'Quét mã QR' }}/>
//   </Stack.Navigator>
//   );
// };