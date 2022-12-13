import * as React from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Color, TextStyle, ScreenSize } from "../../utils";

export const InputText = (props) => {
  const { title, placeholder, rightIcon, onPress, defaultValue } = props;
  const [text, setText] = React.useState();
  const [filledFlag, setFilledFlag] = React.useState(false);
  return (
    <TextInput
      label={
        <Text style={{ ...TextStyle.h3, color: Color.dark_100 }}>{title}</Text>
      }
      placeholder={placeholder}
      placeholderTextColor={Color.grey_100}
      mode="flat"
      defaultValue={props.unit && defaultValue && defaultValue + " " + props.unit || defaultValue}
      value={props.unit && (filledFlag && text + " " + props.unit) || text}
      activeUnderlineColor={Color.grey_100}
      outlineColor={Color.white_100}
      activeOutlineColor={Color.white_100}
      onChangeText={(text) => setText(text)}
      onFocus={() => setFilledFlag(false)}
      onEndEditing={() => {
        if (text == "") {
          setFilledFlag(false);
        } else {
          setFilledFlag(true);
        }
      }}
      editable={!props.readonly}
      keyboardType={props.keyboardType}
      style={{
        ...TextStyle.h3,
        fontWeight: "400",
        width: (327 / 375) * ScreenSize.width,
        backgroundColor: Color.white_100,
      }}
      right={<TextInput.Icon name={rightIcon} onPress={onPress} />}
    />
  );
};
