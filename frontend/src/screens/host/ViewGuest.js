import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { InputInformation } from "../../components";
import { TextStyle, Color, ScreenSize } from "../../utils";

export function ViewGuest({ route, navigation }) {
  const { name } = route.params;
  const gender = "Nam";
  const dob = "07/12/2000";
  const CCCD = "123456789012";
  const phone = "0123456789";
  const email = "tuanminhdeptrai@gmail.com";
  return (
      
      <View style={styles.center}>
        <View style={styles.title}>
          <Text style={[TextStyle.h2, {color: Color.dark_100}]}>Thông tin người thuê</Text>
        </View>
        <View style={styles.info}>
          <InputInformation title="Họ và tên" information={name}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Giới tính" information={gender}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Ngày sinh" information={dob}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Mã số CCCD" information={CCCD}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Số điện thoại" information={phone}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Email" information={email}></InputInformation>
        </View>
        <View style={styles.endLine}>
          <Pressable onPress={() => 
          navigation.goBack()
        }>
          <Text style={[TextStyle.h3, {color: Color.red_100}]}>Xóa người thuê</Text>
        </Pressable>
        </View>
        
      </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: Color.white_100,
  },
  title: {
    width: (327 / 375) * ScreenSize.width,
    marginBottom: 12,
    marginTop: 12,
  },
  endLine: {
    width: (327 / 375) * ScreenSize.width,
    alignItems: "flex-end",
  },
});
