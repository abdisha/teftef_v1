import {useState} from "react";
import {FlatList, Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import ProviderCard from "@/app/components/ProviderCard";
import {useRouter} from "expo-router";
import {MaterialIcons} from "@expo/vector-icons";

const Providers = () => {
    const [providers, setProviders] = useState([
        {
            id: 1,
            name: 'John Doe',
            description: 'Experienced plumber with 5 years of experience',
            rating: 4.5,
            location: 'New York',
            image: require('@/assets/images/women.png'),

        },
        {
            id: 2,
            name: 'Jane Smith',
            description: 'Professional cleaner with 10 years of experience',
            rating: 4.8,
            location: 'Los Angeles',
            image: require('@/assets/images/women.png'),
        },
        {
            id: 3,
            name: 'Jane Smith',
            description: 'Professional cleaner with 10 years of experience',
            rating: 4.8,
            location: 'Los Angeles',
            image: require('@/assets/images/man.jpg'),
        },
        {
            id: 4,
            name: 'Jane Smith',
            description: 'Professional cleaner with 10 years of experience',
            rating: 4.8,
            location: 'Los Angeles',
            image: require('@/assets/images/women.png'),
        },
        {
            id: 5,
            name: 'Jane Smith',
            description: 'Professional cleaner with 10 years of experience',
            rating: 4.8,
            location: 'Los Angeles',
            image: require('@/assets/images/man.jpg'),
        }
        // Add more services as needed
    ]);
    const router = useRouter();
    return (
        <SafeAreaView className="px-3  bg-gray-100">

            <View className="my-6 flex  justify-between items-center">

                <Text className="text-lg  text-base-content my-4 ">
                    Find the best service providers in your area
                </Text>
                <View className="flex flex-row justify-between items-center">
                    <TextInput
                        className=" items-start bg-white rounded-2xl p-4 mx-6 font-semibold flex-grow"
                        placeholder={" Search by jobs you want.."}>
                    </TextInput>
                    <MaterialIcons name={'search'} size={24} className="absolute right-9" />
                </View>
            </View>

            <FlatList
                data={providers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <ProviderCard providerName={item.name}
                                  providerDescription={item.description}
                                  providerRating={item.rating}
                                  providerLocation={item.location}
                                  image={item.image}
                                  onPress={() => router.push("/ProviderDetail/adugan")}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
                ListEmptyComponent={<Text style={{textAlign: 'center', color: '#999'}}>No provider found</Text>}
            >
            </FlatList>


        </SafeAreaView>
    )
}
export default Providers;