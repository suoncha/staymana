import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, Alert } from "react-native";
import { Color, ScreenSize } from '../../utils'
import { StepBar, ButtonFullWidth, InputText } from '../../components';
// Service
import * as Cache from '../../services/Cache'
import * as POST from '../../services/POST'

export function ForgotPassword1({ navigation, route }) {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = () => {
    Cache.rm('QuenMatKhau')
    const data = {
      role: route.params.role,
      tel: phoneNumber,
    }
    POST.checkExist(data).then(res => {
      if (res) {
        Cache.set('QuenMatKhau', data)
        navigation.navigate("ForgotPassword2", { phoneNumber: '+84' + phoneNumber })
      }
      else Alert.alert('Tài khoản này chưa tồn tại')
    })
  }

  return (
    <View style={styles.container}>
      <StepBar step={1}></StepBar>
      <ScrollView>
      <View style={{...styles.container, paddingTop: ScreenSize.height * 0.03}}>
        <Image 
          source={require("../../images/logoImageOnly.png")}
          style={{width: ScreenSize.width * 0.3, height: ScreenSize.width * 0.3}}
        ></Image>
        <InputText allowOutput={true} output={setPhoneNumber} title="Vui lòng nhập số điện thoại đăng ký" placeholder="Nhập số điện thoại" rightIcon={phoneNumber==''? '' : 'check-circle-outline'} keyboardType="numeric"></InputText>
      </View>
      </ScrollView>
      <View style={{paddingBottom: ScreenSize.height * 0.1}}>
        <ButtonFullWidth content='Gửi OTP' onPress={() => handleSubmit()}></ButtonFullWidth>
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
