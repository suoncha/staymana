import * as React from "react";
import { View, Image, Text } from "react-native";
import { initializeFonts, TextStyle } from "../../utils";
import { TouchableOpacity } from "react-native";
import { ScreenSize } from "../../utils";

export const ButtonAddGuess = (props) => {
  const {
    title,
    onPress,
    ...rest
  } = props;
  initializeFonts();
  return (
    <View style={{marginBottom: 10, marginRight: 13 / 375 * ScreenSize.width}}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{width: 100 / 375 * ScreenSize.width, height: 100 / 375 * ScreenSize.width, borderRadius: 15, marginBottom: 6}}
          source={require("../../images/addGuessButton.png")}
        />
        <Text style={[TextStyle.h4, {alignSelf: "center"}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};