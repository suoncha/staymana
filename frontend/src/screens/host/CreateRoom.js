import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonAddImage, InputText, ButtonFullWidth } from "../../components"

export function CreateRoom({ route, navigation }) {
  // fromHouse là boolean để check nếu true thì là tạo room từ nhà trọ -> xử lý riêng
  const { fromHouse } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={styles.center}>
      <ButtonAddImage style={styles.addImage}/>
      <View>
        <View style={styles.input}>
          <InputText title="Tên phòng trọ" placeholder="Nhập tên phòng trọ"></InputText>
        </View>
        <View style={styles.input}>
          <InputText title="Diện tích phòng" placeholder="Nhập diện tích (m2)" keyboardType="numeric" unit="m2"></InputText>
        </View>
        <View style={styles.input}>
          <InputText title="Giá thuê phòng" placeholder="Nhập giá thuê (đ)" keyboardType="numeric" unit="đ"></InputText>
        </View>
        <View style={styles.input}>
          <InputText title={fromHouse && route.params.houseName || "Vui lòng nhập tên nhà trọ"} readonly={fromHouse}></InputText>
        </View>
      </View>
      <ButtonFullWidth content="Tạo" onPress={() => navigation.goBack()} />
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    marginBottom: 24,
  },
  addImage: {
    margin: 50,
  }
});
