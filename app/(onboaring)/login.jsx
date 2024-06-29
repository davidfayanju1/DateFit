import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Form from "../../components/common/Form";
import Button from "../../components/common/Button";
import Checkbox from "../../components/common/Checkbox";
import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAuth } from "../../AuthContext";

const Login = () => {
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    console.log(form);
  };

  const [pressed, setPressed] = useState(false);

  const handlePressed = () => {
    setPressed(!pressed);
  };

  return (
    <KeyboardAwareScrollView style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1`}>
        <View style={tw`flex-1 px-6 py-12`}>
          <Text
            style={tw`text-center text-2xl mb-12 text-[#007AFF] font-semibold`}
          >
            Date Fit
          </Text>

          <Text style={tw`font-bold text-black text-[2.5rem] text-left`}>
            Welcome Back
          </Text>
          <Text style={tw`text-black mb-10 text-lg text-left`}>
            Sign in to continue!
          </Text>
          <Form
            value={form.email}
            title="Email"
            label="Email"
            placeholder="Enter Email"
            placeholdercolor={"#d3d3d3"}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            containerStyle={"mb-8 w-full"}
          />
          <Form
            value={form.password}
            title="Password"
            label="Password"
            placeholder="*****"
            placeholdercolor={"#d3d3d3"}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            containerStyle={"mb-8 w-full"}
          />

          <View style={tw`items-start justify-between flex-row w-full`}>
            <View style={tw`flex-row items-start justify-start gap-[.8rem]`}>
              <Checkbox handlePressed={handlePressed} pressed={pressed} />
              <Text style={tw``}>Remember Me</Text>
            </View>
            <Link href={"/verification1"} style={tw``}>
              Forgot Password?
            </Link>
          </View>

          <Button
            handlePress={handleLogin}
            text={"Log In"}
            textStyle={"font-semibold text-lg"}
            containerStyle={"w-full rounded-md bg-[#007AFF]"}
          />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Login;
