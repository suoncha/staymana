import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {BillType, Color, currencyFormat, customSize, ScreenSize, TextStyle} from "../../utils";
import {BillDetailCard, ButtonMomo, StatusLabel} from "../../components";

const Summary = ({left, right}) => {
    return (
        <View style={styles.summary}>
            <Text style={{...TextStyle.h3}}>{left}</Text>
            <Text style={{...TextStyle.h3, color: Color.red_100}}>{right}</Text>
        </View>
    )
}

export function GuestViewBill({route, navigation}) {
    const title = route.params.title;
    const data = route.params.data;
    const isGeneralBill = data.type === BillType.General;
    return (
        <ScrollView style={styles.container}>
            <Text style={{...TextStyle.h3, textAlign: 'center'}}>{title}</Text>
            <Text style={{...TextStyle.h4, fontWeight: '500', textAlign: 'center', color: Color.dark_60}}>Ngày tạo hóa
                đơn: {data.createdDate}</Text>
            {isGeneralBill && <BillDetailCard title={"Điện (kWh)"} oldNumber={data.oldElectricNumber}
                                              newNumber={data.newElectricNumber} unitPrice={data.electricUnitPrice}/>}
            {isGeneralBill &&
                <BillDetailCard title={"Nước (m3)"} oldNumber={data.oldWaterNumber} newNumber={data.newWaterNumber}
                                unitPrice={data.waterUnitPrice}/>}
            {isGeneralBill && <Summary left={"Tiền phòng"} right={currencyFormat(3000000)}/>}
            {!isGeneralBill &&
                <View style={{...styles.summary, justifyContent: "flex-start"}}>
                    <Text style={{...TextStyle.h3}}>Mô tả: </Text>
                    <Text style={{...TextStyle.h3, fontWeight: "500"}}>{data.name}</Text>
                </View>}
            <Summary left={"Tổng tiền"} right={currencyFormat(data.total)}/>
            <Summary left={"Hạn thanh toán"} right={data.due}/>
            <View style={styles.summary}>
                <Text style={{...TextStyle.h3}}>Tình trạng hóa đơn</Text>
                <StatusLabel paid={data.paid}/>
            </View>
            {!data.paid && <View style={{marginVertical: customSize(16), alignItems: "center"}}>
                <ButtonMomo/>
            </View>}
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
    summary: {
        marginTop: customSize(12),
        marginHorizontal: customSize(12),
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
