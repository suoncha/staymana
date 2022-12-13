import React, {useState} from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonAddImage, InputText, ButtonFullWidth, InputInformation } from "../../components"
import { Color } from "../../utils";
// Sử dụng Modal
import { Modal } from "react-native";
import { ModalConfirmation } from "../../components";

export function CreateRoom({ route, navigation }) {
  // Hiển thị và lấy thông tin từ Modal
  // Vô Modal Component đọc button value để xử lý theo output trả về
  // VD: ModalConfirmation: 
  // - bấm nút trái: modalOutput == leftValue
  // - bấm nút phải: modalOutput == rightValue
  const [showModal, setShowModal] = useState(false)
  const [modalOutput, getModalOutput] = useState()

  const { fromHouse } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} 
      style={{ backgroundColor: Color.white_100}}
    >
      <View style={styles.center}>
      <ButtonAddImage style={styles.addImage}/>
      <View>
        <View style={styles.input}>
          <InputText title="Tên phòng trọ" placeholder="Nhập tên phòng trọ" rightIcon='pencil-outline'></InputText>
        </View>
        <View style={styles.input}>
          <InputText title="Diện tích phòng" placeholder="Nhập diện tích (m2)" rightIcon='pencil-outline' keyboardType="numeric" unit="m2"></InputText>
        </View>
        <View style={styles.input}>
          <InputText title="Giá thuê phòng" placeholder="Nhập giá thuê (đ)" rightIcon='pencil-outline' keyboardType="numeric" unit="đ"></InputText>
        </View>
        <View style={styles.input}>
          {fromHouse ?
            <InputInformation title="Nhà trọ" information={fromHouse && route.params.houseName || "Bạn chưa nhập tên nhà trọ"}/>
          : <InputText title="Nhà trọ" placeholder="Nhập tên nhà trọ"></InputText>
          }      
        </View>
      </View>

      {/* Mở modal */}
      <ButtonFullWidth content="Tạo" onPress={() => setShowModal(true)} />

      {/* Tạo modal */}
      <Modal
          transparent={true}
          visible={showModal}
          animationType='slide' // optional
        >
          {/* Nhét Modal component */}
          <ModalConfirmation 
            changeModalVisible={setShowModal} setData={getModalOutput} // Bắt buộc
            content="Chắc chưa?" leftButton="Ừa" rightButton="Hong" // Hiển thị
          />
      </Modal>

    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    marginBottom: 24,
  },
  addImage: {
    margin: 50,
  }
});
