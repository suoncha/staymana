import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonAddImage, ButtonFullWidth, InputText, SmallCard, ButtonAddGuess } from "../../components";
import { TextInput } from "react-native-paper";
import { Color, TextStyle, ScreenSize } from "../../utils"

const roomList = [
  {
    avatar: "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
    name: "Phòng 101",
  },
  {
    avatar: "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
    name: "Phòng 101",
  },
  {
    avatar: "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
    name: "Phòng 101",
  },
  {
    avatar: "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
    name: "Phòng 101",
  },
  {
    avatar: "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
    name: "Phòng 101",
  },
];

export function CreateHouse({ navigation }) {
  const [houseName, setHouseName] = React.useState("");
  return (
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.center}>
        <ButtonAddImage style={styles.addImage}/>
        <View>
          <View style={styles.input}>
            <TextInput
              label={"Tên nhà trọ"}
              placeholder={"Nhập tên nhà trọ"}
              placeholderTextColor={Color.grey_100}
              mode="flat"
              value={houseName}
              outlineColor={Color.white_100}
              activeOutlineColor={Color.white_100}
              onChangeText={(houseName) => setHouseName(houseName)}
              style={{
                ...TextStyle.h3,
                fontWeight: "400",
                width: (327 / 375) * ScreenSize.width,
                backgroundColor: Color.white_100,
              }}
            />
          </View>
          {/* <View style={styles.input}>
            <InputText title="Tên nhà trọ" placeholder="Nhập tên nhà trọ"></InputText>
          </View> */}
          <View style={styles.input}>
            <InputText title="Địa chỉ nhà trọ" placeholder="Nhập địa chỉ nhà trọ"></InputText>
          </View>
        </View>
        <View style={styles.roomContainer}>
          {roomList.map(room => <SmallCard avatar={room.avatar} name={room.name}/>)}
          <ButtonAddGuess
            title="Thêm phòng"
            onPress={() => navigation.navigate("CreateRoom", { fromHouse: true, houseName: houseName})}
          />
        </View>
        <ButtonFullWidth content="Tạo" onPress={() => navigation.popToTop()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  roomContainer:{
    flexDirection: 'row', 
    flexWrap: 'wrap',
    marginLeft: 24,
    marginBottom: 24,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 12,
  },
  input: {
    marginBottom: 24,
  },
  // addImage: {
  //   margin: 50,
  // }
});
