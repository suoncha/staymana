import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Platform, ScrollView } from "react-native";
import { Color, ScreenSize, TextStyle, ButtonType } from '../../utils'
import { StepBar, ButtonFullWidth, InputText, ButtonSmall, InputInformation } from '../../components';
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

  const [date, setDate] = useState(new Date())
  const defaultPlatformState = Platform.OS == 'ios' ? true : false
  const [dateShow, setDateShow] = useState(defaultPlatformState)
  const [dateText, setDateText] = useState('Bạn chưa chọn ngày')
  const dateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setDateShow(Platform.OS == 'ios')
    setDate(currentDate)

    const tempDate = new Date(currentDate)
    const printDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    setDateText(printDate)
  }

  return (
    <ScrollView style={{backgroundColor: Color.white_100}}>
    <StepBar step={1}></StepBar>
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
        
        <InputInformation title='Ngày sinh' information={dateText}></InputInformation>
        {Platform.OS == 'android'? 
        <Button title="Chọn ngày" onPress={() => setDateShow(true)}/> : <View/>
        }
        {dateShow && (
          <DateTimePicker
          display="default"
          value={date}
          onChange={dateChange}
          themeVariant='light'
          style={{}}
          />
        )}

        <InputText title="Mã số CCCD" placeholder="Nhập CCCD" rightIcon='check-circle-outline' keyboardType="numeric"></InputText>
        <InputText title="Số điện thoại" placeholder="Nhập số điện thoại" rightIcon='check-circle-outline' keyboardType="numeric"></InputText>
        <InputText title="Email" placeholder="Nhập email" rightIcon='check-circle-outline'></InputText>
      </View>
    </View>
    <View style={{paddingBottom: ScreenSize.height * 0.1, alignItems: 'center', paddingTop: ScreenSize.height * 0.05}}>
        <ButtonFullWidth content='Tiếp theo' onPress={() => navigation.navigate("SignUp3")}></ButtonFullWidth>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white_100,
    alignItems: 'center',
  },
});
