import { StatusBar } from "expo-status-bar";
import React from "react";
import { ViewStyle, View } from "react-native";
import { Amplify } from "@aws-amplify/core";

import AppNavigation from "./navigation";
import config from "./aws-exports";

Amplify.configure(config);

export default function App() {
  return (
    <View style={CONTAINER_STYLE}>
      <AppNavigation />
      <StatusBar style="auto" />
    </View>
  );
}

const CONTAINER_STYLE: ViewStyle = {
  flex: 1
};
