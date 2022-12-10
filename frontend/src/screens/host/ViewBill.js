import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { ButtonType, Color, ScreenSize, TextStyle } from "../../utils";
import { ButtonOption, StatusLabel } from "../../components";

export function ViewBill({ route, navigation }) {
  const { fromHouse } = route.params;
  if (fromHouse)
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ ...TextStyle.h3 }}>Chức năng</Text>
          <View style={styles.func}>
            <ButtonOption iconName="key-variant" content="Nội quy nhà trọ" />
            <View style={{ height: (12 / 812) * ScreenSize.height }}></View>
            <ButtonOption
              iconName="clipboard"
              content="Thêm hóa đơn"
              onPress={() => navigation.navigate("CreateBill")}
            />
          </View>
        </View>
        <View style={styles.list}>
          <Text style={{ ...TextStyle.h3 }}>Danh sách hóa đơn</Text>
        </View>
      </View>
    );
  // Else
  return <View style={styles.center}></View>;
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: (24 / 375) * ScreenSize.width,
    backgroundColor: Color.white_100,
    height: "100%",
  },
  func: {
    marginVertical: (24 / 812) * ScreenSize.height,
  },
});