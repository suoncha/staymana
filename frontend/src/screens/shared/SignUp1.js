import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { ButtonFullWidth } from '../../components';
import { Color, ScreenSize, TextStyle } from '../../utils'
import { Divider } from "react-native-paper";

export function SignUp1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{...styles.container}}>
        <Image 
          source={require("../../images/logoImageOnly.png")}
          style={{width: ScreenSize.width * 0.4, height: ScreenSize.width * 0.4}}
        ></Image>
        <Image 
          source={require("../../images/logoTextOnly.png")}
          style={{width: ScreenSize.width * 0.68, height: ScreenSize.width * 0.12}}
        ></Image>
      </View>

      <View style={{paddingBottom: ScreenSize.height * 0.1}}>
        <Divider style={{ color: Color.grey_100, height: ScreenSize.height * 0.001}} />
        <View style={{padding: ScreenSize.height * 0.04}}></View>
        <Text style={TextStyle.h3}>Bạn muốn đăng ký với tư cách là</Text>
        <View style={{padding: ScreenSize.height * 0.012}}></View>
        <ButtonFullWidth content='Chủ trọ' onPress={() => navigation.navigate("SignUp2", {role: 1})}></ButtonFullWidth>
        <View style={{padding: ScreenSize.height * 0.015}}></View>
        <ButtonFullWidth content='Khách thuê trọ' onPress={() => navigation.navigate("SignUp2", {role: 0})}></ButtonFullWidth>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  roleSelectView: {
    flex: 1,
    backgroundColor: Color.white_100,
    alignItems: 'center',
  },

});
