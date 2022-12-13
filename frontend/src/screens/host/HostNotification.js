import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import { Color, ScreenSize, TextStyle, ButtonType } from "../../utils";
import { NotificationCard, ButtonSmall } from "../../components";

const oneMin = 60 * 1000
const oneHour = oneMin * 60
const oneDay = oneHour * 24

const nofList = [
  {
    userImg: "https://thietkenhadepmoi.com/wp-content/uploads/2021/05/mau-nha-1-tret-1-lau-dep-9633.jpg",
    content: "Nguyễn Tuấn Minh đã thanh toán một hóa đơn",
    time: new Date().getTime() - 55 * 1000, // 55 second
    isRead: false,
  },
  {
    userImg: "https://thietkenhadepmoi.com/wp-content/uploads/2021/05/mau-nha-1-tret-1-lau-dep-9633.jpg",
    content: "Nguyễn Tuấn Minh đã thanh toán một hóa đơn",
    time: new Date().getTime() - 15 * oneMin, // 15 minute
    isRead: false,
  },
  {
    userImg: "https://thietkenhadepmoi.com/wp-content/uploads/2021/05/mau-nha-1-tret-1-lau-dep-9633.jpg",
    content: "Nguyễn Tuấn Minh đã thanh toán một hóa đơn",
    time: new Date().getTime() - 3 * oneHour, // 3 hour
    isRead: true,
  },
  {
    userImg: "https://thietkenhadepmoi.com/wp-content/uploads/2021/05/mau-nha-1-tret-1-lau-dep-9633.jpg",
    content: "Nguyễn Tuấn Minh đã trễ hạn thanh toán một hóa đơn",
    time: new Date().getTime() - 16 * oneHour, // 16 hour
    isRead: false,
  },
  {
    userImg: "https://kfa.vn/wp-content/uploads/2020/05/nha-dep-hien-dai.jpg",
    content: "Lê Long Phi đã thanh toán một hóa đơn",
    time: new Date().getTime() - 1 * oneDay, // 1 day
    isRead: true,
  },
  {
    userImg: "https://xaydungso.vn/webroot/img/images/thiet-ke-nha-2-tang-chu-l.jpg",
    content: "Ngô Thị Hà Bắc đã thanh toán một hóa đơn",
    time: new Date().getTime() - 3 * oneDay, // 3 day
    isRead: true,
  },
  {
    userImg: "https://xaydungso.vn/webroot/img/images/thiet-ke-nha-2-tang-chu-l.jpg",
    content: "Ngô Thị Hà Bắc đã thanh toán một hóa đơn",
    time: new Date().getTime() - 25 * oneDay, // 25 day
    isRead: false,
  },
]

const filterTab = [
  {
    status: 'Tất cả'
  },
  {
    status: 'Chưa đọc'
  }
]

export function HostNotification({navigation}) {
  const [status, setStatus] = useState('Tất cả')

  const setStatusFilter = status => {
    setStatus(status)
  }

  return (
    <SafeAreaView style={{ backgroundColor: Color.white_100, height: "100%" }}>
      <ScrollView>
        <View style={{flexDirection: 'row', marginHorizontal: (24 / 375) * ScreenSize.width}}>
          {
            filterTab.map(e => (
              <ButtonSmall type={status == e.status ? ButtonType.DEFAULT : ButtonType.OUTLINE} content={e.status} onPress={() => setStatusFilter(e.status)}></ButtonSmall>
            ))
          }
        </View>
        <View style={{ marginHorizontal: (24 / 375) * ScreenSize.width }}>
            <View style={{ marginVertical: (16 / 812) * ScreenSize.height, }}>
              <Text style={TextStyle.h3}>Trong ngày</Text>
            </View>
            {nofList.filter(newNof => new Date() - newNof.time < oneDay)
              .filter(readNof => status == 'Chưa đọc' ? readNof.isRead == false : readNof)
              .map(nof => (
              <NotificationCard userImg={nof.userImg} content={nof.content} time={nof.time} isRead={nof.isRead}/>
            ))}
            <View style={{padding: ScreenSize.height * 0.01}}></View>
            <Divider color={Color.grey_20} height={1} />
            <View style={{ marginVertical: (16 / 812) * ScreenSize.height, }}>
              <Text style={TextStyle.h3}>Trước đó</Text>
            </View>
            {nofList.filter(oldNof => new Date() - oldNof.time >= oneDay)
              .filter(readNof => status == 'Chưa đọc' ? readNof.isRead == false : readNof)
              .map(nof => (
              <NotificationCard userImg={nof.userImg} content={nof.content} time={nof.time} isRead={nof.isRead}/>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}