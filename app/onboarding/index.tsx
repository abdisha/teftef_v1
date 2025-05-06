import React from 'react';
import {Text, TouchableOpacity,Image, View} from "react-native";
import {useRouter} from "expo-router";

const Index = () => {
    const router = useRouter();
    return (
        <View className={"flex-1  items-center bg-base100"}>
            <Image
                source={require('@/assets/images/logo_with_text.png')}
                className="w-32 h-32 mb-4 mt-6 "
            />
           <View className={"flex-1 w-full justify-center items-center mt-10  z-20"}>

               <Text className="text-5xl font-bold text-primary  mb-4">Welcome to Teftef</Text>
               <Text className="text-lg text-gray-600 mb-4">Your one-stop solution for all your needs</Text>
               <TouchableOpacity
                   className="bg-primary w-3/4 h-14 justify-center items-center text-white  rounded-full"
                   onPress={() => {

                       router.push('/onboarding/PhoneLogin');
                   }}>
                   <Text className="text-lg  text-base100 font-semibold">Get Started</Text>
               </TouchableOpacity>
           </View>
            <Image
                style={{objectFit: "cover",}}
                source={require('@/assets/images/background_circle.png')}
                className="absolute w-1/2 h-1/2 -z-0  -right-1.5 bottom-0 object-contain"
            />
        </View>
    );
};

export default Index;
