import React from "react";
import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "@/assets/LocalAssets";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image source={icon} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.home} />,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
