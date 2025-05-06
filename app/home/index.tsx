import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import {SafeAreaView} from "react-native-safe-area-context";
import {MaterialIcons} from "@expo/vector-icons";
import ServiceCard from "@/app/components/ServiceCard";
import {useRouter} from "expo-router";

const Index = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex flex-1 bg-base100 px-3 mt-2">
            <TouchableOpacity
                onPress={() => {
                    router.push('/profile');
                }} className="flex flex-row justify-between items-center shadow-2xl bg-white rounded-2xl p-4 mt-3">
                <Text className="font-semibold text-xl text-base-content text-primary">
                    Hey, John Doe
                </Text>
                <View
                    className="bg-base100 rounded-full p-2"
                >
                    <MaterialIcons name={'person'} size={28}/>

                </View>
            </TouchableOpacity>
            <View className="flex flex-row items-center mt-6">
                <Image
                    style={{objectFit: "contain",}}
                    source={require('@/assets/images/logo.png')} // Replace with your actual logo path
                    className="w-10 h-10 "
                />
                <Text className="font-semibold text-2xl text-primary ">Services</Text>
            </View>


            <View className="flex flex-1 my-4">
                <Text className="text-lg text-base-content mb-4">
                    Discover top-rated service providers near you for all your needs
                </Text>
                <View className="justify-between items-center">

                    <ServiceCard serviceName={"Technician"}
                                 serviceDescription={["Electric", "Disha", "Plumber"]}
                                 totalServiceProvider={400}
                                 image={require('@/assets/images/maid.png')}
                                 onPress={() => {
                                     router.push('/home/Providers');
                                 }}/>

                    <ServiceCard serviceName={"House Maid"}
                                 serviceDescription={["Cleaning", "Cooking"]}
                                 totalServiceProvider={500}
                                 image={require('@/assets/images/maid.png')}
                                 onPress={() => {

                                 }}/>
                    <ServiceCard serviceName={"Construction"}
                                 serviceDescription={["Digging"]}
                                 totalServiceProvider={400}
                                 image={require('@/assets/images/construction.png')}
                                 onPress={() => {
                                 }}
                    />
                </View>

            </View>
        </SafeAreaView>

    );
}
export default Index;

const homeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20,
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '900',
        color: '#349CFF',
        marginBottom: 10,
    },
})