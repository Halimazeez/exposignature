import React from "react";
import { Text, View, ViewStyle, TextStyle } from "react-native";
import Button from "../../components/Button";

const CONTAINER_STYLE: ViewStyle = {
  flex: 1,
  justifyContent: "center"
};

const CONTENT_STYLE: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
};

const TITLE_STYLE: TextStyle = {
  fontSize: 22,
  margin: 10,
  textTransform: "uppercase",
  textAlign: "center",
  marginBottom: 20,
  fontWeight: "800",
  color: "#000",
  padding: 15,
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 10
};

const BUTTON_STYLE: ViewStyle = {
  marginTop: 10
};

const Welcome = (navigation: any) => {
  return (
    <View style={CONTAINER_STYLE}>
      <View style={CONTENT_STYLE}>
        <Text style={TITLE_STYLE}>React Native Cognito Test</Text>
        <View>
          <Button onPress={() => navigation.navigation.navigate("SignIn")}>
            Sign In
          </Button>
        </View>
        <View style={BUTTON_STYLE}>
          <Button onPress={() => navigation.navigation.navigate("SignUp")}>
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
