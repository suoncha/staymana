import React from "react";
import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import { ButtonDropDown, SmallCard, InputText, ButtonAddGuess } from "../../components";
import { Color, TextStyle } from "../../utils"

const guestList = [
  {
    avatar: "https://kynguyenlamdep.com/wp-content/uploads/2022/08/anh-trai-dep-deo-kinh-600x600.jpg",
    name: "Tún Mưn",
  },
  {
    avatar: "https://cf.shopee.vn/file/6d56277efff5005f30beab17a123eef8",
    name: "Hoàn Zũ",
  },
];

export function ViewRoom({ route, navigation }) {
  const { name } = route.params;
  const area = "20";
  const price ="3000000";
  const [roomInfoStatus, setRoomInfoStatus] = React.useState(false);
  const [guestListStatus, setGuestListStatus] = React.useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ backgroundColor: Color.white_100}}>
      <View style={styles.center}>
        <Pressable onPress={() => setRoomInfoStatus(!roomInfoStatus)} style={styles.dropDownButton}>
          <ButtonDropDown icon="home-outline" title="Thông tin nhà trọ"/>
        </Pressable>
        {roomInfoStatus &&
          <View>
            <View style={styles.input}>
              <InputText title="Tên phòng trọ" placeholder="Nhập tên phòng trọ" defaultValue={name} rightIcon='pencil-outline'></InputText>
            </View>
            <View style={styles.input}>
              <InputText title="Diện tích phòng" placeholder="Nhập diện tích phòng trọ" defaultValue={area} unit="m2" keyboardType="numeric" rightIcon='pencil-outline'></InputText>
            </View>
            <View style={styles.input}>
              <InputText title="Giá thuê phòng" placeholder="Nhập giá thuê" defaultValue={price} unit="đ" keyboardType="numeric" rightIcon='pencil-outline'></InputText>
            </View>
            <View style={styles.inline}>
              <Pressable onPress={() =>
                navigation.navigate("ViewBill", { name: name, fromHouse: false })
              }>
                <Text style={[TextStyle.h3, {color: Color.primary_100}]}>Xem hóa đơn</Text>
              </Pressable>
              <Pressable onPress={() => 
                navigation.goBack()
              }>
                <Text style={[TextStyle.h3, {color: Color.red_100}]}>Xóa phòng trọ</Text>
              </Pressable>
            </View>
          </View>
        }
        <Pressable onPress={() => setGuestListStatus(!guestListStatus)} style={styles.dropDownButton}>
          <ButtonDropDown icon="account-outline" title="Danh sách người thuê"/>
        </Pressable>
        {guestListStatus &&
          <View style={styles.guestContainer}>
            {guestList.map(guest => 
              <SmallCard 
                avatar={guest.avatar}
                name={guest.name}
                onPress={() => navigation.navigate("ViewGuest", { name: guest.name })}
              />
            )}
            <ButtonAddGuess
              title="Thêm người"
              onPress={() => navigation.navigate("AddGuest", { fromRoom: true, roomName: name})}
            />
          </View>
        }
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  guestContainer:{
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
