import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Color, ScreenSize, TextStyle, ButtonType } from '../../utils'
import { ButtonFullWidth } from '../../components';

export function LoginFail({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{...styles.container, paddingTop: ScreenSize.height * 0.03, justifyContent: 'center'}}>
        <Image 
          source={require("../../images/logFail.png")}
          style={{width: ScreenSize.width * 0.45, height: ScreenSize.width * 0.45}}
        ></Image>
        <View style={{padding: ScreenSize.height * 0.02}}></View>
        <Text style={TextStyle.h2}>Đăng nhập không thành công!</Text>
        <View style={{padding: ScreenSize.height * 0.01}}></View>
        <Text style={TextStyle.h3}>Tài khoản đăng nhập của bạn chưa tồn tại</Text>
      </View>
      
      <View style={{paddingBottom: ScreenSize.height * 0.1}}>
        <ButtonFullWidth type={ButtonType.RED} content='Quay lại' onPress={() => navigation.goBack()}></ButtonFullWidth>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white_100,
    alignItems: 'center',
  },
});
