import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import Form from "../../components/common/Form";
import { Link, router } from "expo-router";
import Check from "../../assets/svgs/Check";
import Checkbox from "../../components/common/Checkbox";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAuth } from "../../AuthContext";
import { ActivityIndicator } from "react-native";

const Signup = () => {
  const { register, setIsLoading, isLoading, user, isSuccess, fetchUserData } =
    useAuth();

  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    if (
      form.name === "" ||
      form.number === "" ||
      form.email === "" ||
      form.password === ""
    ) {
      Alert.alert("Kindly fill all required fields");
    } else {
      register(form);
      console.log(form);
    }
  };

  const [pressed, setPressed] = useState(false);

  const handlePressed = () => {
    setPressed(!pressed);
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/verification1");
    }
  }, [isSuccess]);

  return (
    <KeyboardAwareScrollView style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1`}>
        <ScrollView
          keyboardShouldPersistTaps={"handled"}
          contentContainerStyle={tw`h-full w-full py-6 px-4`}
        >
          <View style={tw`flex-col mb-8 items-start justify-center`}>
            <Text style={tw`text-[2rem] font-semibold`}>Create an account</Text>
            <Text style={tw`text-md`}>
              Complete the sign up process to get started
            </Text>
          </View>
          <View>
            <Form
              value={form.name}
              title="Full Name"
              label="Full Name"
              placeholder="Enter Full Name"
              placeholdercolor={"#d3d3d3"}
              handleChangeText={(e) => setForm({ ...form, name: e })}
              containerStyle={"mb-8"}
            />
            <Form
              value={form.number}
              title="Phone Number"
              label="Phone Number"
              placeholder="0000 000 0000"
              placeholdercolor={"#d3d3d3"}
              handleChangeText={(e) => setForm({ ...form, number: e })}
              containerStyle={"mb-8"}
            />
            <Form
              value={form.email}
              title="Email"
              label="Email"
              placeholder="Enter Email"
              placeholdercolor={"#d3d3d3"}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              containerStyle={"mb-8"}
            />
            <Form
              value={form.password}
              title="Password"
              label="Password"
              placeholder="*****"
              placeholdercolor={"#d3d3d3"}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              containerStyle={"mb-[.9rem]"}
            />

            <View style={tw`flex-row items-start justify-start gap-[.8rem]`}>
              <Checkbox handlePressed={handlePressed} pressed={pressed} />
              <Text style={tw`w-[90%] text-[.7rem]`}>
                By ticking this box, you agree to our Terms and conditions and
                private policy
              </Text>
            </View>

            <TouchableOpacity
              disabled={!pressed}
              style={tw`w-full ${
                !pressed ? "bg-[#CCE4FF]" : "bg-[#007AFF]"
              } flex items-center justify-center h-[2.7rem] rounded-md`}
              onPress={handleSignUp}
            >
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <Text style={tw`text-white font-semibold text-xl`}>
                  Sign Up
                </Text>
              )}
            </TouchableOpacity>
            <Text style={tw`text-center mt-[1rem] text-[1rem]`}>
              Already have an account?{" "}
              <Link href="/login" style={tw`text-[#FF8500]`}>
                Sign in
              </Link>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
