import * as React from "react";
import { View, Image, Text } from "react-native";
import { Color, initializeFonts, TextStyle } from "../../utils";
import { ScreenSize } from "../../utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const HouseCard = (props) => {
  const {
    avatar,
    name,
    address,
    ...rest
  } = props;
  initializeFonts();
  return (
    <View style={{marginBottom: 10, marginLeft: 24 / 375 * ScreenSize.width}}>
      <Image
        style={{width: 327 / 375 * ScreenSize.width, height: 194, borderRadius: 16, marginBottom: 6}}
        source={{
          uri: avatar,
        }}
      />
      <Text style={TextStyle.h4}>{name}</Text>
      <View style={{flexDirection: "row"}}>
        <MaterialCommunityIcons name={"map-marker-outline"} size={ScreenSize.width * 0.032} color={Color.grey_100} style={{marginTop: 3, marginRight: 3}}></MaterialCommunityIcons>
        <Text style={[TextStyle.bodySmall, {color: Color.grey_100}]}>{address}</Text>
      </View>
    </View>
  );
};