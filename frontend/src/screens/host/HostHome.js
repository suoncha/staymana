import React from "react";
import { View, Image, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ButtonIcon, CardService, WelcomeText } from "../../components";
import { CardServiceData } from "../../utils/CardServiceData";
import { StatusBar } from "expo-status-bar";
import { ButtonType, Color, ScreenSize, customSize } from "../../utils";
import { Avatar } from "react-native-paper";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export function HostHome({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: Color.white_100, height: "100%" }}>
      <View style={{ marginHorizontal: customSize(24) }}>
        <View style={styles.header}>
          <View style={{ justifyContent: "flex-end", width: "50%" }}>
            <Image
              source={require("../../images/logo.png")}
              style={styles.logo}
            ></Image>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "50%",
            }}
          >
            <ButtonIcon
              type={ButtonType.OUTLINE}
              iconName="bell-outline"
              onPress={() => navigation.navigate("HostNotification")}
            />
            <Pressable
              onPress={() => navigation.navigate("HostInfo")}
              style={{ marginLeft: customSize(12) }}
            >
              <Avatar.Image
                size={customSize(40)}
                source={{uri: "https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg"}}
              />
            </Pressable>
          </View>
        </View>
        <WelcomeText name="Nguyễn Tuấn Minh" />
        <FlatList
          data={CardServiceData}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <CardService data={item} />
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
          style={{ marginTop: customSize(48) }}
        />
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: customSize(54),
    flexDirection: "row",
    marginVertical: customSize(15),
  },
  logo: {
    width: customSize(71),
    height: "100%",
  },
});
