import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { ScreenSize } from "../../utils";

export function HostList({ navigation}) {
    // fake data
    const house1 = 'Nhà trọ Hoa Mai'
    const house2 = 'Nhà trọ Hoa Đào'

    return (
      <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>Nhà trọ của bạn</Text>
      </View>
      <View style={styles.center}>

      <Button
        title={house1}
        onPress={() => navigation.navigate("ViewHouse", { name: house1 })}
      />
      <Button
        title={house2}
        onPress={() => navigation.navigate("ViewHouse", { name: house2 })}
      />
    </View>
    </View>
    );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    },
  container: {
      flex: 1,
  },
  header: {
      backgroundColor: 'white',
      width: '100%',
      height: ScreenSize.height * 0.156,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: ScreenSize.height * 0.05,
  },
  headerText: {
      fontSize: ScreenSize.width * 0.06,
      fontWeight: '600',
      color: 'black',
      alignSelf: 'center',
  }
});
