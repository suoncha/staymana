import { StyleSheet, Pressable, Text, View } from "react-native";
import { ButtonType, Color, ScreenSize, TextStyle } from "../../utils";
import { ButtonHalfWidth } from "../button/ButtonHalfWidth";
import { ButtonFullWidth } from "../button/ButtonFullWidth";

export const ModalNofDetail = (props) => {
    const { title, time, content } = props;

    const closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }

    return (
    <Pressable style={styles.container}>
        <View style={styles.modal}>
            <View style={styles.container}>
              <View style={{marginHorizontal: ScreenSize.width * ( 24 / 370 )}}>
                <Text style={TextStyle.h3}>{title}</Text>
                <View style={{paddingTop: ScreenSize.height * 0.01}}></View>
                <Text style={TextStyle.h4}>{'Thời gian: ' + time}</Text>
                <Text style={TextStyle.h4}>{'Từ: Hệ thống'}</Text>
                <Text style={TextStyle.h4}>{'Nội dung: ' + content}</Text>
              </View>
            </View>  
            <View style={styles.container}>
                <View style={styles.buttonView}>
                    <ButtonHalfWidth type={ButtonType.OUTLINE} content='Đánh dấu chưa đọc' onPress={() => closeModal(false, 'leftValue')}></ButtonHalfWidth>
                    <ButtonHalfWidth type={ButtonType.RED} content='Xóa thông báo' onPress={() => closeModal(false, 'rightValue')}></ButtonHalfWidth>
                </View>
                <View style={{paddingTop: ScreenSize.height * 0.01}}>
                    <ButtonFullWidth type={ButtonType.RED} content='Đóng' onPress={() => closeModal(false, 'bottomValue')}></ButtonFullWidth>
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
