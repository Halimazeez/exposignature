import React from "react";
import { TextInput, TextInputProps, ViewStyle } from "react-native";

const INPUT_STYLES: ViewStyle = {
  height: 40,
  margin: "3%",
  padding: "3%",
  width: "94%",
  borderWidth: 1,
  borderColor: "lightgray",
  borderRadius: 5,
  backgroundColor: "#fff"
};

type InputProps = {
  value?: string;
  onChange?: (text: string) => void;
} & TextInputProps;

const Input = (props: InputProps) => (
  <TextInput
    style={INPUT_STYLES}
    onChangeText={props.onChange}
    value={props.value}
    placeholder={props.placeholder}
    autoFocus={props.autoFocus}
  />
);

export default Input;
