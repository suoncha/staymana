import { StyleSheet, Text, View } from "react-native";
import { Color, TextStyle } from "../utils";

export const StatusLabel = (props) => {
  const { status } = props;
  const STATUS_DATA = [
    {
      color: Color.red_100,
      text: "Chưa thanh toán",
    },
    {
      color: Color.green_100,
      text: "Đã thanh toán",
    },
  ];
  return (
    <View
      style={{ ...styles.container, borderColor: STATUS_DATA[status].color }}
    >
      <Text style={{ ...TextStyle.label, color: STATUS_DATA[status].color }}>
        {STATUS_DATA[status].text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    paddingHorizontal: 5,
    backgroundColor: Color.white_100,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
});
