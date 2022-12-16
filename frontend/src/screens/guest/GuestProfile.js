import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { ScreenSize, Color, TextStyle } from "../../utils";
import { ButtonOption, InputInformation, InputText } from "../../components"
import * as Cache from '../../services/'
import * as POST from '../../services/POST'
import * as ImagePicker from "expo-image-picker"
import { Alert } from "react-native";
import {firebase} from '../../config/firebase'

export function GuestProfile({ navigation }) {
  const handleDob = (date) => {
    const tempDate = new Date(date)
    var printDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    setDob(printDate)
  }
  const [userId, setId] = useState();
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [CCCD, setCCCD] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  Cache.get('USER_INFO').then((res) => {
    setId(JSON.parse(res)._id)
    setName(JSON.parse(res).name);
    setAvatar(JSON.parse(res).image)
    setGender(JSON.parse(res).gender)
    handleDob(JSON.parse(res).dob)
    setCCCD(JSON.parse(res).identityNumber)
    setPhone(JSON.parse(res).tel)
    setEmail(JSON.parse(res).email ? JSON.parse(res).email : '')
  }).catch((error) => console.log(error))

  const [newImg, setNewImg] = useState('')

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        
        if (!result.canceled) {
            const localSrc = {uri: result.assets[0].uri}
            setNewImg(localSrc)
        }
    };

    const uploadImage = async () => {
        const response = await fetch(newImg.uri)
        const blob = await response.blob()
        const filename = userId + '.png'
        var ref = firebase.storage().ref().child(filename).put(blob)
        try {
            await ref
        } catch (e) {
            console.log('Error:' + e)
        }
        await firebase.storage().ref().child(filename).getDownloadURL().then(re => {
            setAvatar(re)
            // Set Cache
            const addToCache = {image: re}
            Cache.merge('USER_INFO', addToCache)
            // Set DTB
            const body = {
                userId: userId,
                image: re,
            }
            POST.changeImage(body)
            Alert.alert('Ảnh đã thay đổi!')
            setNewImg('')  
        })
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trang cá nhân</Text>
      </View>
      <ScrollView style={{paddingTop: 12, backgroundColor: Color.white_100,}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.center}>
          <View>
          <Pressable onPress={pickImage}>
          <Image
              style={{
                  width: 160 / 375 * ScreenSize.width,
                  height: 160 / 375 * ScreenSize.width,
                  borderRadius: 25,
                  marginBottom: 6
              }}
              source={{
                  uri: avatar,
              }}
          />
          
          </Pressable>
          {newImg != '' ? 
                        <View style={{alignSelf: 'center'}}>
                        <Pressable onPress={uploadImage} >
                        <Text style={[styles.logout, TextStyle.h3, {color: Color.red_100, justifyContent: 'center'}]}>Cập nhật</Text>
                        </Pressable> 
                        </View>
                        : null
          }
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
