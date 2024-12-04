import React from "react";
import { Image, Text, View } from "react-native";
import { router } from "expo-router";

import CustomButton from "./CustomButton";

import { images } from "@/assets";

interface EmptyStateProps {
  title: string;
  subtitle: string;
}

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
  return (
    <View className="flex justify-center items-center px-4">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[270px] h-[216px]"
      />
      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {title}
      </Text>
      <Text className="text-sm font-pmedium text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create Video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
