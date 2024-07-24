import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import guy from "../../assets/images/guy.png";
import { useAuth } from "../../AuthContext";
import Plus from "../../assets/svgs/tabs/Plus";
import About from "../../assets/svgs/tabs/About";
import Right from "../../assets/svgs/tabs/Right";
import Settings from "../../assets/svgs/tabs/Settings";
import RateUs from "../../assets/svgs/tabs/RateUs";
import LogOut from "../../assets/svgs/tabs/LogOut";
import Help from "../../assets/svgs/tabs/Help";
import Terms from "../../assets/svgs/tabs/Terms";
// import placeholder from "../../assets/images/placeholder.png";

const Profile = () => {
  const { fetchUserData, user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (user) {
          const data = await fetchUserData(user.uid);
          setUserData(data);
        } else {
          router.push("/signup");
        }
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getUserData();
  }, [user]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView
        contentContainerStyle={tw`items-center py-[1.5rem] px-[1rem]`}
      >
        <Text style={tw`font-semibold text-[2rem] text-center mb-6`}>
          Profile
        </Text>
        <View style={tw`items-center justify-center mb-[3rem]`}>
          <View style={tw`relative`}>
            <Image
              source={guy}
              resizeMode="contain"
              style={tw`h-[6rem] w-[6rem] rounded-full mb-4`}
            />
            <TouchableOpacity style={tw`absolute bottom-[20%] right-0`}>
              <Plus />
            </TouchableOpacity>
          </View>

          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Text style={tw`text-[1.4rem]`}>{userData?.displayName}</Text>
          )}
        </View>

        <View style={tw`flex-col gap-12 w-full`}>
          <View style={tw`flex-row items-center w-full justify-between`}>
            <View style={tw`flex-row gap-1 items-center justify-center`}>
              <About />
              <Text style={tw`text-[1.4rem]`}>About</Text>
            </View>
            <Right />
          </View>
          <View style={tw`flex-row items-center w-full justify-between`}>
            <View style={tw`flex-row gap-1 items-center justify-center`}>
              <Settings />
              <Text style={tw`text-[1.4rem]`}>Settings</Text>
            </View>
            <Right />
          </View>
          <View style={tw`flex-row items-center w-full justify-between`}>
            <View style={tw`flex-row gap-1 items-center justify-center`}>
              <RateUs />
              <Text style={tw`text-[1.4rem]`}>Rate Us</Text>
            </View>
            <Right />
          </View>
          <View style={tw`flex-row items-center w-full justify-between`}>
            <View style={tw`flex-row gap-1 items-center justify-center`}>
              <LogOut />
              <Text style={tw`text-[1.4rem]`}>Log Out</Text>
            </View>
            <Right />
          </View>
          <View style={tw`flex-row items-center w-full justify-between`}>
            <View style={tw`flex-row gap-1 items-center justify-center`}>
              <Help />
              <Text style={tw`text-[1.4rem]`}>Help</Text>
            </View>
            <Right />
          </View>
          <View style={tw`flex-row items-center w-full justify-between`}>
            <View style={tw`flex-row gap-1 items-center justify-center`}>
              <Terms />
              <Text style={tw`text-[1.4rem]`}>Terms and Conditions</Text>
            </View>
            <Right />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
