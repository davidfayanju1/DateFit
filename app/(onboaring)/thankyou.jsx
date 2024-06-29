import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import thankyou from "../../assets/images/thankyou.png";
import Button from "../../components/common/Button";
import tw from "twrnc";
import { router } from "expo-router";
const Thankyou = () => {
  return (
    <View style={tw`flex-1 bg-gray-100 mb-12 justify-center px-[2rem]`}>
      <Text style={tw`text-[#007AFF] font-bold text-2xl text-center`}>
        Date Fit
      </Text>

      <Image source={thankyou} style={tw`mt-6`} />
      <Text style={tw`mt-4 text-center text-[1.8rem] font-bold`}>
        Thank You!
      </Text>

      <Text style={tw`mt-4 text-center text-[1.3rem]`}>
        Connect now and take pleasure in your adventure!
      </Text>
      <Button
        handlePress={() => router.push("/kyc")}
        text="Let's Go"
        containerStyle={"w-full mt-[3rem] rounded-[6px]"}
        textStyle={"font-semibold text-[1.2rem]"}
      />
    </View>
  );
};

export default Thankyou;
