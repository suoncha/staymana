import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonFullWidth, InputInformation, InputText } from "../../components";
import { TextStyle, Color, ScreenSize } from "../../utils";
import * as Cache from '../../services/'

export function GuestDetail({ route, navigation }) {
  const handleDob = (date) => {
    const tempDate = new Date(date)
    var printDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    setDob(printDate)
  }
  const fromRoom = route.params.fromRoom;
  const roomName = route.params.roomName;
  const houseName = route.params.houseName;
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [CCCD, setCCCD] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  Cache.get('QRDetail').then((res) => {
    setName(JSON.parse(res).name);
    setGender(JSON.parse(res).gender)
    handleDob(JSON.parse(res).dob)
    setCCCD(JSON.parse(res).identityNumber)
    setPhone(JSON.parse(res).tel)
    setEmail(JSON.parse(res).email ? JSON.parse(res).email : '')
  }).catch((error) => console.log(error))

  return (
    <View style={styles.center}>
      <View style={styles.title}>
          <Text style={[TextStyle.h2, {color: Color.dark_100}]}>Thông tin người thuê</Text>
        </View>
        <View style={styles.info}>
          <InputInformation title="Họ và tên" information={name}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Giới tính" information={gender === 0 ? "Nam" : (gender === 1 ? "Nữ" : "Khác")}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Ngày sinh" information={dob}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Mã số CCCD" information={CCCD}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Số điện thoại" information={phone}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Email" information={email}></InputInformation>
        </View>
        {!fromRoom &&
          <View style={styles.info}>
            <InputText title="Phòng trọ" placeholder="Chọn phòng trọ"></InputText>
          </View>
        ||
          <View style={styles.info}>
            <InputInformation title="Phòng trọ" information={roomName + " - " + houseName}/>
          </View>
        }
        <View style={{marginTop: 24}}>
          <ButtonFullWidth content="Xác nhận" onPress={() => navigation.popToTop()}></ButtonFullWidth>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: Color.white_100,
  },
  title: {
    width: (327 / 375) * ScreenSize.width,
    marginBottom: 12,
    marginTop: 12,
  },
});
