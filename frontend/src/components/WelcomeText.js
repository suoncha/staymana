import { Divider } from "@rneui/themed";
import { Text, View } from "react-native";
import { Color, ScreenSize, TextStyle } from "../utils";

export const WelcomeText = (props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: (16 / 812) * ScreenSize.height,
        }}
      >
        <Text style={TextStyle.h3}>Xin chào, </Text>
        <Text style={{ ...TextStyle.h3, color: Color.red_100 }}>
          {props.name} 👋{" "}
        </Text>
      </View>
      <Divider color={Color.grey_20} width={1} />
    </View>
  );
};
