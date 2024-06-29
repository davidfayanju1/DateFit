import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import StepIndicator from "../../components/common/StepIndicator";
import KYCForm from "../../components/modules/kyc/KYCForm";
import KycUpload from "../../components/modules/kyc/KycUpload";
import KycInterest from "../../components/modules/kyc/KycInterest";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Kyc = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100 px-6 py-4`}>
      <View style={tw`flex-1 py-[2rem] px-[1rem]`}>
        {currentStep === 1 && (
          <View>
            <Text style={tw`font-bold text-[2.3rem] mb-[.3rem]`}>
              Start KYC
            </Text>
            <Text style={tw`text-[1.2rem]`}>User & Mobile Verification</Text>
          </View>
        )}
        {currentStep === 2 && (
          <View>
            <Text style={tw`font-bold text-[2.3rem] mb-[.3rem]`}>
              Continue KYC
            </Text>
            <Text style={tw`text-[1.2rem]`}>Facial Verification</Text>
          </View>
        )}
        {currentStep === 3 && (
          <View>
            <Text style={tw`font-bold text-[2.3rem] mb-[.3rem]`}>
              What are your Interests?
            </Text>
            <Text style={tw`text-[1.2rem]`}>
              Select three or more to help tailor your Friend recommendations.
            </Text>
          </View>
        )}

        <StepIndicator currentStep={currentStep} />
        {currentStep === 1 && <KYCForm setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <KycUpload setCurrentStep={setCurrentStep} />}
        {currentStep === 3 && <KycInterest setCurrentStep={setCurrentStep} />}
      </View>
    </SafeAreaView>
  );
};

export default Kyc;
