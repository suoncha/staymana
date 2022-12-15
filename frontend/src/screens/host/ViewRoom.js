import React from "react";
import {ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {ButtonAddGuess, ButtonDropDown, InputText, SmallCard} from "../../components";
import {Color, TextStyle} from "../../utils"
import {getUserInfoById} from "../../services";

const guestList = [
    {
        avatar: "https://kynguyenlamdep.com/wp-content/uploads/2022/08/anh-trai-dep-deo-kinh-600x600.jpg",
        name: "Tún Mưn",
    },
    {
        avatar: "https://cf.shopee.vn/file/6d56277efff5005f30beab17a123eef8",
        name: "Hoàn Zũ",
    },
];

export function ViewRoom({route, navigation}) {
    const name = route.params.name;
    const houseName = route.params.houseName;
    const area = route.params.area;
    const price = route.params.price;
    const memberId = route.params.memberId;
    const [roomInfoStatus, setRoomInfoStatus] = React.useState(true);
    const [guestListStatus, setGuestListStatus] = React.useState(true);
    const [guestList, setGuestList] = React.useState([]);
    memberId.map((_id) => {
        const data = {
            _id: _id
        }
        getUserInfoById(data).then((res) => setGuestList([{...guestList, ...res.data}])).catch((error) => console.log(error))
    })
    if (!guestList)
        return <ActivityIndicator/>;
    return (
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                    style={{backgroundColor: Color.white_100}}>
            <View style={styles.center}>
                <Pressable onPress={() => setRoomInfoStatus(!roomInfoStatus)} style={styles.dropDownButton}>
                    <ButtonDropDown icon="home-outline" title="Thông tin nhà trọ"/>
                </Pressable>
                {roomInfoStatus &&
                    <View>
                        <View style={styles.input}>
                            <InputText title="Tên phòng trọ" placeholder="Nhập tên phòng trọ" defaultValue={name}
                                       rightIcon='pencil-outline'></InputText>
                        </View>
                        <View style={styles.input}>
                            <InputText title="Diện tích phòng" placeholder="Nhập diện tích phòng trọ"
                                       defaultValue={area} unit="m2" keyboardType="numeric"
                                       rightIcon='pencil-outline'></InputText>
                        </View>
                        <View style={styles.input}>
                            <InputText title="Giá thuê phòng" placeholder="Nhập giá thuê" defaultValue={price} unit="đ"
                                       keyboardType="numeric" rightIcon='pencil-outline'></InputText>
                        </View>
                        <View style={styles.inline}>
                            <Pressable onPress={() =>
                                navigation.navigate("ViewBill", {name: name, fromHouse: false})
                            }>
                                <Text style={[TextStyle.h3, {color: Color.primary_100}]}>Xem hóa đơn</Text>
                            </Pressable>
                            <Pressable onPress={() =>
                                navigation.goBack()
                            }>
                                <Text style={[TextStyle.h3, {color: Color.red_100}]}>Xóa phòng trọ</Text>
                            </Pressable>
                        </View>
                    </View>
                }
                <Pressable onPress={() => setGuestListStatus(!guestListStatus)} style={styles.dropDownButton}>
                    <ButtonDropDown icon="account-outline" title="Danh sách người thuê"/>
                </Pressable>
                {guestListStatus &&
                    <View style={styles.guestContainer}>
                        {guestList.map(guest =>
                            <SmallCard
                                avatar={guest.image}
                                name={guest.name}
                                onPress={() => navigation.navigate("ViewGuest", {
                                    name: guest.name,
                                    gender: guest.gender,
                                    dob: guest.dob.slice(0, 10),
                                    CCCD: guest.identityNumber,
                                    phone: guest.tel,
                                    email: guest.email ? guest.email : 'Không có'
                                })}
                            />
                        )}
                        <ButtonAddGuess
                            title="Thêm người"
                            onPress={() => navigation.navigate("AddGuest", {
                                fromRoom: true,
                                roomName: name,
                                houseName: houseName
                            })}
                        />
                    </View>
                }
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    guestContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 24,
        marginBottom: 12,
        marginTop: 24,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 12,
    },
    input: {
        marginTop: 12,
    },
    dropDownButton: {
        marginTop: 24,
    },
    inline: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
