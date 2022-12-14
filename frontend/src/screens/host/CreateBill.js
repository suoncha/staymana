import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ButtonHalfWidth, InputText } from "../../components";
import {
  ButtonType,
  Color,
  customSize,
  ScreenSize,
  TextStyle,
} from "../../utils";

export function CreateBill({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ marginTop: customSize(12) }}>
          <Text style={{ ...TextStyle.h3, marginBottom: customSize(12) }}>
            Nhập thông tin hóa đơn
          </Text>
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
        <View style={{ marginBottom: customSize(48), alignSelf: "center" }}>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: (24 / 375) * ScreenSize.width,
    backgroundColor: Color.white_100,
    height: "100%",
    justifyContent: "space-between",
  },
  action: {
    flexDirection: "row",
    width: ScreenSize.width,
    paddingHorizontal: (24 / 375) * ScreenSize.width,
    justifyContent: "space-between",
  },
});
