import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Color, ScreenSize, TextStyle, ButtonType } from '../../utils'
import { ButtonFullWidth } from '../../components';

export function SignUp5({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{...styles.container, paddingTop: ScreenSize.height * 0.03, justifyContent: 'center'}}>
        <Image 
          source={require("../../images/logSuccess.png")}
          style={{width: ScreenSize.width * 0.45, height: ScreenSize.width * 0.45}}
        ></Image>
        <View style={{padding: ScreenSize.height * 0.02}}></View>
        <Text style={TextStyle.h2}>Đăng ký thành công!</Text>
        <View style={{padding: ScreenSize.height * 0.01}}></View>
        <Text style={TextStyle.h3}>Vui lòng đăng nhập để sử dụng</Text>
        <Text style={TextStyle.h3}>ứng dụng StayMana</Text>
      </View>
      
      <View style={{paddingBottom: ScreenSize.height * 0.1}}>
        <ButtonFullWidth type={ButtonType.GREEN} content='Đăng nhập' onPress={() => navigation.goBack(navigation.popToTop())}></ButtonFullWidth>
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
