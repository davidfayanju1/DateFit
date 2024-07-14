import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import profile from "../../../assets/images/profile.png";
import Button from "../../common/Button";
import Camera from "../../../assets/svgs/Camera";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
const KycUpload = ({ setCurrentStep }) => {
  const handleFaceVerification = () => {
    // image upload logic
    setCurrentStep(3);
  };

  const [imageUri, setImageUri] = useState(null);

  const selectImage = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const takePhoto = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled camera");
      } else if (response.errorCode) {
        console.log("Camera Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={tw`flex-1 py-[3rem] items-center text-center`}>
      <Text style={tw`text-center text-[1.17rem] w-[60%] mx-auto`}>
        Get ready for your selfie
      </Text>

      <TouchableOpacity onPress={takePhoto}>
        <Image
          source={imageUri ? { uri: imageUri } : profile}
          style={tw`my-[3rem] min-h-[10rem] min-w-[10rem] rounded-full`}
        />
      </TouchableOpacity>

      <Text style={tw`text-center text-[1.17rem] w-[60%] mx-auto`}>
        Position your face in the oval screen and smile
      </Text>

      <TouchableOpacity onPress={selectImage} style={tw`my-[1.5rem]`}>
        <Camera />
      </TouchableOpacity>

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
