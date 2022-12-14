import React, {useState} from "react";
import {Platform, StyleSheet, Text, View,} from "react-native";
import {ButtonHalfWidth, InputText} from "../../components";
import {BillType, ButtonType, Color, customSize, ScreenSize, TextStyle,} from "../../utils";
import {Dropdown} from "react-native-element-dropdown";
import {AntDesign} from "@expo/vector-icons";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export const getHouses = () => {
    return [
        {
            id: "1",
            avatar:
                "https://thietkenhadepmoi.com/wp-content/uploads/2021/05/mau-nha-1-tret-1-lau-dep-9633.jpg",
            name: "Nhà trọ Hoa Mai",
            address: "97 Lý Thường Kiệt, phường 12, quận 3, TP.HCM",
        },
        {
            id: "2",
            avatar: "https://kfa.vn/wp-content/uploads/2020/05/nha-dep-hien-dai.jpg",
            name: "Nhà trọ Hoa Đào",
            address: "48 Ba Tháng Hai, phường 11, quận 10, TP.HCM",
        },
        {
            id: "3",
            avatar:
                "https://xaydungso.vn/webroot/img/images/thiet-ke-nha-2-tang-chu-l.jpg",
            name: "Nhà trọ Hoa Cúc",
            address: "97 Lý Thường Kiệt, phường 12, quận 3, TP.HCM",
        },
        {
            id: "4",
            avatar:
                "https://static-images.vnncdn.net/files/publish/2022/11/29/nha-cap-4-1212.jpg?width=600",
            name: "Nhà trọ Hoa Cúc",
            address: "97 Lý Thường Kiệt, phường 12, quận 3, TP.HCM",
        },
        {
            id: "5",
            avatar:
                "https://arcviet.vn/wp-content/uploads/2020/03/mat-tien-nha-gac-lung-dep-3-1.jpg",
            name: "Nhà trọ Hoa Cúc",
            address: "97 Lý Thường Kiệt, phường 12, quận 3, TP.HCM",
        },
    ];
};

export const getRooms = () => {
    return [
        {
            id: "1",
            avatar:
                "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
            name: "Phòng 101",
        },
        {
            id: "2",
            avatar:
                "https://decordi.vn/wp-content/uploads/2021/05/noi-that-phong-ngu-nho-noi-that-Decordi.jpg",
            name: "Phòng 102",
        },
    ];
};

export function CreateBill({navigation}) {
    const [billType, setBillType] = useState("");
    const [houseId, setHouseId] = useState();
    const [roomId, setRoomId] = useState();
    const isGeneralBill = billType === BillType.General;

    return (
        <View style={styles.container}>
            <Text style={{...TextStyle.h3, marginVertical: customSize(12)}}>
                Nhập thông tin hóa đơn
            </Text>
            <KeyboardAwareScrollView>
                <View style={styles.inner}>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={Object.entries(BillType).map(([k, v]) => ({
                            value: v,
                            label: v,
                        }))}
                        labelField="label"
                        valueField="value"
                        placeholder="Chọn loại hóa đơn"
                        value={billType}
                        onChange={(item) => {
                            setBillType(item.value);
                        }}
                        // renderLeftIcon={() => (
                        //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        // )}
                    />
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={getHouses()}
                        labelField="name"
                        valueField="id"
                        placeholder="Chọn nhà trọ"
                        search
                        searchPlaceholder="Tìm nhà trọ ..."
                        value={houseId}
                        onChange={(item) => {
                            setHouseId(item);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color="black"
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={getRooms()}
                        disable={!houseId}
                        labelField="name"
                        valueField="id"
                        placeholder="Chọn phòng"
                        search
                        searchPlaceholder="Tìm phòng ..."
                        value={roomId}
                        onChange={(item) => {
                            setRoomId(item);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color="black"
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                    <InputText title="Tiêu đề" placeholder="Tiêu đề hóa đơn"/>
                    <InputText
                        title="Ngày hết hạn hóa đơn"
                        placeholder="Ngày hết hạn hóa đơn"
                        rightIcon="calendar-range"
                        onPress={() => alert("Hello")}
                    />
                    {isGeneralBill && (
                        <View>
                            <InputText
                                title="Chỉ số điện cũ"
                                placeholder="Chỉ số điện"
                                rightIcon="alarm-light-outline"
                                onPress={() => alert("Hello")}
                            />
                            <InputText
                                title="Chỉ số điện mới"
                                placeholder="Chỉ số điện"
                                rightIcon="alarm-light-outline"
                                onPress={() => alert("Hello")}
                            />
                            <InputText
                                title="Đơn giá điện"
                                placeholder="đ"
                                rightIcon="currency-usd"
                                onPress={() => alert("Hello")}
                            />
                            <InputText
                                title="Chỉ số nước cũ"
                                placeholder="Chỉ số nước"
                                rightIcon="water"
                                onPress={() => alert("Hello")}
                            />

                            <InputText
                                title="Chỉ số nước mới"
                                placeholder="Chỉ số nước"
                                rightIcon="water"
                                onPress={() => alert("Hello")}
                            />
                            <InputText
                                title="Đơn giá nước"
                                placeholder="đ"
                                rightIcon="currency-usd"
                                onPress={() => alert("Hello")}
                            />
                        </View>
                    )}
                    <InputText
                        title="Số tiền"
                        placeholder="Số tiền phải trả"
                        rightIcon="currency-usd"
                        onPress={() => alert("Hello")}
                    />
                </View>
            </KeyboardAwareScrollView>
            <View
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{
                    marginTop: customSize(12),
                    marginBottom: customSize(48),
                    alignSelf: "center",
                }}
            >
                <View style={styles.action}>
                    <ButtonHalfWidth
                        type={ButtonType.DEFAULT}
                        content="Tạo"
                        onPress={() => navigation.goBack()}
                    />
                    <ButtonHalfWidth
                        type={ButtonType.RED}
                        content="Hủy"
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: (24 / 375) * ScreenSize.width,
        backgroundColor: Color.white_100,
        height: "100%",
        justifyContent: "space-between",
    },
    action: {
        flexDirection: "row",
        width: ScreenSize.width,
        paddingHorizontal: (24 / 375) * ScreenSize.width,
        justifyContent: "space-between",
    },
    dropdown: {
        height: 60,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        ...TextStyle.h3,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    inner: {
        justifyContent: "space-between"
    }
});
