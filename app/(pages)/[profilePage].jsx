import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams, useSearchParams } from "expo-router";
import tw from "twrnc";
import { useAuth } from "../../AuthContext";
import placeholder from "../../assets/images/placeholder.png";
import placeholder2 from "../../assets/images/placeholder2.jpg";
import Location from "../../assets/svgs/tabs/Location";

const ProfilePage = () => {
  const { profilePage } = useLocalSearchParams();
  const { fetchSingleUser } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getSingleUserData = async () => {
      try {
        const data = await fetchSingleUser(profilePage);
        setUserData(data);
      } catch (error) {
        Alert.alert("Error", error.message);
      }
    };

    getSingleUserData();
  }, [profilePage]);

  return (
    <View style={tw`flex-1`}>
      <ScrollView contentContainerStyle={tw`flex-1`}>
        <View>
          <Image
            source={userData?.image || placeholder2}
            style={tw`w-full h-[18rem] rounded-0`}
          />
        </View>
        <View style={tw`mt-[-2.rem] px-[1.5rem]`}>
          <Image
            source={userData?.image || placeholder2}
            style={tw`w-[4rem] h-[4rem] rounded-full`}
          />
          <Text style={tw`font-bold text-[2rem] mt-[1rem]`}>
            {userData?.displayName}
          </Text>
          <View style={tw`flex-row gap-2 mt-1`}>
            <Location />
            <Text style={tw`text-[1.1rem]`}>
              {userData?.location || "Lagos"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilePage;
