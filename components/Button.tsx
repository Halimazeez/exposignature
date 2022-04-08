import React from "react";
import { ViewStyle, Text, TouchableHighlight, TextStyle } from "react-native";

const BUTTON_STYLE: ViewStyle = {
  padding: 10,
  backgroundColor: "#2a6bcc",
  borderColor: "white",
  borderRadius: 10,
  borderWidth: 1
};

const TEXT_STYLE: TextStyle = {
  fontSize: 18,
  color: "white"
};

type ButtonProps = {
  onPress?: () => void;
  backgroundColor?: ViewStyle["backgroundColor"];
  children?: string | JSX.Element | JSX.Element[];
};

const Button = (props: ButtonProps) => {
  // set background color if specified in props or default to white
  const btnStyle = props.backgroundColor
    ? [BUTTON_STYLE, { backgroundColor: props.backgroundColor }]
    : BUTTON_STYLE;

  return (
    <TouchableHighlight onPress={props.onPress} style={btnStyle}>
      <Text style={TEXT_STYLE}>{props.children}</Text>
    </TouchableHighlight>
  );
};

export default Button;
