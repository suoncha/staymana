import React from "react";
import { View, SafeAreaView, Text, ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import { Color, ScreenSize, TextStyle } from "../../utils";
import { NotificationUnseen, NotificationSeen } from "../../components";
export function HostNotification() {
  return (
    <SafeAreaView style={{ backgroundColor: Color.white_100, height: "100%" }}>
      <ScrollView>
        <View style={{ marginHorizontal: (24 / 375) * ScreenSize.width }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: (16 / 812) * ScreenSize.height,
              }}
            >
              <Text style={TextStyle.h3}>Trong ngày</Text>
            </View>
            <NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Nguyễn Tuấn Minh đã thanh toán một hóa đơn" time="3 giờ trước"></NotificationSeen>
            <Divider style={{ color: Color.grey_100 }} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: (16 / 812) * ScreenSize.height,
              }}
            >
              <Text style={TextStyle.h3}>Trước đó</Text>
            </View>
            <NotificationUnseen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Lê Long Phi đã thanh toán một hóa đơn" time="1 ngày trước"></NotificationUnseen>
            <NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen>
            <NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen><NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen><NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen><NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen><NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen><NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen><NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen><NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen><NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen><NotificationSeen userImg="https://staymana.s3.ap-southeast-1.amazonaws.com/sample-avatar.jpg" content="Ngô Thị Hà Bắc đã thanh toán một hóa đơn" time="3 ngày trước"></NotificationSeen>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}