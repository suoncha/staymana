import {Color, currencyFormat, customSize, TextStyle,} from "../../utils";
import {StyleSheet, Text, View} from "react-native";

export const BillDetailCard = (props) => {
    const {title, oldNumber, newNumber, unitPrice} = props;

    return (
        <View style={styles.container}>
            <View style={styles.line}>
                <Text style={{...TextStyle.h3, color: Color.primary_100}}>
                    {title}
                </Text>
            </View>
            <View style={styles.detail}>
                <View style={styles.detailNumber}>
                    <Text style={styles.text}>Chỉ số cũ</Text>
                    <Text style={{...TextStyle.label, textAlign: "center"}}>{oldNumber}</Text>
                </View>
                <View style={styles.detailNumber}>
                    <Text style={styles.text}>Chỉ số mới</Text>
                    <Text style={{...TextStyle.label, textAlign: "center"}}>{newNumber}</Text>
                </View>
                <View style={styles.detailNumber}>
                    <Text style={styles.text}>Số tiêu thụ</Text>
                    <Text style={{...TextStyle.label, textAlign: "center"}}>{newNumber - oldNumber}</Text>
                </View>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>Đơn giá</Text>
                <Text style={{...styles.text}}>
                    {currencyFormat(unitPrice)}
                </Text>
            </View>
            <View style={styles.line}>
                <Text style={styles.text}>Thành tiền</Text>
                <Text style={{...styles.text, color: Color.red_100, fontWeight: "bold"}}>
                    {currencyFormat(unitPrice * (newNumber - oldNumber))}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        paddingHorizontal: customSize(15),
        paddingVertical: customSize(8),
        height: customSize(136),
        backgroundColor: Color.white_100,
        borderWidth: 1,
        borderColor: Color.primary_100,
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: customSize(12),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    detail: {
        marginHorizontal: customSize(32),
        height: customSize(45),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    line: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {...TextStyle.h4, fontWeight: "400"},
});
