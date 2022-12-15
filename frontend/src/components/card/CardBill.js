import {
  Color,
  currencyFormat,
  customSize,
  ScreenSize,
  TextStyle,
} from "../../utils";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusLabel } from "../StatusLabel";
import {useNavigation} from "@react-navigation/native";

export const CardBill = (props) => {
  const navigation = useNavigation();
  const { bill, isRoomBill } = props;

  return (
    <Pressable onPress={() => isRoomBill ? navigation.navigate("GuestViewBill", {title: "Hóa đơn " + bill.type + " - " + bill.time, data: bill}): null}>
      <View style={styles.container}>
        <View style={styles.line}>
          <Text style={{ ...TextStyle.h4 }}>
            {isRoomBill ? bill.type : bill.room} - {bill.time}
          </Text>
          <StatusLabel paid={bill.paid} />
        </View>
        <View style={{ height: customSize(14) }} />
        <View style={styles.line}>
          <Text style={styles.text}>Số tiền</Text>
          <Text style={{ ...styles.text, color: Color.red_100 }}>
            {currencyFormat(bill.total)}
          </Text>
        </View>
        <View style={{ height: customSize(8) }} />
        <View style={styles.line}>
          <Text style={styles.text}>Hạn thanh toán</Text>
          <Text style={styles.text}>{bill.due}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    paddingHorizontal: customSize(15),
    paddingVertical: customSize(8),
    height: (104 / 375) * ScreenSize.width,
    backgroundColor: Color.white_100,
    borderWidth: 1,
    borderColor: Color.primary_100,
    marginTop: (12 / 375) * ScreenSize.width,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: { ...TextStyle.h4, fontWeight: "500" },
});
