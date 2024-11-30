import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Vireo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
