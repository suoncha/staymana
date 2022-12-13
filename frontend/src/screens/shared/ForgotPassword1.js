import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Color, ScreenSize } from '../../utils'
import { StepBar, ButtonFullWidth, InputText } from '../../components';

export function ForgotPassword1({ navigation }) {
  return (
    <View style={styles.container}>
      <StepBar step={1}></StepBar>
      <View style={{...styles.container, paddingTop: ScreenSize.height * 0.03}}>
        <Image 
          source={require("../../images/logoImageOnly.png")}
          style={{width: ScreenSize.width * 0.3, height: ScreenSize.width * 0.3}}
        ></Image>
        <InputText title="Vui lòng nhập số điện thoại đăng ký" placeholder="Nhập số điện thoại" rightIcon='check-circle-outline' keyboardType="numeric"></InputText>
      </View>
      
      <View style={{paddingBottom: ScreenSize.height * 0.1}}>
        <ButtonFullWidth content='Gửi OTP' onPress={() => navigation.navigate("ForgotPassword2")}></ButtonFullWidth>
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
