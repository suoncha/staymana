import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function AddGuest({ route, navigation }) {
  const fromRoom = route.params.fromRoom;
  const roomName = route.params.roomName;
  const houseName = route.params.houseName;
  const handle = () => {
    fromRoom ? navigation.navigate("GuestDetail", { fromRoom: fromRoom, roomName: roomName, houseName: houseName })
    : navigation.navigate("GuestDetail", {})
  };
  return (
    <View style={styles.center}>
      <Button
        title="Quét QR"
        onPress={() => handle()}
      />
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
});
