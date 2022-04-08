import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/auth/Welcome";
import SignInScreen from "../screens/auth/SignIn";
import SignUpScreen from "../screens/auth/SignUp";
import ForgetPasswordScreen from "../screens/auth/ForgetPassword";
import Confirmation from "../screens/auth/Confirmation";

const AuthStack = createStackNavigator();
const AuthModalStack = createStackNavigator();

const AuthNavigator = ({ signIn }) => (
  <AuthModalStack.Navigator mode="modal" headerMode="none">
    <AuthModalStack.Screen name="AuthPages">
      {() => (
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <AuthStack.Screen name="SignUp" component={SignUpScreen} />
          <AuthStack.Screen name="SignIn">
            {({ navigation }) => (
              <SignInScreen signIn={signIn} navigation={navigation} />
            )}
          </AuthStack.Screen>
          <AuthStack.Screen
            name="ForgetPassword"
            component={ForgetPasswordScreen}
          />
        </AuthStack.Navigator>
      )}
    </AuthModalStack.Screen>
    <AuthModalStack.Screen
      options={{ headerShown: false }}
      name="Confirmation"
      component={Confirmation}
    />
  </AuthModalStack.Navigator>
);

export default AuthNavigator;
