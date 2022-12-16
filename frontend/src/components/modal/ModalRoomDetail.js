import { StyleSheet, Pressable, Text, View } from "react-native";
import { ButtonType, Color, ScreenSize, TextStyle } from "../../utils";
import { ButtonHalfWidth } from "../button/ButtonHalfWidth";
import { ButtonFullWidth } from "../button/ButtonFullWidth";

export const ModalRoomDetail = (props) => {
    const { roomName, roomAddress, roomSize, roomCost } = props;

    const closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }

    return (
    <Pressable style={styles.container}>
        <View style={styles.modal}>
            <View style={styles.container}>
              <View style={{marginHorizontal: ScreenSize.width * ( 10 / 370 )}}>
                <Text style={TextStyle.h3}>{'Chi tiết phòng trọ'}</Text>
                <View style={{paddingTop: ScreenSize.height * 0.01}}></View>
                <Text style={TextStyle.h4}>{'Tên: ' + roomName}</Text>
                <Text style={TextStyle.h4}>{'Địa chỉ: ' + roomAddress}</Text>
                <Text style={TextStyle.h4}>{'Diện tích phòng: ' + roomSize + ' m2'}</Text>
                <Text style={TextStyle.h4}>{'Giá thuê: ' + roomCost + ' đ'}</Text>
              </View>
            </View>  
            <View style={styles.container}>
                <View style={{paddingTop: ScreenSize.height * 0.05}}>
                    <ButtonFullWidth type={ButtonType.RED} content='Đóng' onPress={() => closeModal(false, 'leftValue')}></ButtonFullWidth>
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
