import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";


const PhoneLogin = () => {
    const route = useRouter();
    return (
        <View className={"flex-1  items-center "}>
            <Image
                source={require('@/assets/images/logo_with_text.png')}
                className="w-32 h-32 mb-4 mt-6 "
            />
            <View className={"flex-1  mt-36 w-full   items-center  z-20"}>
                <View className={"items-start "}>
                    <Text className="text-3xl font-bold text-textSecondary  mb-2">Phone</Text>
                    <Text className="text-lg text-gray-600 mb-2">{"Provide your current phone number, this \n" +
                        "will be used as identification."}</Text>

                </View>
                <TextInput keyboardType="number-pad"
                           className="border w-3/4 h-14 p-2 text-center rounded-2xl mb-2"
                           placeholder="Entry you phone number"/>
                <TouchableOpacity
                    className="bg-primary text-white items-center  w-3/4 m-2.5 py-1 rounded-full"
                    onPress={() => route.push('/CodeVerification')}>
                    <Text className="text-lg text-base100 font-semibold py-2">Send Code</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
};

export default PhoneLogin;
