import React, {useState} from "react";
import {Pressable, ScrollView, StyleSheet, Text, View,} from "react-native";
import {ButtonOption, CardBill,} from "../../components";
import {BillType, Color, customSize, ScreenSize, TextStyle} from "../../utils";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const roomBills = [
    {
        type: BillType.General,
        paid: 0,
        time: "10/2022",
        total: 7770000,
        due: "05/11/2022",
        room: "101",
        oldElectricNumber: 333,
        oldWaterNumber: 333,
        newElectricNumber: 444,
        newWaterNumber: 444,
        electricUnitPrice: 2,
        waterUnitPrice: 1,
        createdDate: '1/1/2022'
    },
    {
        type: BillType.Maintenance,
        paid: 1,
        total: 500000,
        name: "Sửa chữa bóng đèn",
        time: "10/2022",
        due: "05/11/2022",
        room: "102",
        createdDate: '1/1/2022'
    },
];

export function GuestViewRoom({route, navigation}) {
    const [selected, setSelected] = useState(0);
    const buttonColor = (index) => {
        return index === selected ? Color.primary_100 : Color.white_100;
    };
    const textColor = (index) => {
        return index === selected ? Color.white_100 : Color.primary_100;
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={{...TextStyle.h3}}>Nhà Trọ Hoa Mai</Text>
                <View style={{flexDirection: "row"}}>
                    <MaterialCommunityIcons name={"map-marker-outline"} size={ScreenSize.width * 0.032}
                                            color={Color.grey_100}
                                            style={{marginTop: 3, marginRight: 3}}></MaterialCommunityIcons>
                    <Text style={[TextStyle.bodySmall, {color: Color.grey_100}]}>97 Lý Thường Kiệt, phường 12, quận 3,
                        TP.HCM</Text>
                </View>
                <View style={styles.func}>
                    <ButtonOption iconName="key-variant" content="Nội quy nhà trọ"/>
                    <View style={{height: (12 / 812) * ScreenSize.height}}></View>
                    <ButtonOption

                        iconName="home-city-outline"
                        content="Thông tin lưu trú"
                    />
                    <View style={{height: (12 / 812) * ScreenSize.height}}></View>
                    <ButtonOption iconName="forum-outline" content="Yêu cầu sữa chữa"/>
                </View>
            </View>

            <View style={{marginTop: customSize(12)}}>
                <Text style={{...TextStyle.h3}}>Danh sách hóa đơn</Text>
                <View style={{flexDirection: "row", marginTop: customSize(12)}}>
                    <Pressable onPress={() => setSelected(0)}>
                        <View
                            style={{
                                ...styles.buttonGroup,
                                width: customSize(85),
                                backgroundColor: buttonColor(0),
                                borderTopLeftRadius: 4,
                                borderBottomLeftRadius: 4,
                                borderWidth: 1,
                            }}
                        >
                            <Text style={{...TextStyle.h4, color: textColor(0)}}>
                                Tất cả
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => setSelected(1)}>
                        <View
                            style={{
                                ...styles.buttonGroup,
                                backgroundColor: buttonColor(1),
                                width: customSize(129),
                                borderTopWidth: 1,
                                borderBottomWidth: 1
                            }}
                        >
                            <Text style={{...TextStyle.h4, color: textColor(1)}}>
                                Chưa thanh toán
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => setSelected(2)}>
                        <View
                            style={{
                                ...styles.buttonGroup,
                                width: customSize(113),
                                backgroundColor: buttonColor(2),
                                borderTopRightRadius: 4,
                                borderBottomRightRadius: 4,
                                borderWidth: 1,
                            }}
                        >
                            <Text style={{...TextStyle.h4, color: textColor(2)}}>
                                Đã thanh toán
                            </Text>
                        </View>
                    </Pressable>
                </View>
                <View style={{marginBottom: customSize(24)}}>
                    {selected === 0
                        ? roomBills.map((item) => <CardBill bill={item} isRoomBill={true}/>)
                        : selected === 1
                            ? roomBills
                                .filter((item) => item.paid === 0)
                                .map((item) => <CardBill bill={item} isRoomBill={true}/>)
                            : roomBills
                                .filter((item) => item.paid === 1)
                                .map((item) => <CardBill bill={item} isRoomBill={true}/>)}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingHorizontal: (24 / 375) * ScreenSize.width,
        paddingTop: customSize(12),
        backgroundColor: Color.white_100,
        height: "100%",
    },
    func: {
        marginVertical: customSize(12),
    },
    buttonGroup: {
        justifyContent: "center",
        alignItems: "center",
        height: customSize(24),
        borderColor: Color.primary_100,
    },
});
