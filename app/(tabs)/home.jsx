import {
  View,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import Search from "../../components/common/Search";
import { OverLayLeft, OverLayRight } from "../../assets/svgs/OverLay";
import Bell from "../../assets/svgs/Bell";
import { useAuth } from "../../AuthContext";
import { useRouter } from "expo-router";
import games from "../../assets/images/games.png";
import sports from "../../assets/images/sports.png";
import lady from "../../assets/images/lady.png";
import woman from "../../assets/images/woman.png";
import Location from "../../assets/svgs/tabs/Location";
import Like from "../../assets/svgs/tabs/Like";
import placeholder2 from "../../assets/images/placeholder2.jpg";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { user, fetchUserData, fetchAllUsers } = useAuth();
  const router = useRouter();

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [allUsers, setallUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchAllUsers();
        setallUsers(data);
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  console.log(allUsers, "allUsers");

  useEffect(() => {
    const getCurrentUserData = async () => {
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

    getCurrentUserData();
  }, [user]);

  const users = [
    {
      name: "Lydia",
      img: lady,
      location: "Texas",
      id: 1,
    },
    {
      name: "Linda Olarinde",
      img: woman,
      location: "Lagos",
      id: 2,
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <ScrollView
        contentContainerStyle={tw`items-center py-[1.5rem] px-[1rem]`}
      >
        <View style={tw`w-full`}>
          <Search
            placeholder={"Search..."}
            value={searchInput}
            handleChangeText={(e) => setSearchInput(e)}
          />
        </View>
        <View style={tw`w-full mt-[2rem]`}>
          <View style={tw`overflow-hidden rounded-[10px]`}>
            <View
              style={tw`min-h-[10rem] bg-[#007AFF] relative items-center justify-between px-[2rem] flex-row`}
            >
              <View style={tw`absolute left-0 bottom-0`}>
                <OverLayLeft />
              </View>
              <View style={tw`absolute right-0 top-0`}>
                <OverLayRight />
              </View>
              <View>
                <Text style={tw`text-white font-bold text-[2rem]`}>{`Hi, ${
                  userData ? userData?.displayName : <ActivityIndicator />
                }`}</Text>
                <Text
                  numberOfLines={1}
                  style={tw`mt-1 text-white text-[.9rem]`}
                >
                  We hope you're having a great time.
                </Text>
              </View>
              <Bell />
            </View>
          </View>
        </View>

        {/* special for you */}
        <View style={tw`mt-[2rem] w-full`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-[1.1rem] font-500`}>Special For you</Text>
            <Text style={tw`text-[#FF8500] font-semibold`}>See More</Text>
          </View>
          <View style={tw`flex-row justify-between mt-[1rem] gap-2`}>
            <Image
              source={games}
              style={tw`w-[48%] rounded-[11px] h-[6rem]`}
              resizeMode="contain"
            />
            <Image
              source={sports}
              style={tw`w-[48%] rounded-[11px] h-[6rem]`}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* Just joined */}
        <View style={tw`mt-[2rem] w-full`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-[1.1rem] font-500`}>Just Joined</Text>
            <Text style={tw`text-[#FF8500] font-semibold`}>See More</Text>
          </View>
          <View style={tw`flex-row justify-between mt-[1rem]`}>
            {allUsers?.slice(0, 2).map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => router.push(`(pages)/${item.id}`)}
                style={tw`w-[46%] rounded-[6px]`}
              >
                <Image
                  source={item.img || placeholder2}
                  style={tw`h-[9.8rem] w-full rounded-[6px]`}
                />
                <View style={tw`flex-row mt-2 items-start justify-between`}>
                  <View>
                    <Text style={tw`text-[1.3rem] mb-[.4rem] font-semibold`}>
                      {item?.displayName}
                    </Text>
                    <View style={tw`flex-row gap-1`}>
                      <Location />
                      <Text>{item.location || "Lagos"}</Text>
                    </View>
                  </View>
                  <Like />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Near you */}
        <View style={tw`mt-[2rem] w-full`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-[1.1rem] font-500`}>Near you</Text>
            <Text style={tw`text-[#FF8500] font-semibold`}>See More</Text>
          </View>
          <View style={tw`flex-row justify-between mt-[1rem] gap-2`}>
            {users?.map((item) => (
              <View key={item.name} style={tw`w-[48%]`}>
                <Image source={item.img} style={tw`w-full rounded-[11px]`} />
                <View style={tw`flex-row mt-2 items-start justify-between`}>
                  <View>
                    <Text style={tw`text-[1.3rem] mb-[.4rem] font-semibold`}>
                      {item.name}
                    </Text>
                    <View style={tw`flex-row gap-1`}>
                      <Location />
                      <Text>{item.location}</Text>
                    </View>
                  </View>
                  <Like />
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* similar interest */}
        <View style={tw`mt-[2rem] w-full`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-[1.1rem] font-500`}>Similar interests</Text>
            <Text style={tw`text-[#FF8500] font-semibold`}>See More</Text>
          </View>
          <View style={tw`flex-row justify-between mt-[1rem] gap-2`}>
            {users?.map((item) => (
              <View key={item.name} style={tw`w-[48%]`}>
                <Image source={item.img} style={tw`w-full rounded-[11px]`} />
                <View style={tw`flex-row mt-2 items-start justify-between`}>
                  <View>
                    <Text style={tw`text-[1.3rem] mb-[.4rem] font-semibold`}>
                      {item.name}
                    </Text>
                    <View style={tw`flex-row gap-1`}>
                      <Location />
                      <Text>{item.location}</Text>
                    </View>
                  </View>
                  <Like />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
