import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, ScreenSize } from "../../utils";
import QRCode from 'react-native-qrcode-svg';
import * as Cache from '../../services/'

export function MyQR({ navigation }) {
const [qrCode, setQrCode] = useState()
Cache.get('USER_INFO').then((res) => setQrCode(JSON.parse(res).qrCode));
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: ScreenSize.height * 0.1 }}>
      <QRCode
        value={qrCode}
        size={ScreenSize.width * 0.5}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white_100,
      },
    })
