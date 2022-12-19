import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import createStackNavigator from "./createStackNavigator";

import Intro from "../screens/intro/Intro";


const Stack = createStackNavigator<any>();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Intro"
      >
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
