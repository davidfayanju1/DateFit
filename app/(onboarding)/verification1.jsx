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
import { useRouter } from "expo-router";
import { useAuth } from "../../AuthContext";

const Verification1 = () => {
  const { user, fetchUserData } = useAuth();
  const router = useRouter();

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
    <SafeAreaView
      style={tw`flex-1 bg-gray-100 w-full justify-center items-center py-8`}
    >
      <View style={tw`w-full max-w-md px-4`}>
        <Text style={tw`text-blue-600 font-bold text-2xl text-center mb-6`}>
          Date Fit
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#007AFF" />
        ) : (
          <Text style={tw`font-semibold text-xl text-left mb-4`}>
            Hi, {userData?.displayName || userData?.email}
          </Text>
        )}
        <Image
          source={logo}
          style={tw`w-[18rem] h-[18rem] mt-4 mb-6 self-center`}
          resizeMode="contain"
        />
        <Text style={tw`text-center text-base mb-6`}>
          Verify your account for security and turn on additional features. It's
          quick and simple.
        </Text>
        <Button
          handlePress={() => router.push("/kyc")}
          text="Verify Now"
          containerStyle={`w-full py-3 rounded-[6px]`}
          textStyle={`text-white font-bold text-lg text-center`}
        />
      </View>
    </SafeAreaView>
  );
};

export default Verification1;
