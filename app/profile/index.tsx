import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

const Index = () => {
    const router = useRouter();
    const skill = ["Electrician", "Plumber", "Disha", "Electrician"]
    return (
        <View className="mt-2">
            <View
                className="flex flex-row gap-1 justify-between  items-center  bg-white rounded-2xl shadow-2xl py-2 px-4 mx-4">
                <View className="flex flex-1  flex-row  gap-3">
                    <Image
                        source={require("@/assets/images/avatar.png")}
                        className="w-20 h-20 rounded-full object-contain"
                    />
                    <View className=" flex-1 justify-items-center mt-2">
                        <Text className="text-xl font-bold">John Doe</Text>
                        <Text>Date of birth: Jun 24,1997</Text>

                    </View>


                </View>
                    <TouchableOpacity onPress={() => router.navigate("/profile/EditProfile")}>
                        <Text className="text-blue-500 font-extrabold text-xl">Edit Profile</Text>
                    </TouchableOpacity>
            </View>
            <View className="flex gap-1 justify-between   bg-white rounded-2xl shadow-2xl py-4 px-4 mx-4 mt-2">
               <View className="flex flex-row justify-between mt-2">
                    <View>
                        <Text className="text-lg font-bold">Your Service</Text>
                        <Text className="text-lg ml-2.5">Technician</Text>
                    </View>

                   <TouchableOpacity
                    onPress={() => router.navigate("/profile/EditPortfolio")}
                   >
                       <Text className="text-blue-500 font-extrabold text-xl">Edit Service</Text>
                   </TouchableOpacity>
               </View>
                <View className="mt-3">

                    <Text className="text-lg font-bold">Description</Text>
                    <Text className="text-lg ml-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</Text>
                </View>

                <View className="mt-3">
                    <Text className="text-lg font-bold">Services</Text>
                    <FlatList data={skill} renderItem={
                        ({item}) => (
                            <View className="flex flex-row mx-1 justify-between bg-gray-100 rounded-full py-2 px-4 my-1">
                                <Text className="text-lg text-center">{item}</Text>
                            </View>
                        )}
                              keyExtractor={(item, index) => index.toString()}
                              horizontal={true}
                              showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            <View
                className="flex flex-row items-center justify-between   bg-white rounded-2xl shadow-2xl py-4 px-4 mx-4 mt-2">
                <View>
                    <Text className="text-lg font-bold">Phone</Text>
                    <Text className="text-xl mr-5">+251 911 111 111</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-blue-500 font-extrabold text-xl">Change Phone</Text>
                </TouchableOpacity>
            </View>

            <View
                className="flex flex-row gap-1 justify-between items-center   bg-white rounded-2xl shadow-2xl py-4 px-4 mx-4 mt-2">
                <View>
                    <Text className="text-lg font-bold">Location</Text>
                    <Text className="text-lg">Addis Ababa, Ethiopia</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-blue-500 font-extrabold text-xl">Change Location</Text>
                </TouchableOpacity>
            </View>

            <View
                className="flex flex-row gap-1 justify-between items-center bg-white rounded-2xl shadow-2xl py-4 px-4 mx-4 mt-2">
                <View>
                    <Text className="text-lg font-bold">Reviews</Text>
                    <View className="flex  flex-row ">

                        <Text className="text-lg">5 Reviews</Text>
                        <Text className="text-lg ml-2.5">
                            <MaterialIcons name="star" color={'#b1ac06'}/> Rating 4.5</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text className="text-blue-500 font-extrabold text-xl">See All</Text>
                </TouchableOpacity>
            </View>

            <View
                className="flex flex-row gap-1 justify-center items-center bg-pink-600 rounded-2xl shadow-2xl py-4 px-4 mx-4 mt-4">
                <TouchableOpacity>
                    <Text className="text-blue-50 font-extrabold text-xl">Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Index;