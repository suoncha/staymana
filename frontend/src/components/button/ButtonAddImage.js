import * as React from "react";
import { View, Image, Text } from "react-native";
import { initializeFonts, TextStyle } from "../../utils";
import { TouchableOpacity, StyleSheet } from "react-native";
import { ScreenSize } from "../../utils";

export const ButtonAddImage = (props) => {
  const {
    title,
    onPress,
    ...rest
  } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{width: 160 / 375 * ScreenSize.width, height: 165 / 375 * ScreenSize.width, borderRadius: 15, marginBottom: 8, alignSelf: "center"}}
          source={require("../../images/addImageButton.png")}
        />
        <Text style={[TextStyle.h4, {alignSelf: "center"}]}>Thêm ảnh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 36,
  },
  input: {
    marginBottom: 24,
  },
  addImage: {
    margin: 50,
  }
});