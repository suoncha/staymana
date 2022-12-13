import * as React from "react";
import { SafeAreaView, Text, View, Pressable } from "react-native";
import OTPInput from "react-native-otp";
import { Color, TextStyle, ScreenSize } from "../../utils";

export const InputOtp = () => {
  const [OTP, setOTP] = React.useState("");
  
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "column", marginBottom: 26 }}>
        <View style={{ marginBottom: 4 }}>
          <Text style={TextStyle.h2}>Xác thực số điện thoại</Text>
        </View>
        <Text style={[TextStyle.h4, { color: Color.grey_100 }]}>
          Nhập mã OTP được gửi đến số điện thoại của bạn
        </Text>
      </View>
      <OTPInput
        value={OTP}
        onChange={(otp) => setOTP(otp)}
        tintColor={Color.primary_40}
        offTintColor={Color.grey_40}
        cellStyle={{
          width: (58 / 375) * ScreenSize.width,
          height: 70,
          borderRadius: 8,
          fontSize: 30,
          backgroundColor: Color.white_100,
        }}
        otpLength={5}
      />
      <View style={{ marginTop: ScreenSize.height * 0.02, flexDirection: 'row' }}>
        <Text style={{...TextStyle.h4, color: Color.grey_100 }}> Bạn chưa nhận được mã OTP? </Text>
        <Pressable>
          <Text style={{...TextStyle.h4, color: Color.primary_100}}>Gửi lại mã</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
