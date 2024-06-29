import React, { useState } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import Form from "../../common/Form";
import { Dropdown } from "react-native-element-dropdown";
import CustomDown from "../../common/CustomDown";
import Button from "../../common/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Country from "../../../assets/data/country.json";

const KYCForm = ({ setCurrentStep }) => {
  const [form, setForm] = useState({
    userName: "",
    gender: "",
    height: "",
    country: "",
    state: "",
    dob: "",
  });

  const genderOptions = [
    { label: "Select an option", value: "" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const handleVerification = () => {
    // after taking all data
    setCurrentStep(2);
  };

  // console.log(Country)

  return (
    <KeyboardAwareScrollView style={tw`flex-1`}>
      <View style={tw`flex-1 min-h-full`}>
        <Form
          label="Username"
          title="Username"
          value={form.userName}
          placeholder="Enter your username"
          placeholderColor="#1C1C1C"
          handleChangeText={(e) => setForm({ ...form, userName: e })}
          containerStyle="mb-8"
        />

        <View style={tw`mb-8 w-full flex-row justify-between`}>
          <CustomDown
            label={"Gender"}
            data={genderOptions}
            placeholder={"Select a gender"}
            value={form.gender}
            containerStyle={"w-[48%]"}
            handleTextChange={(item) => {
              setForm({ ...form, gender: item.value });
            }}
          />
          <Form
            label="Height"
            title="Height"
            value={form.height}
            placeholder="Ft"
            placeholderColor="#3A3A3A"
            handleChangeText={(e) => setForm({ ...form, height: e })}
            containerStyle="w-[48%]"
            //   inputStyle={"text-right"}
          />
        </View>

        <View style={tw`mb-8 w-full flex-row justify-between`}>
          <CustomDown
            label={"Country"}
            data={genderOptions}
            placeholder={""}
            value={form.country}
            containerStyle={"w-[48%]"}
            handleTextChange={(item) => {
              setForm({ ...form, country: item.value });
            }}
          />

          <CustomDown
            label={"State"}
            data={genderOptions}
            placeholder={"Select a State"}
            value={form.state}
            containerStyle={"w-[48%]"}
            handleTextChange={(item) => {
              setForm({ ...form, state: item.value });
            }}
          />
        </View>

        <Form
          label="Date Of Birth"
          title="dob"
          value={form.dob}
          placeholder="DD/MM/YY"
          placeholderColor="#1C1C1C"
          handleChangeText={(e) => setForm({ ...form, dob: e })}
          containerStyle="mb-8"
        />

        <Button
          text={"Continue"}
          textStyle={"font-semibold text-[1.2rem]"}
          containerStyle={"rounded-[6px]"}
          handlePress={handleVerification}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default KYCForm;
