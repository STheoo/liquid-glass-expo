import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { Routes } from "./Routes";
import { List } from "./List";
import { LiquidShape } from "./LiquidShape";
import { DisplacementMap1 } from "./DisplacementMap1";
import { DisplacementMap2 } from "./DisplacementMap2";
import { Shader1 } from "./Shader1";
import { Shader2 } from "./Shader2";

const Stack = createNativeStackNavigator<Routes>();
export const LiquidGlass = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={List}
            options={{
              title: "💧 Liquid Glass",
              header: () => null,
            }}
          />
          <Stack.Screen
            name="LiquidShape"
            component={LiquidShape}
            options={{
              title: "🔘 Liquid Shape",
            }}
          />
          <Stack.Screen
            name="DisplacementMap1"
            component={DisplacementMap1}
            options={{
              title: "🗺️  Displacement Map 1",
            }}
          />
          <Stack.Screen
            name="DisplacementMap2"
            component={DisplacementMap2}
            options={{
              title: "🗺️  Displacement Map 2",
            }}
          />
          <Stack.Screen
            name="Shader1"
            component={Shader1}
            options={{
              title: "🎨 Shader 1",
            }}
          />
          <Stack.Screen
            name="Shader2"
            component={Shader2}
            options={{
              title: "🎨 Shader 2",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
