import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import createStackNavigator from "./createStackNavigator";

import Intro from "../screens/intro/Intro";
import HomePage from "../screens/HomePage";
import ProfilePage from "../screens/ProfilePage";
import CreateRidePage from "../screens/CreateRidePage";
import DriversPage from "../screens/DriversPage";
import ConfirmRidePage from "../screens/ConfirmRidePage";
import RideSuccessPage from "../screens/RideSuccessPage";

const Stack = createStackNavigator<any>();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomePage"
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="CreateRidePage" component={CreateRidePage} />
        <Stack.Screen name="DriversPage" component={DriversPage} />
        <Stack.Screen name="ConfirmRidePage" component={ConfirmRidePage} />
        <Stack.Screen name="RideSuccessPage" component={RideSuccessPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
