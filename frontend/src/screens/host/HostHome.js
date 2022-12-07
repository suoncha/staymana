import React from "react";
import {
  View,
  Image,
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { CardService, WelcomeText } from "../../components";
import { CardServiceData } from "../../utils/CardServiceData";
import { StatusBar } from "expo-status-bar";
import { ScreenSize } from "../../utils";

export function HostHome({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={{ justifyContent: "flex-end", width: "50%" }}>
          <Image
            source={require("../../images/logo.png")}
            style={styles.logo}
          ></Image>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            width: "50%",
            backgroundColor: "red",
          }}
        >
          <Button
            title="Thông báo"
            onPress={() => navigation.navigate("HostNotification")}
          />
          <Button
            title="Avatar"
            onPress={() => navigation.navigate("HostInfo")}
          />
        </View>
      </View>
      <View style={{ marginHorizontal: 24 }}>
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
          style={{ marginTop: (48 / 812) * ScreenSize.height }}
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
    backgroundColor: "white",
    width: "100%",
    height: ScreenSize.height * 0.156,
    flexDirection: "row",
    paddingTop: ScreenSize.height * 0.05,
  },
  logo: {
    width: ScreenSize.width * 0.19,
    height: ScreenSize.width * 0.15,
    marginHorizontal: 24,
    marginBottom: ScreenSize.height * 0.02,
  },
});
