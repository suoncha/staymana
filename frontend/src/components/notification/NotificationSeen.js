import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Color, ScreenSize, TextStyle } from "../../utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

export const NotificationSeen = (props) => {
  const { userImg, content, time, onPress } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <View style={styles.content}>
            <Avatar.Image
                size={(40 / 375) * ScreenSize.width}
                source={{uri: userImg}}
            />
            <View style={{paddingLeft: ScreenSize.width * 0.04}}>
                <Text style={styles.text}>{content}</Text>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="clock-outline" size={ScreenSize.width * 0.05}></MaterialCommunityIcons>
                    <View style={{paddingLeft: ScreenSize.width * 0.01}}>
                        <Text style={styles.text}>{time}</Text>
                    </View>
                </View>              
            </View>
        </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    width: (327 / 375) * ScreenSize.width,
    backgroundColor: Color.white_100,
    paddingVertical: (13 / 812) * ScreenSize.height,
  },
  content: {
    paddingLeft: ScreenSize.width * 0.03,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: Color.dark_100,
    width: (251 / 375) * ScreenSize.width,
  },
});
