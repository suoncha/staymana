import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Color, customSize, ScreenSize, TextStyle} from "../../utils";

export const ButtonMomo = (props) => {
    const {onPress} = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <View style={styles.content}>
                <Image source={require("../../images/momo.png")} style={styles.image}/>
                <Text style={styles.text}>Thanh toán bằng ví Momo</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60,
        width: (279 / 375) * ScreenSize.width,
        height: customSize(48),
        backgroundColor: Color.primary_100,
        paddingVertical: (13 / 812) * ScreenSize.height,
        borderWidth: 1,
        borderColor: Color.primary_100,
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    image: {
        width: (36 / 375) * ScreenSize.width,
        height: (36 / 375) * ScreenSize.width,
        marginHorizontal: (12 / 375) * ScreenSize.width,
    },
    text: {
        ...TextStyle.h3,
        color: Color.white_100,
    },
});
