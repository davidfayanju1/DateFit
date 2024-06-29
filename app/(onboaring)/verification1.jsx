import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/verification1.png";
import Button from "../../components/common/Button";
import tw from "twrnc";
import { router } from "expo-router";
import { useAuth } from "../../AuthContext";
const verification1 = () => {
  const { user, fetchUserData } = useAuth();

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getUserData = async () => {
      try {
        if (user) {
          const data = await fetchUserData(user.uid);
          console.log(data);
          setUserData(data);
        } else {
          router.push("/signup");
        }
      } catch (error) {
        Alert.alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getUserData();
  }, [user]);

  console.log(userData, "userData");

  return (
    <View style={tw`flex-1 bg-gray-100 mb-12 justify-center px-[2rem]`}>
      <Text style={tw`text-[#007AFF] font-bold text-2xl text-center`}>
        Date Fit
      </Text>

      {isLoading === true ? (
        <ActivityIndicator />
      ) : (
        <Text style={tw`font-semibold text-[2.2rem] text-left mt-4`}>
          Hi, {userData?.displayName || userData?.email}
        </Text>
      )}
      <Image source={logo} style={tw`mt-6`} />
      <Text style={tw`mt-4 text-center text-[1.3rem]`}>
        Verify your account for security and turn on additional features. It's
        quick and simple.
      </Text>
      <Button
        handlePress={() => router.push("/kyc")}
        text="Verify Now"
        containerStyle={"w-full mt-[3rem] rounded-[6px]"}
        textStyle={"font-semibold text-[1.2rem]"}
      />
    </View>
  );
};

export default verification1;
