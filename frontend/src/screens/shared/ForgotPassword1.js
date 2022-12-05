import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export function ForgotPassword1({navigation}) {
    return (
        <View style={styles.center}>
        <Button
          title="Gửi OTP"
          onPress={() => navigation.navigate("ForgotPassword2")}
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
