// Screen
import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Divider} from "react-native-paper";
import {Color, ScreenSize, TextStyle} from '../../utils'
import {ButtonFullWidth} from '../../components'
import * as POST from '../../services/POST'
import * as GET from "../../services/GET";
import * as Cache from '../../services/Cache'

export function LoginRole({route, navigation}) {
    const {username, password} = route.params;

    const handleSubmit = (role) => {
        const body = {
            role: role,
            tel: username,
            password: password
        }
        POST.signIn(body).then(res => {
            Cache.set('ACCESS_TOKEN', res["access_token"]);
            const user = {
                role: role ? 1 : 0,
                tel: username,
            }
            GET.getUserInfo(user).then((userInfo) => {
                Cache.rm('USER_INFO')
                Cache.set('USER_INFO', userInfo.data)
                if (role) navigation.navigate('HostStack')
                else navigation.navigate('GuestStack')
            })
        }).catch((error) => navigation.navigate('LoginFail'));
    }

    return (
        <View style={styles.container}>
            <View style={{...styles.container}}>
                <Image
                    source={require("../../images/logoImageOnly.png")}
                    style={{width: ScreenSize.width * 0.4, height: ScreenSize.width * 0.4}}
                ></Image>
                <Image
                    source={require("../../images/logoTextOnly.png")}
                    style={{width: ScreenSize.width * 0.68, height: ScreenSize.width * 0.12}}
                ></Image>
            </View>

            <View style={{paddingBottom: ScreenSize.height * 0.1}}>
                <Divider style={{color: Color.grey_100, height: ScreenSize.height * 0.001}}/>
                <View style={{padding: ScreenSize.height * 0.04}}></View>
                <Text style={TextStyle.h3}>Bạn muốn đăng nhập với tư cách là</Text>
                <View style={{padding: ScreenSize.height * 0.012}}></View>
                <ButtonFullWidth content='Chủ trọ'
                                 onPress={() => handleSubmit(true)}></ButtonFullWidth>
                <View style={{padding: ScreenSize.height * 0.015}}></View>
                <ButtonFullWidth content='Khách thuê trọ'
                                 onPress={() => handleSubmit(false)}></ButtonFullWidth>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },

    roleSelectView: {
        flex: 1,
        backgroundColor: Color.white_100,
        alignItems: 'center',
    },

});