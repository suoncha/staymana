import {Pressable, StyleSheet, Text, View} from "react-native";
import {ButtonType, Color, customSize, ScreenSize, TextStyle} from "../../utils";
import {ButtonHalfWidth} from "../button/ButtonHalfWidth";
import {ButtonIcon} from "../button/ButtonIcon";

export const ModalConfirmation = (props) => {
    const {content, leftButton, rightButton, onPressOK} = props;

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
                <Text style={{...TextStyle.h3, textAlign: 'center', marginTop: customSize(48)}}>{content}</Text>
                <View style={styles.container}>
                    <View style={styles.buttonView}>
                        <ButtonHalfWidth type={ButtonType.OUTLINE} content={leftButton}
                                         onPress={onPressOK}></ButtonHalfWidth>
                        <ButtonHalfWidth type={ButtonType.RED} content={rightButton}
                                         onPress={() => closeModal(false, 'rightValue')}></ButtonHalfWidth>
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
        justifyContent: 'flex-end',
    },

    buttonView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },

    modal: {
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Color.white_100,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        width: ScreenSize.width,
        height: (368 / 812) * ScreenSize.height,
        paddingBottom: customSize(48)
    },
});
