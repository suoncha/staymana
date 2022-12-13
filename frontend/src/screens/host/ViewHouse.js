import React from "react";
import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import { ButtonDropDown, SmallCard, InputText, ButtonAddGuess } from "../../components";
import { Color, TextStyle } from "../../utils"

const roomList = [
  {
    avatar: "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
    name: "Phòng 101",
  },
  {
    avatar: "https://ghsc.vn/wp-content/uploads/2020/06/t%E1%BB%B1-trang-tr%C3%AD-ph%C3%B2ng-ng%E1%BB%A7-%C4%91%C6%A1n-gi%E1%BA%A3n-b%E1%BA%B1ng-tranh-k%E1%BB%B7-ni%E1%BB%87m-1.jpg",
    name: "Phòng 102",
  },
];

export function ViewHouse({ route, navigation }) {
  const { name } = route.params;
  const address = "97 Lý Thường Kiệt, phường 12, quận 3...";
  const rules ="1. Không gây ồn ào mất trật tự  2. Khôn...";
  const [houseInfoStatus, setHouseInfoStatus] = React.useState(false);
  const [roomListStatus, setRoomListStatus] = React.useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ backgroundColor: Color.white_100}}>
      <View style={styles.center}>
        <Pressable onPress={() => setHouseInfoStatus(!houseInfoStatus)} style={styles.dropDownButton}>
          <ButtonDropDown icon="home-outline" title="Thông tin nhà trọ"/>
        </Pressable>
        {houseInfoStatus &&
          <View>
            <View style={styles.input}>
              <InputText title="Tên nhà trọ" placeholder="Nhập tên nhà trọ" defaultValue={name} rightIcon='pencil-outline'></InputText>
            </View>
            <View style={styles.input}>
              <InputText title="Địa chỉ nhà trọ" placeholder="Nhập địa chỉ nhà trọ" defaultValue={address} rightIcon='pencil-outline'></InputText>
            </View>
            <View style={styles.input}>
              <InputText title="Nội quy nhà trọ" placeholder="Nhập nội quy nhà trọ" defaultValue={rules} rightIcon='pencil-outline'></InputText>
            </View>
            <View style={styles.inline}>
              <Pressable onPress={() =>
                navigation.navigate("ViewBill", { name: name, fromHouse: true })
              }>
                <Text style={[TextStyle.h3, {color: Color.primary_100}]}>Xem hóa đơn</Text>
              </Pressable>
              <Pressable onPress={() => 
                navigation.goBack()
              }>
                <Text style={[TextStyle.h3, {color: Color.red_100}]}>Xóa nhà trọ</Text>
              </Pressable>
            </View>
          </View>
        }
        <Pressable onPress={() => setRoomListStatus(!roomListStatus)} style={styles.dropDownButton}>
          <ButtonDropDown icon="home-outline" title="Danh sách phòng trọ"/>
        </Pressable>
        {roomListStatus &&
          <View style={styles.roomContainer}>
            {roomList.map(room => 
              <SmallCard 
                avatar={room.avatar} 
                name={room.name}
                onPress={() => navigation.navigate("ViewRoom", { name: room.name })}
              />
            )}
            <ButtonAddGuess
              title="Thêm phòng"
              onPress={() => navigation.navigate("CreateRoom", { fromHouse: true, houseName: name})}
            />
          </View>
        }
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  roomContainer:{
    flexDirection: 'row', 
    flexWrap: 'wrap',
    marginLeft: 24,
    marginBottom: 12,
    marginTop: 24,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 12,
  },
  input: {
    marginTop: 24,
  },
  dropDownButton: {
    marginTop: 24,
  },
  inline:{
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
