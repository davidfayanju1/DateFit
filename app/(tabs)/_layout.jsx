import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  HomeIcon,
  ChatsIcon,
  ExploreIcon,
  ProfileIcon,
} from "../../assets/svgs/tabs/Tabs";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <ChatsIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <ExploreIcon focused={focused} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
