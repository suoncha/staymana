import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Color, ScreenSize, TextStyle } from '../../utils'
import { StepBar, ButtonFullWidth, InputPassword } from '../../components';

export function SignUp4({ navigation }) {
  return (
    <View style={styles.container}>
      <StepBar step={3}></StepBar>
      <ScrollView>
      <View style={{...styles.container, paddingTop: ScreenSize.height * 0.03, alignItems: 'flex-start'}}>
        <Text style={TextStyle.h2}>Tạo mật khẩu mới</Text>
        <View style={{padding: ScreenSize.height * 0.01}}></View>
        <InputPassword title='Nhập mật khẩu'></InputPassword>
        <InputPassword title='Nhập lại mật khẩu'></InputPassword>
      </View>
      </ScrollView>
      <View style={{paddingBottom: ScreenSize.height * 0.1}}>
        <ButtonFullWidth content='Hoàn thành' onPress={() => navigation.navigate("SignUp5")}></ButtonFullWidth>
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
