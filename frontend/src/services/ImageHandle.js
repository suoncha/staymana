import * as ImagePicker from "expo-image-picker"
import { Alert } from "react-native";
import firebase from '../config/firebase'

export const pickImage = async (props) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
        const src = {uri: result.assets[0].uri}
        props.output(src)
    }
};

export const uploadImage = async (props) => {
    console.log(props.img.uri)
    // const response = await fetch(props.img.uri)
    // const blob = await response.blob()
    // const filename = 'test.png'
    // var ref = firebase.storage().ref().child(filename).put(blob)

    // try {
    //     await ref
    // } catch (e) {
    //     console.log(e)
    // }
    // Alert.alert('Ảnh đã thay đổi!')
    
}