import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  ScrollView
} from "react-native";
import { Color, customSize, ScreenSize, TextStyle } from "../../utils";
import { ButtonOption, CardBill, StatusLabel } from "../../components";

const listBill = [
  {
    room: "101",
    time: "10/2022",
    status: 0,
    total: 777000,
    due: "05/11/2022",
  },
  {
    room: "102",
    time: "10/2022",
    status: 1,
    total: 500000,
    due: "05/11/2022",
  },
];

export function ViewBill({ route, navigation }) {
  const { fromHouse } = route.params;
  const [selected, setSelected] = useState(0);
  const buttonColor = (index) => {
    return index == selected ? Color.primary_100 : Color.white_100;
  };
  const textColor = (index) => {
    return index == selected ? Color.white_100 : Color.primary_100;
  };
    return (
      <View style={styles.container}>
        
        { fromHouse ?
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
        </View> : null
        }

        <View style={{marginTop: customSize(24)}}>
          <Text style={{ ...TextStyle.h3 }}>Danh sách hóa đơn</Text>
          <View style={{ flexDirection: "row", marginTop: customSize(12) }}>
            <Pressable onPress={() => setSelected(0)}>
              <View
                style={{
                  ...styles.buttonGroup,
                  width: customSize(85),
                  backgroundColor: buttonColor(0),
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                }}
              >
                <Text style={{ ...TextStyle.h4, color: textColor(0) }}>
                  Tất cả
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setSelected(1)}>
              <View
                style={{
                  ...styles.buttonGroup,
                  backgroundColor: buttonColor(1),
                  width: customSize(129),
                }}
              >
                <Text style={{ ...TextStyle.h4, color: textColor(1) }}>
                  Chưa thanh toán
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setSelected(2)}>
              <View
                style={{
                  ...styles.buttonGroup,
                  width: customSize(113),
                  backgroundColor: buttonColor(2),
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                }}
              >
                <Text style={{ ...TextStyle.h4, color: textColor(2) }}>
                  Đã thanh toán
                </Text>
              </View>
            </Pressable>
          </View>
          <FlatList
            data={listBill}
            renderItem={({ item }) => <CardBill bill={item} />}
            numColumns={1}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: (24 / 375) * ScreenSize.width,
    paddingTop: customSize(12),
    backgroundColor: Color.white_100,
    height: "100%",
  },
  func: {
    marginVertical: customSize(12),
  },
  buttonGroup: {
    justifyContent: "center",
    alignItems: "center",
    height: customSize(24),
    borderWidth: 1,
    borderColor: Color.primary_100,
  },
});
