import {useState} from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonAddImage, InputText, ButtonFullWidth, InputInformation } from "../../components"
import {Dropdown} from "react-native-element-dropdown";
import { Color, ScreenSize, TextStyle } from "../../utils";
import { getHouseList, createRoom } from '../../services/'
import * as Cache from '../../services/'
import { propertiesListToString } from "@expo/config-plugins/build/android/Properties";

export function CreateRoom({ route, navigation }) {
  // fromHouse là boolean để check nếu true thì là tạo room từ nhà trọ -> xử lý riêng
  const { fromHouse } = route.params;
  const houseIdFrom = route.params.houseId;
  const [roomName, setRoomName] = useState("");
  const [area, setArea] = useState();
  const [rentalFee, setRentalFee] = useState();
  const [houseId, setHouseId] = useState();
  const [houseList, setHouseList] = useState();
  // const [data, setData] = useState();

  const create = () => {
    const data = 
    {
      "name": roomName,
      "area": area,
      "rentalFee": rentalFee,
      "image": "https://static-images.vnncdn.net/files/publish/2022/11/29/nha-cap-4-1212.jpg?width=600",
      "houseId": houseId,
    }
    createRoom(data)
  }

  Cache.get('USER_INFO')
        .then((res) => {
            const data = {
                hostId: JSON.parse(res)._id
            }
            getHouseList(data).then((res) => setHouseList(res.data)).catch((error) => console.log(error))
        })
        .catch((error) => console.log(error));

  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} 
      style={{ backgroundColor: Color.white_100}}
    >
      <View style={styles.center}>
      <ButtonAddImage style={styles.addImage}/>
      <View>
        <View style={styles.input}>
          <InputText title="Tên phòng trọ" placeholder="Nhập tên phòng trọ" output={setRoomName} allowOutput="true" rightIcon='pencil-outline'></InputText>
        </View>
        <View style={styles.input}>
          <InputText title="Diện tích phòng" placeholder="Nhập diện tích (m2)" output={setArea} allowOutput="true" rightIcon='pencil-outline' keyboardType="numeric" unit="m2"></InputText>
        </View>
        <View style={styles.input}>
          <InputText title="Giá thuê phòng" placeholder="Nhập giá thuê (đ)" output={setRentalFee} allowOutput="true" rightIcon='pencil-outline' keyboardType="numeric" unit="đ"></InputText>
        </View>
        <View style={styles.input}>
          {fromHouse ?
            <InputInformation title="Nhà trọ" information={fromHouse && route.params.houseName || "Bạn chưa nhập tên nhà trọ"}/>
          : <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={houseList}
              labelField="name"
              valueField="_id"
              placeholder="Chọn nhà trọ"
              search
              searchPlaceholder="Tìm nhà trọ ..."
              value={houseId}
              onChange={(item) => {
                setHouseId(item._id);
              }}
            />
  }      
        </View>
      </View>
      {!fromHouse && <ButtonFullWidth content="Tạo" onPress={() => {create(), navigation.goBack()}} />
      || <ButtonFullWidth content="Tạo" onPress={() => {
        const newRoom = {
          "name": roomName,
          "area": area,
          "rentalFee": rentalFee,
          "image": "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
        }
        route.params.setRoomList(list => [...list, newRoom])
        navigation.goBack()
      }} />
      }
      <View style={{marginTop: ScreenSize.height * 0.2}}></View>
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
  },
  dropdown: {
    height: 60,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    paddingHorizontal: 8,
  },
  icon: {
      marginRight: 5,
  },
  placeholderStyle: {
      ...TextStyle.h3,
  },
  selectedTextStyle: {
      fontSize: 16,
  },
  iconStyle: {
      width: 20,
      height: 20,
  },
  inputSearchStyle: {
      height: 40,
      fontSize: 16,
  },
});
