import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { initializeFonts, TextStyle, Color } from "../../utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScreenSize } from "../../utils";

export const ButtonDropDown = (props) => {
  const {
    title,
    icon,
    ...rest
  } = props;
  const buttonColor = Color.grey_20;
  initializeFonts();
  return (
    <View
      style={{
        ...styles.button,
        backgroundColor: buttonColor,
        borderColor: buttonColor,
      }}
    >
      <View style={styles.icon}>
        <MaterialCommunityIcons name={icon} size={ScreenSize.width * 0.05}></MaterialCommunityIcons>
      </View>
      <Text style={{ ...TextStyle.h3, marginLeft: (33 / 375) * ScreenSize.width, }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 60,
    width: (327 / 375) * ScreenSize.width,
    height: (48 / 375) * ScreenSize.width,
    paddingVertical: (13 / 812) * ScreenSize.height,
    borderWidth: 1,
  },
  icon: {
    width: (28 / 375) * ScreenSize.width,
    height: (28 / 375) * ScreenSize.width,
    marginLeft: 16,
    backgroundColor: Color.grey_20,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});