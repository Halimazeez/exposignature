import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import Button from "../components/Button";

const CONTAINER_STYLE: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};
const TEXT_STYLE: TextStyle = {
  textAlign: "center"
};

type HomeProps = {
  signOut: () => void;
};

export default function Home(props: HomeProps) {
  return (
    <View style={CONTAINER_STYLE}>
      <Text style={TEXT_STYLE}>Authenticated</Text>
      <Button onPress={props.signOut}>Sign Out</Button>
    </View>
  );
}
