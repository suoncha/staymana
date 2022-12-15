import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { ScreenSize, Color, TextStyle } from "../../utils";
import { ButtonOption, InputInformation, InputText } from "../../components"
import * as Cache from '../../services/'

export function GuestProfile({ navigation }) {
  const handleDob = (date) => {
    const tempDate = new Date(date)
    var printDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    setDob(printDate)
  }
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [CCCD, setCCCD] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  Cache.get('USER_INFO').then((res) => {
    setName(JSON.parse(res).name);
    setAvatar(JSON.parse(res).image)
    setGender(JSON.parse(res).gender)
    handleDob(JSON.parse(res).dob)
    setCCCD(JSON.parse(res).identityNumber)
    setPhone(JSON.parse(res).tel)
    setEmail(JSON.parse(res).email ? JSON.parse(res).email : '')
  }).catch((error) => console.log(error))

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trang cá nhân</Text>
      </View>
      <ScrollView style={{paddingTop: 12, backgroundColor: Color.white_100,}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.center}>
          <View>
            <Image
              style={{width: 160 / 375 * ScreenSize.width, height: 160 / 375 * ScreenSize.width, borderRadius: 25, marginBottom: 6}}
              source={{
                uri: avatar,
              }}
            />
          </View>
          <View style={styles.qr}>
            <ButtonOption iconName="qrcode-scan" content="Mã QR của tôi" onPress={() => navigation.navigate('MyQR')}></ButtonOption>
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
              <InputInformation title= "Email" information={email}></InputInformation>
          </View>
          <Pressable onPress={() => {Cache.rm('ACCESS_TOKEN'); navigation.navigate("Login")}} >
            <Text style={[styles.logout, TextStyle.h3, {color: Color.red_100}]}>Đăng xuất</Text>
          </Pressable>
        </View>
        <View style={{height: 12}}></View>
      <View style={{paddingTop: ScreenSize.height * 0.3}}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "white",
    width: "100%",
    height: ScreenSize.height * 0.156,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: ScreenSize.height * 0.05,
  },
  headerText: {
    fontSize: ScreenSize.width * 0.06,
    fontWeight: "600",
    color: "black",
    alignSelf: "center",
  },
  logout: {
    marginTop: 24,
    marginBottom: 24,
  },
  qr: {
    marginTop: 24,
    marginBottom: 12,
  },
});
