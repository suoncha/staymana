import { ScreenSize, TextStyle } from "../utils";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Avatar } from "react-native-paper";

export const CardService = (props) => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={(80 / 375) * ScreenSize.width}
        source={props.image}
        style={styles.image}
      />
      <Text style={{ ...TextStyle.h3, ...styles.text }}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: (135 / 375) * ScreenSize.width,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  image: {
    alignSelf: "center",
    marginTop: 14,
  },
  text: {
    width: "100%",
    textAlign: "center",
    marginTop: 11,
    marginBottom: 14,
  },
});
