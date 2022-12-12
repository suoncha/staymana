import { StyleSheet, Pressable, Text, View } from "react-native";
import { ButtonType, Color, ScreenSize, TextStyle } from "../../utils";
import { ButtonHalfWidth } from "../button/ButtonHalfWidth";
import { ButtonFullWidth } from "../button/ButtonFullWidth";
import { ButtonIcon } from "../button/ButtonIcon";

export const ModalConfirmation2 = (props) => {
    const { hostName } = props;

    const closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }

    return (
    <Pressable style={styles.container}>
        <View style={styles.modal}>
            <View style={styles.container}>
                <ButtonIcon type={ButtonType.DEFAULT} iconName="help" customSize={1.75}/>
            </View>
            <Text style={{...TextStyle.h3, textAlign: 'center', fontWeight: "500",}}>{hostName + " muốn thêm bạn vào phòng trọ của mình. Bạn có đồng ý không?"}</Text>
            <View style={styles.container}>
                <View style={styles.buttonView}>
                    <ButtonHalfWidth type={ButtonType.OUTLINE} content='Xem chi tiết' onPress={() => closeModal(false, 'leftValue')}></ButtonHalfWidth>
                    <ButtonHalfWidth type={ButtonType.RED} content='Hủy' onPress={() => closeModal(false, 'rightValue')}></ButtonHalfWidth>
                </View>
                <View style={{paddingTop: ScreenSize.height * 0.01}}>
                    <ButtonFullWidth type={ButtonType.RED} content='Xác nhận' onPress={() => closeModal(false, 'bottomValue')}></ButtonFullWidth>
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
