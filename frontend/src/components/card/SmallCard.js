import * as React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { initializeFonts, TextStyle } from "../../utils";
import { ScreenSize } from "../../utils";

export const SmallCard = (props) => {
  const {
    avatar,
    name,
    onPress,
    ...rest
  } = props;
  initializeFonts();
  return (
    <Pressable onPress={onPress}>
      <View style={{marginBottom: 10, marginRight: 13 / 375 * ScreenSize.width}}>
        <Image
          style={{width: 100 / 375 * ScreenSize.width, height: 100 / 375 * ScreenSize.width, borderRadius: 15, marginBottom: 6}}
          source={{
            uri: avatar,
          }}
        />
        <Text style={[TextStyle.h4, {alignSelf: "center"}]}>{name}</Text>
      </View>
    </Pressable>
  );
};