import React from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../assets";
import CustomBotton from "@/components/CustomBotton";

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full">
        <View className="w-full min-h-[85vh] justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <View>
              <Text className="text-3xl text-white text-center font-bold">
                Discover Endless
              </Text>
            </View>
            <Text className="text-3xl text-white text-center font-bold">
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-1.5 -right-9"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-gray-100 text-center font-pregular mt-7">
            Where creativity meets innovation: Embark on a journey of limitless
            exploration with Aora
          </Text>

          <CustomBotton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
