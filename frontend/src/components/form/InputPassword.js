import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Color, TextStyle, ScreenSize } from "../../utils";

export const InputPassword = (props) => {
  const { title, allowOutput } = props;
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const handleInput = (text) => {
    setPassword(text)
    if (allowOutput) props.output(text)
  }

  return (
    <KeyboardAvoidingView enabled>
      <TextInput
        label={
          <Text style={{ ...TextStyle.h3, color: Color.dark_100 }}>
            {title}
          </Text>
        }
        placeholder="Vui lòng nhập mật khẩu"
        placeholderTextColor={Color.grey_100}
        mode="flat"
        value={password}
        activeUnderlineColor={Color.grey_100}
        outlineColor={Color.primary_100}
        activeOutlineColor={Color.primary_100}
        onChangeText={(password) => handleInput(password)}
        style={{
          ...TextStyle.h3,
          fontWeight: "400",
          color: Color.green_100,
          width: (327 / 375) * ScreenSize.width,
          backgroundColor: Color.white_100,
        }}
        secureTextEntry={passwordVisibility}
        right={
          <TextInput.Icon
            name={rightIcon}
            onPress={() => handlePasswordVisibility()}
          />
        }
        autoCorrect={false}
      />
    </KeyboardAvoidingView>
  );
};
