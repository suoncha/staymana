import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { CardService, WelcomeText } from "../../components";
import { CardServiceData } from "../../utils/CardServiceData";
import { StatusBar } from "expo-status-bar";
import { ScreenSize } from "../../utils";

export function HostHome({ navigation }) {
  return (
    <SafeAreaView style={{marginHorizontal: 24}}>
      <WelcomeText name="Nguyễn Tuấn Minh" />
      <FlatList
        data={CardServiceData}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <CardService data={item}/>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
        style={{marginTop: 48 / 812 * ScreenSize.height}}
      />
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
});