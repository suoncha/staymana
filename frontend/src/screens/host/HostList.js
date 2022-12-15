import React, {useState} from "react";
import {ActivityIndicator, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Color, ScreenSize} from "../../utils";
import {HouseCard} from "../../components";
import * as Cache from '../../services/'
import {getHouseList} from '../../services/'

export function HostList({navigation}) {
    const [houseList, setHouseList] = useState();

    Cache.get('USER_INFO')
        .then((res) => {
            const data = {
                hostId: JSON.parse(res)._id
            }
            getHouseList(data).then((res) => setHouseList(res.data)).catch((error) => console.log(error))
        })
        .catch((error) => console.log(error));

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Nhà trọ của bạn</Text>
            </View>
            {!houseList ? <ActivityIndicator/> :
                <SafeAreaView>
                    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                                style={{paddingTop: 12, backgroundColor: Color.white_100}}>
                        {houseList.map(house => (
                            <Pressable onPress={() => navigation.navigate("ViewHouse", {name: house.name})}>
                                <HouseCard avatar={house.image} name={house.name} address={house.address}/>
                            </Pressable>
                        ))}
                        <View style={{height: ScreenSize.height * 0.32}}></View>
                    </ScrollView>
                </SafeAreaView>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        width: "100%",
        height: ScreenSize.height * 0.156,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: ScreenSize.height * 0.05,
    },
    headerText: {
        fontSize: ScreenSize.width * 0.06,
        fontWeight: "600",
        color: "black",
        alignSelf: "center",
    },
});
