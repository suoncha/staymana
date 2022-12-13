import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { ButtonHalfWidth, InputPassword, InputText } from "../../components";
import { ButtonType, Color, ScreenSize, TextStyle } from "../../utils";

export function CreateBill({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ ...TextStyle.h3 }}>Nhập thông tin hóa đơn</Text>
      <View style={styles.form}>
        <InputText
          title="Phòng"
          placeholder="Danh sách phòng"
          rightIcon="format-list-bulleted"
          onPress={() => alert("Hello")}
        />
        <InputText title="Tiêu đề" placeholder="Tiêu đề hóa đơn" />
        <InputText
          title="Ngày"
          placeholder="Ngày hết hạn hóa đơn"
          rightIcon="calendar-range"
          onPress={() => alert("Hello")}
        />
        <InputText
          title="Số tiền"
          placeholder="Số tiền phải trả"
          rightIcon="currency-usd"
          onPress={() => alert("Hello")}
        />
      </View>
      <View style={styles.action}>
        <ButtonHalfWidth
          type={ButtonType.DEFAULT}
          content="Tạo"
          onPress={() => navigation.goBack()}
        />
        <ButtonHalfWidth
          type={ButtonType.RED}
          content="Hủy"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: (24 / 375) * ScreenSize.width,
    paddingTop: (12 / 812) * ScreenSize.height,
    backgroundColor: Color.white_100,
    height: "100%",
  },
  form: {
    marginTop: (12 / 812) * ScreenSize.height,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: (230 / 812) * ScreenSize.height,
  },
});
