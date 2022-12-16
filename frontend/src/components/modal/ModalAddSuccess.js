import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { ButtonType, Color, ScreenSize, TextStyle } from "../../utils";
import { ButtonHalfWidth } from "../button/ButtonHalfWidth";

export const ModalAddSuccess = (props) => {
    const closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }

    return (
    <Pressable style={styles.container}>
        <View style={styles.modal}>
            <View style={styles.container}>
                <Image
                    source={require("../../images/addSuccess.png")}
                    style={{
                        height: ScreenSize.width * 0.2,
                        width: ScreenSize.width * 0.2,
                    }}
                />
            </View>
            <Text style={{...TextStyle.h3, textAlign: 'center', fontWeight: "500",}}>Thêm người thuê thành công</Text>
            <View style={styles.container}>
                <View style={styles.buttonView}>
                    <ButtonHalfWidth type={ButtonType.OUTLINE} content='Đóng' onPress={() => closeModal(false, 'leftValue')}></ButtonHalfWidth>
                </View>
            </View>
        </View>
    </Pressable>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },

  modal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white_100,
    borderRadius: 20,
    width: ScreenSize.width,
    height: (368 / 812) * ScreenSize.height,
  },
});
