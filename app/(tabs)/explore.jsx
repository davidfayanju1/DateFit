import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Search from "../../components/common/Search";
import Filter from "../../assets/svgs/tabs/Filter";
import movies from "../../assets/images/movies.png";
import gamesExplore from "../../assets/images/gamesExplore.png";
import education from "../../assets/images/education.png";
import sportsOverview from "../../assets/images/sportsOverview.png";

const Explore = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView
        contentContainerStyle={tw`items-center py-[1.5rem] px-[1rem]`}
      >
        <Text style={tw`font-semibold text-[2rem] mb-6`}>Explore</Text>

        <View style={tw`flex-row mb-5 w-full items-center gap-2`}>
          <View style={tw`w-[90%]`}>
            <Search placeholder={"Search..."} />
          </View>
          <View style={tw`w-[10%]`}>
            <TouchableOpacity>
              <Filter />
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`w-full mb-6`}>
          <Text style={tw`text-left text-[1.5rem] mb-3`}>Fun & Relaxation</Text>
          <View style={tw`flex-row justify-between items-center gap-4`}>
            <View style={tw`relative`}>
              <Image source={movies} />
              <Text
                style={tw`absolute text-white font-semibold text-[1.4rem] bottom-[10%] left-[5%]`}
              >
                Movies
              </Text>
            </View>
            <View style={tw`relative`}>
              <Image source={gamesExplore} />
              <Text
                style={tw`absolute text-white font-semibold text-[1.4rem] bottom-[10%] left-[5%]`}
              >
                Games
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`w-full mb-5`}>
          <Text style={tw`text-left text-[1.5rem] mb-3`}>Discover</Text>
          <View style={tw`relative`}>
            <Image source={education} />
            <Text
              style={tw`absolute text-white font-semibold text-[1.4rem] bottom-[10%] left-[5%]`}
            >
              Education
            </Text>
          </View>
        </View>
        <View style={tw`w-full`}>
          <Text style={tw`text-left text-[1.5rem] mb-3`}>Sports</Text>
          <View>
            <Image source={sportsOverview} />
            <Text
              style={tw`absolute text-white font-semibold text-[1.4rem] bottom-[10%] left-[5%]`}
            >
              Sports
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
