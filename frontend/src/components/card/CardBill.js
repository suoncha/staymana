import { Color, ScreenSize } from "../../utils";
import { StyleSheet, Text, View, Pressable } from "react-native";

export const CardBill = (props) => {
  const { room, time, status, total, due } = props;

  return (
    <Pressable onPress={() => null}>
      <View style={styles.container}></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    width: (327 / 375) * ScreenSize.width,
    height: (104 / 375) * ScreenSize.width,
    backgroundColor: Color.white_100,
    borderWidth: 1,
    borderColor: Color.primary_100,
  },
});