import {View, Text, Image, TouchableOpacity, FlatList} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {MaterialIcons} from "@expo/vector-icons";
const skills = ["Plumber", "Electrician", "Carpenter", "Mason", "Painter", "Gardener"];
const reviews=[{"id":1, "name":"John Doe", "comment":"Great service!"}, {"id":2, "name":"Jane Smith", "comment":"Very professional!"}];
const ProviderDetail = () => {

    return (
        <SafeAreaView>
            <Image style={{width: '100%', objectFit: 'cover', height: 200, borderRadius: 10}} source={require( '@/assets/images/women.png')}/>
            <View style={{padding: 10}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', }}>Aynalem Tebeche</Text>
                <Text style={{fontSize: 18, color: '#666', marginVertical: 10}}>Description of the provider goes here.
                    This can be a brief overview of their services and experience.</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>

                    <Text style={{fontSize: 16, color: '#999'}}>Rating: 4.5/5</Text>
                    <Text style={{fontSize: 16, color: '#999'}}>Location: City, Country</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, }}>
                <TouchableOpacity  className="border text-primary rounded-2xl px-4 py-2 bg-pink-900 flex-row items-center justify-center">
                    <MaterialIcons name={ 'phone-in-talk'} size={24}  />
                    <Text className="font-semibold mx-4">Call</Text>
                </TouchableOpacity>

                <TouchableOpacity className="border border-pink-900 rounded-2xl px-4 py-2 bg-pink-900 flex-row items-center justify-center" >
                    <MaterialIcons name={ 'chat'} size={24}  />
                    <Text  className="font-semibold mx-4">Message</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
                <Text>Skills:</Text>
                <FlatList
                    data={skills}
                    keyExtractor={(item) => item}
                    alwaysBounceHorizontal={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View style={{ flexDirection:"row",padding: 6,  borderRadius: 10,marginHorizontal:5, marginVertical: 5}}>
                            <Text style={{color: '#fff', fontSize: 16}}>{item}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={{padding: 10}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', }}>Reviews</Text>
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View className="flex  items-center bg-white rounded-2xl shadow-2xl py-4 px-4 mx-4 my-3">
                            <Text className="font-semibold">{item.name}</Text>
                            <Text className="text-lg">{item.comment}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}
export default ProviderDetail;
