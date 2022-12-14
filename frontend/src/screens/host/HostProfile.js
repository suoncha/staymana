import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { ScreenSize, Color, TextStyle } from "../../utils";
import { InputInformation, InputText } from "../../components"

export function HostProfile({ navigation }) {
  const avatar = "https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/246379189_2013455708828432_4440882224966814717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RjlVcEilgU0AX-QEXJQ&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfCHoAifC_ctVwysxaxd8i3CqyIlmyiaDWSJp-wnXSgXhg&oe=639D2BCC";
  const name = "Nguyễn Tuấn Minh"
  const gender = "Nam";
  const dob = "07/12/2000";
  const CCCD = "123456789012";
  const phone = "0123456789";
  const email = "tuanminhdeptrai@gmail.com";
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
            <InputText title="Số điện thoại" defaultValue={phone} rightIcon='pencil-outline' keyboardType="numeric"></InputText>
          </View>
          <View style={styles.info}>
            <InputText title="Email" defaultValue={email} rightIcon='pencil-outline'></InputText>
          </View>
          <Pressable onPress={() => navigation.navigate("HostHome")} >
            <Text style={[styles.logout, TextStyle.h3, {color: Color.red_100}]}>Đăng xuất</Text>
          </Pressable>
        </View>
        <View style={{height: 12}}></View>
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
});
