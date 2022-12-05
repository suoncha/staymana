import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { CardService, WelcomeText } from "../components";
import { CardServiceData } from "../utils/CardServiceData";

export function Home() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  return (
    // <AnimatedSplash
    //   isLoaded={loading}
    //   logoImage={require("../images/splash.png")}
    //   backgroundColor={"#ffffff"}
    //   logoHeight={ScreenSize.width * 0.8}
    //   logoWidth={ScreenSize.height * 0.8}
    // >
    <SafeAreaView>
      <WelcomeText/>
      <FlatList
        data={CardServiceData}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <CardService name={item.name} image={item.image} />
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
    // </AnimatedSplash>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
