import React, {useState} from "react";
import { View, StyleSheet, Text, ScrollView, Alert } from "react-native";
import { Color, ScreenSize, TextStyle } from '../../utils'
import { StepBar, ButtonFullWidth, InputPassword } from '../../components';
// Service
import * as Cache from '../../services/Cache'
import * as POST from '../../services/POST'

export function ForgotPassword3({ navigation }) {
  const [pass1, setPass1] = useState('')
  const [pass2, setPass2] = useState('')

  const handleSubmit = () => {
    if (pass1 == pass2 && pass1 != '') {
      const data = {
        password: pass1,
      }
      Cache.merge('QuenMatKhau', data)
      Cache.get('QuenMatKhau').then(res => POST.changePassword(JSON.parse(res)))
      navigation.navigate("ForgotPassword4")
    }
    else Alert.alert('Mật khẩu không giống nhau. Vui lòng thử lại')
  }

  return (
    <View style={styles.container}>
      <StepBar step={3}></StepBar>
      <ScrollView>
      <View style={{...styles.container, paddingTop: ScreenSize.height * 0.03, alignItems: 'flex-start'}}>
        <Text style={TextStyle.h2}>Tạo mật khẩu mới</Text>
        <View style={{padding: ScreenSize.height * 0.01}}></View>
        <InputPassword allowOutput={true} output={setPass1} title='Nhập mật khẩu'></InputPassword>
        <InputPassword allowOutput={true} output={setPass2} title='Nhập lại mật khẩu'></InputPassword>
      </View> 
      </ScrollView>
      <View style={{paddingBottom: ScreenSize.height * 0.1}}>
        <ButtonFullWidth content='Xác nhận' onPress={() => handleSubmit()}></ButtonFullWidth>
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
