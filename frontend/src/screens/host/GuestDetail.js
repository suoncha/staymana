import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonFullWidth, InputInformation, InputText } from "../../components";
import { TextStyle, Color, ScreenSize } from "../../utils";

export function GuestDetail({ route, navigation }) {
  const fromRoom = route.params.fromRoom;
  const roomName = route.params.roomName;
  const houseName = route.params.houseName;
  const name = "Nguyễn Tuấn Minh";
  const gender = "Nam";
  const dob = "07/12/2000";
  const CCCD = "123456789012";
  const phone = "0123456789";
  const email = "tuanminhdeptrai@gmail.com";
  return (
    <View style={styles.center}>
      <View style={styles.title}>
          <Text style={[TextStyle.h2, {color: Color.dark_100}]}>Thông tin người thuê</Text>
        </View>
        <View style={styles.info}>
          <InputInformation title="Họ và tên" information={name}></InputInformation>
        </View>
        <View style={styles.info}>
          <InputInformation title="Giới tính" information={gender}></InputInformation>
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
