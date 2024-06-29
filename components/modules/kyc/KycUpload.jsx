import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import profile from "../../../assets/images/profile.png";
import Button from "../../common/Button";
const KycUpload = ({ setCurrentStep }) => {
  const handleFaceVerification = () => {
    // image upload logic
    setCurrentStep(3);
  };

  return (
    <View style={tw`flex-1 py-[3rem] items-center text-center`}>
      <Text style={tw`text-center text-[1.17rem] w-[60%] mx-auto`}>
        Get ready for your video selfie
      </Text>

      <Image source={profile} style={tw`my-[3rem]`} />

      <Text style={tw`text-center text-[1.17rem] w-[60%] mx-auto mb-[2rem]`}>
        Position your face in the oval screen and smile
      </Text>

      <Button
        containerStyle={"w-full rounded-[6px]"}
        text={"Continue"}
        textStyle={"font-semibold text-[1.4rem]"}
        handlePress={handleFaceVerification}
      />
    </View>
  );
};

export default KycUpload;
