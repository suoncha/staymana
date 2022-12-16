import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { ButtonAddImage, ButtonFullWidth, InputText, SmallCard, ButtonAddGuess } from "../../components";
import { TextInput } from "react-native-paper";
import { Color, TextStyle, ScreenSize } from "../../utils"
import { createHouse } from '../../services/'
import * as Cache from '../../services/'

export function CreateHouse({ navigation }) {
  const [houseName, setHouseName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [hostId, setHostId] = React.useState("");
  const [roomList, setRoomList] = React.useState([]);

  Cache.get('USER_INFO')
  .then((res) => {
    setHostId(JSON.parse(res)._id)
  })
  .catch((error) => console.log(error));

  const create = () => {
    const data = 
    {
      "name": houseName,
      "address": address,
      "image": "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
      "hostId": hostId,
      "roomInfoList": roomList,
    }
    createHouse(data)
  }

  return (
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: Color.white_100}}
      >
        <View style={styles.center}>
        <ButtonAddImage style={styles.addImage}/>
        <View>
          <View style={styles.input}>
            <TextInput
              label={
                <Text style={{ ...TextStyle.h3, color: Color.dark_100 }}>Tên nhà trọ</Text>
              }
              placeholder={"Nhập tên nhà trọ"}
              placeholderTextColor={Color.grey_100}
              mode="flat"
              value={houseName}
              activeUnderlineColor={Color.grey_100}
              outlineColor={Color.white_100}
              activeOutlineColor={Color.white_100}
              onChangeText={(houseName) => setHouseName(houseName)}
              style={{
                ...TextStyle.h3,
                fontWeight: "400",
                width: (327 / 375) * ScreenSize.width,
                backgroundColor: Color.white_100,
              }}
              right={<TextInput.Icon name='pencil-outline' />}
            />
          </View>
          <View style={styles.input}>
            <InputText title="Địa chỉ nhà trọ" placeholder="Nhập địa chỉ nhà trọ" output={setAddress} allowOutput="true" rightIcon='pencil-outline'></InputText>
          </View>
        </View>
        <View style={styles.roomContainer}>
            {roomList.map(room => 
              <SmallCard 
                avatar={room.avatar} 
                name={room.name}
                onPress={() => navigation.navigate("ViewRoom", { name: room.name})}
              />
            )}
          <ButtonAddGuess
            title="Thêm phòng"
            onPress={() => {
              navigation.navigate("CreateRoom", { fromHouse: true, houseName: houseName, setRoomList})}
            }
          />
        </View>
        <ButtonFullWidth content="Tạo" onPress={() => {create(), navigation.popToTop()}} />
        <View style={{marginTop: ScreenSize.height * 0.05}}></View>
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
});
