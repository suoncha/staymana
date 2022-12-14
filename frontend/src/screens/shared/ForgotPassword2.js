import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Image, ScrollView, Alert } from "react-native";
import { Color, ScreenSize } from '../../utils'
import { StepBar, ButtonFullWidth, InputOtp } from '../../components';

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../config";
import firebase from "firebase/compat";

export function ForgotPassword2({ navigation, route }) {  
  const [showButton, setShowButton] = useState(false)

  const { phoneNumber } = route.params
  const [OTP, setOTP] = useState('')
  const [verifyId, setVerifyId] = useState()
  const recaptchaVerifier = useRef()

  const sendVerifyCode = () => {
    const provider = new firebase.auth.PhoneAuthProvider()
    provider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerifyId)
  }

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verifyId, OTP)
    firebase.auth().signInWithCredential(credential)
    .then(() => {
      setOTP('')
      setShowButton(true)
      Alert.alert('OTP hợp lệ')
    })
    .catch(() => {
      Alert.alert('Bạn chưa hoàn thành captcha hoặc điền sai OTP. Vui lòng thử lại')
      navigation.goBack()
    })
  }

  useEffect(() => {
    sendVerifyCode()
  }, [])

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={firebaseConfig}/>
      <StepBar step={2}></StepBar>
      <ScrollView>
      <View style={{...styles.container, paddingTop: ScreenSize.height * 0.03}}>
        <Image 
          source={require("../../images/otp.png")}
          style={{width: ScreenSize.width * 0.34, height: ScreenSize.width * 0.29}}
        ></Image>
        <View style={{padding: ScreenSize.height * 0.04}}></View>

        <InputOtp OTPInput={setOTP} onPress={sendVerifyCode}></InputOtp>
        {OTP.length == 6 ? confirmCode() : null}
        
      </View>
      </ScrollView>
      <View style={{paddingBottom: ScreenSize.height * 0.1}}>
        {
          showButton ? 
          <ButtonFullWidth content='Xác nhận' onPress={() => navigation.navigate("ForgotPassword3")}></ButtonFullWidth>
          : null
        }
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
