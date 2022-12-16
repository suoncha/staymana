import React from "react";
import {View, StyleSheet, ScrollView, Pressable, Text, ActivityIndicator} from "react-native";
import { ButtonDropDown, SmallCard, InputText, ButtonAddGuess } from "../../components";
import { Color, TextStyle } from "../../utils"
import { getRoomList} from "../../services";
import * as Cache from '../../services/'

export function ViewHouse({ route, navigation }) {
  const { name, address, _id } = route.params;
  const rules = "Không gây ồn ào mất trật tự";
  const [houseInfoStatus, setHouseInfoStatus] = React.useState(true);
  const [roomListStatus, setRoomListStatus] = React.useState(true);
  const [roomList, setRoomList] = React.useState();
  const data = {
    houseId: _id
  }
  getRoomList(data).then((res) => {
    setRoomList(res.data);
  }).catch((error) => console.log(error))
  if (!roomList)
    return <ActivityIndicator/>;
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
                  avatar={room.image}
                  name={room.name}
                  onPress={() => navigation.navigate("ViewRoom", { name: room.name, houseName: name, area: room.area, price: room.rentalFee, memberId: room.memberId })}
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
    marginTop: 12,
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
