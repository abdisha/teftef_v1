import {View, Text, Image, TouchableOpacity, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {MaterialIcons} from "@expo/vector-icons";
const skills = ["Plumber", "Electrician", "Carpenter", "Mason", "Painter", "Gardener"];
const reviews=[{"id":1, "name":"John Doe", "comment":"Great service!"}, {"id":2, "name":"Jane Smith", "comment":"Very professional!"}];
const ProviderDetail = () => {

    return (
        <SafeAreaView>
            <View className="flex justify-center  mt-2 shadow-2xl p-3  bg-white rounded-2xl  mx-4" >

                <View className="flex flex-row justify-items-start mt-2 my-2" >
                    <Image className="w-28 h-28 " source={require( '@/assets/images/women.png')}/>
                   <View className="mx-4 justify-center items-start">
                       <Text className="font-semibold text-xl">Aynalem Tebeche</Text>

                       <Text className="text-lg "> <MaterialIcons size={20} name="maps-home-work" color={'#b1ac06'}/> City, Country</Text>
                       <Text className="text-lg">
                           <MaterialIcons name="star" size={20} color={'#b1ac06'}/>
                           Rating: 4.5/5</Text>
                   </View>
                </View>
                <View className="flex flex-row  items-center px-2">
                    <TouchableOpacity  className="bg-primary rounded-2xl px-4 py-2  flex-row items-center justify-center">
                        <MaterialIcons name={ 'phone-in-talk'} color='white' size={24}  />
                        <Text className="font-semibold mx-4 text-base100">Call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="border-2 border-pink-600  rounded-2xl px-4 py-2 ml-2.5 flex-row items-center justify-center" >
                        <MaterialIcons name={ 'chat'} color="#db2777" size={24}  />
                        <Text  className="text-pink-600  font-semibold mx-2">Message</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View className="shadow-2xl bg-white rounded-2xl p-4 mx-4 mt-2 ">
                <Text className="font-semibold text-lg">About the provider</Text>
                <Text className="text-lg text-base-content my-2 ml-2.5">
                    Description of the provider goes here.
                    This can be a brief overview of their services and experience.</Text>

            </View>
            <View className="shadow-2xl bg-white rounded-2xl p-4 mx-4 mt-2">
                <Text className="font-semibold text-lg">Skills</Text>
                <FlatList
                    data={skills}
                    keyExtractor={(item) => item}
                    alwaysBounceHorizontal={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View className="flex flex-row mx-1 justify-between bg-gray-100 rounded-full py-2 px-4 my-1">
                            <Text className="text-lg text-center">{item}</Text>
                        </View>
                    )}
                />
            </View>
            <View className="shadow-2xl bg-white rounded-2xl p-4 mx-4 my-2">
                <Text className="font-semibold text-lg">Reviews</Text>
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View className="flex  ml-2.5 my-2">
                            <Text className="font-semibold">{item.name}</Text>
                            <Text className="text-lg ml-3.5">{item.comment}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
export default ProviderDetail;
