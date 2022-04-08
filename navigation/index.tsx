import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Auth, CognitoUser } from "@aws-amplify/auth";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function AppLoad() {
  const [userToken, setuserToken] = useState<string | undefined>();
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    await Auth.currentAuthenticatedUser()
      .then(user => signIn(user))
      .catch((err: any) => {
        console.log("err signing in", err);
      });
    setloading(false);
  };

  const signOut = async () => {
    await Auth.signOut().catch(err => {
      console.log("ERROR: ", err);
    });
    setuserToken(undefined);
  };

  const signIn = async (user: any) =>
    setuserToken(user.signInUserSession.accessToken.jwtToken);

  let view: JSX.Element = <></>;

  if (loading) {
    view = (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  } else if (!userToken) {
    view = <AuthNavigator signIn={signIn} />;
  } else {
    view = <AppNavigator signOut={signOut} />;
  }

  return <NavigationContainer>{view}</NavigationContainer>;
}
