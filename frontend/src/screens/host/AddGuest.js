import React, {useState, useEffect} from "react";
import { View, Button, Text, StyleSheet, Alert } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as GET from '../../services/GET'
import * as Cache from '../../services/Cache'
export function AddGuest({ route, navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    GET.getGuestInfo(data).then(re => {
      Cache.rm('QRDetail')
      Cache.set('QRDetail', re.data)
      handle()
    }).catch(err => console.log(err))
  };

  if (hasPermission === null) {
    Alert.alert('Cho phép sử dụng máy ảnh?')
  }
  if (hasPermission === false) {
    Alert.alert('Không được cấp phép')
  }
  
  const fromRoom = route.params.fromRoom;
  const roomName = route.params.roomName;
  const houseName = route.params.houseName;
  const handle = () => {
    fromRoom ? navigation.navigate("GuestDetail", { fromRoom: fromRoom, roomName: roomName, houseName: houseName })
    : navigation.navigate("GuestDetail", {})
  };
  return (
    <View style={styles.center}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      {/* <Button
        title="Quét QR"
        onPress={() => handle()}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
