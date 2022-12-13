import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Platform, ScrollView } from "react-native";
import { Color, ScreenSize, TextStyle, ButtonType } from '../../utils'
import { StepBar, ButtonFullWidth, InputText, ButtonSmall, InputInformation, InputDate } from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker'

const filterTab = [
  {
    gender: 'Nam'
  },
  {
    gender: 'Nữ'
  },
  {
    gender: 'Khác'
  }
]

export function SignUp2({ navigation }) {
  const [gender, setGender] = useState('Nam')
  const setGenderFilter = (gender) => setGender(gender)

  return (
    <View style={styles.container}>
    <StepBar step={1}></StepBar>
    <ScrollView style={{backgroundColor: Color.white_100}}>
    <View style={styles.container}>
      
      <View style={{...styles.container, paddingTop: ScreenSize.height * 0.03, alignItems: 'flex-start'}}>
        <Text style={TextStyle.h2}>Nhập thông tin cá nhân của bạn</Text>
        <View style={{padding: ScreenSize.height * 0.01}}></View>
        <InputText title="Họ và tên" placeholder="Nhập họ tên" rightIcon='check-circle-outline'></InputText>
        <InputInformation title='Giới tính' information='.'></InputInformation>
        <View style={{flexDirection: 'row', marginTop: -ScreenSize.height * 0.04}}>
          {
            filterTab.map(e => (
              <ButtonSmall type={gender == e.gender ? ButtonType.DEFAULT : ButtonType.OUTLINE} content={e.gender} onPress={() => setGenderFilter(e.gender)}></ButtonSmall>
            ))
          }
        </View>
        
        <InputDate title='Ngày sinh'/>
        <InputText title="Mã số CCCD" placeholder="Nhập CCCD" rightIcon='check-circle-outline' keyboardType="numeric"></InputText>
        <InputText title="Số điện thoại" placeholder="Nhập số điện thoại" rightIcon='check-circle-outline' keyboardType="numeric"></InputText>
        <InputText title="Email" placeholder="Nhập email" rightIcon='check-circle-outline'></InputText>
      </View>
    </View>
    <View style={{marginTop: ScreenSize.height * 0.2}}></View>
    </ScrollView>
    <View style={{paddingBottom: ScreenSize.height * 0.1, alignItems: 'center', paddingTop: ScreenSize.height * 0.05}}>
        <ButtonFullWidth content='Tiếp theo' onPress={() => navigation.navigate("SignUp3")}></ButtonFullWidth>
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
