import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Alert, ScrollView } from "react-native";
import tw from "twrnc";
import Form from "../../common/Form";
import { Dropdown } from "react-native-element-dropdown";
import CustomDown from "../../common/CustomDown";
import Button from "../../common/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Country from "../../../assets/data/country.json";
import { useAuth } from "../../../AuthContext";

const KYCForm = ({ setCurrentStep }) => {
  const { updateProfile, user, isSuccess, isLoading } = useAuth();

  const [form, setForm] = useState({
    userName: "",
    gender: "",
    height: "",
    country: "",
    state: "",
    dob: "",
  });

  const genderOptions = [
    { label: "", value: "" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    const transformCountry = Country.map((item) => ({
      label: item.name,
      value: item.name,
      state: item.state || [],
    }));

    setCountryOptions(transformCountry);
  }, []);

  const handleVerification = () => {
    if (
      form.userName === "" ||
      form.gender === "" ||
      form.dob === "" ||
      form.height === "" ||
      form.country === "" ||
      form.state === ""
    ) {
      Alert.alert("Fill Required Fields");
    } else {
      updateProfile(form);
      console.log(form);
      if (isSuccess && !isLoading) {
        Alert.alert("Update successful");
        setCurrentStep(2);
      }
    }
  };

  const [stateOptions, setStateOptions] = useState([]);

  const handleCountryChange = (item) => {
    const selectedCountry = countryOptions.find(
      (country) => country.value === item.value
    );

    setStateOptions(
      selectedCountry
        ? selectedCountry.state.map((item) => ({
            label: item.name,
            value: item.name,
          }))
        : []
    );

    setForm({
      ...form,
      country: item.value,
      state: "",
    });
  };

  return (
    <KeyboardAwareScrollView style={tw`flex-1`}>
      <ScrollView>
        <View style={tw`min-h-full`}>
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
              containerStyle={"w-[49%]"}
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
              containerStyle="w-[49%]"
              //   inputStyle={"text-right"}
            />
          </View>

          <View style={tw`mb-8 w-full flex-row justify-between`}>
            <CustomDown
              label={"Country"}
              data={countryOptions}
              placeholder={""}
              value={form.country}
              containerStyle={"w-[49%]"}
              handleTextChange={handleCountryChange}
            />

            <CustomDown
              label={"State"}
              data={stateOptions}
              placeholder={""}
              value={form.state}
              containerStyle={"w-[49%]"}
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
            text={isLoading ? <ActivityIndicator /> : "Continue"}
            textStyle={"font-semibold text-[1.2rem]"}
            containerStyle={"rounded-[6px]"}
            handlePress={handleVerification}
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default KYCForm;
