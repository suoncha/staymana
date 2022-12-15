// Screen
import React, {useState} from "react";
import {Image, ScrollView, View, Text, Pressable} from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import {ScreenSize, Color, TextStyle} from "../../utils";
import {ButtonFullWidth, InputPassword, InputText} from '../../components'

export function LoginScreen({navigation}) {
    const [loading, setLoading] = useState(false);
    setTimeout(() => {
        setLoading(true);
    }, 2000);
    
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <AnimatedSplash
            isLoaded={loading}
            logoImage={require("../../images/splash.png")}
            backgroundColor={"#ffffff"}
            logoHeight={ScreenSize.width * 0.8}
            logoWidth={ScreenSize.height * 0.8}
        >
            <ScrollView style={{backgroundColor: Color.white_100}}>
                <View style={{alignItems: "center", paddingVertical: ScreenSize.height * 0.15}}>
                    <View style={{alignItems: "center",}}>

                        <Image
                            source={require("../../images/loginScreen.png")}
                            style={{width: ScreenSize.width * 0.67, height: ScreenSize.width * 0.4}}
                        ></Image>
                        <View style={{padding: ScreenSize.height * 0.02}}></View>
                        <Image
                            source={require("../../images/logoTextOnly.png")}
                            style={{width: ScreenSize.width * 0.68, height: ScreenSize.width * 0.12}}
                        ></Image>

                    </View>
                    <InputText title="Số điện thoại" allowOutput={true} output={setUsername}
                               placeholder="Nhập số điện thoại" rightIcon={username == '' ? '' : 'check-circle-outline'}
                               keyboardType="numeric"></InputText>
                    <InputPassword title='Mật khẩu' allowOutput={true} output={setPassword}></InputPassword>
                    <View style={{
                        marginVertical: ScreenSize.height * 0.01,
                        marginHorizontal: ScreenSize.width * 0.08,
                        flexDirection: 'row'
                    }}>
                        <View style={{flex: 1, flexDirection: 'row'}}>

                            <Text style={{...TextStyle.h3, color: Color.grey_100}}>Nhớ mật khẩu </Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
                                <Text style={{...TextStyle.h3, color: Color.primary_100}}>Quên mật khẩu</Text>
                            </Pressable>
                        </View>
                    </View>
                    <ButtonFullWidth content='Đăng nhập' onPress={() => {
                        if (username === "" || password === "")
                            Alert.alert("Vui lòng nhập đầy đủ thông tin!");
                        else
                            navigation.navigate("LoginRole", {username: username, password: password})
                    }}></ButtonFullWidth>

                    <View style={{marginTop: ScreenSize.height * 0.02, flexDirection: 'row'}}>
                        <Text style={{...TextStyle.h3, color: Color.grey_100}}>Chưa có tài khoản? </Text>
                        <Pressable onPress={() => navigation.navigate("SignUp")}>
                            <Text style={{...TextStyle.h3, color: Color.primary_100}}>Đăng ký</Text>
                        </Pressable>
                    </View>

                </View>

            </ScrollView>
        </AnimatedSplash>
    );
}