import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const index = () => {
  const [numberError, setNumberError] = useState(true);
  const [PassError, setPassError] = useState(true);

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="w-full h-full px-4 pb-5">
        <View className="w-full flex-auto pt-10">
          <View className="w-full">
            <Text className="text-5xl font-extrabold leading-tight">
              <Text className=" font-extrabold text-[#7d73e6cc]">S</Text>
              ign in to your
            </Text>
            <Text className="text-5xl font-extrabold">account</Text>
          </View>
          <View className="w-full mt-2">
            <Text className=" font-semibold">
              Access your Account by Registretion Number & Password
            </Text>
          </View>
          <View className="w-full mt-3 relative">
            <View className="absolute top-9 left-3">
              <AntDesign
                name="idcard"
                size={24}
                color={numberError ? "#7c73e6" : "red"}
              />
            </View>
            <TextInput
              placeholder={"Registration Number"}
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 ${
                numberError ? "border-[#7d73e6cc]" : "border-red-500"
              } `}
            />
          </View>
          <View className="w-full  relative">
            <View className="absolute top-9 left-3">
              <Feather
                name="unlock"
                size={24}
                color={PassError ? "#7c73e6" : "red"}
              />
            </View>
            <TextInput
              // value={pass ? pass : ""}
              // onChangeText={(pass) => passInput(pass)}
              placeholder={"Password"}
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 ${
                PassError ? "border-[#7d73e6cc]" : "border-red-500"
              } `}
            />
          </View>
          <View className="w-full mt-14 flex items-center justify-center"></View>
        </View>
        <TouchableOpacity
          className={`w-full h-16 bg-[#7c73e6]  flex items-center justify-center rounded-[25px] tracking-widest leading-loose`}
          activeOpacity={0.8}
        >
          <Text className="text-xl text-white font-semibold">
            Login your Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;
