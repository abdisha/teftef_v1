import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

const Profile = () => {
    const skill = ["Electrician", "Plumber", "Disha", "Electrician"]
    return (
        <View className="mt-2">

            <View
                className="flex flex-row gap-1 justify-between  items-center  bg-white rounded-2xl shadow-2xl py-2 px-4 mx-4">
                <View className="flex flex-row gap-4">
                    <Image
                        source={require("@/assets/images/avatar.png")}
                        className="w-20 h-20 rounded-full object-contain"
                    />
                    <View className="mt-4">

                        <Text className="text-xl font-bold">John Doe</Text>
                        <Text className="text-lg">Technician</Text>
                        <Text className="text-lg">Rating 4.5</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text className="text-blue-500 font-extrabold text-xl">Edit Profile</Text>
                </TouchableOpacity>

            </View>

            <View className="flex gap-1 justify-between   bg-white rounded-2xl shadow-2xl py-4 px-4 mx-4 mt-3">
                <Text className="text-lg font-bold">Description</Text>
                <Text className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</Text>
            </View>

            <View className="bg-white rounded-2xl shadow-2xl py-4 px-4 mx-4 mt-3">
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

            <View
                className="flex flex-row items-center justify-between   bg-white rounded-2xl shadow-2xl py-4 px-4 mx-4 mt-3">
                <View>
                    <Text className="text-lg font-bold">Phone</Text>
                    <Text className="text-xl mr-5">+251 911 111 111</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-blue-500 font-extrabold text-xl">Change Phone</Text>
                </TouchableOpacity>
            </View>

            <View
                className="flex flex-row gap-1 justify-between items-center   bg-white rounded-2xl shadow-2xl py-4 px-4 mx-4 my-3">
                <View>
                    <Text className="text-lg font-bold">Location</Text>
                    <Text className="text-lg">Addis Ababa, Ethiopia</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-blue-500 font-extrabold text-xl">Change Location</Text>
                </TouchableOpacity>
            </View>

            <View
                className="flex flex-row gap-1 justify-between items-center bg-white rounded-2xl shadow-2xl py-4 px-4 mx-4 my-3">
                <View>
                    <Text className="text-lg font-bold">Reviews</Text>
                    <Text className="text-lg">5 Reviews</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-blue-500 font-extrabold text-xl">See All</Text>
                </TouchableOpacity>
            </View>

            <View
                className="flex flex-row gap-1 justify-center items-center bg-pink-600 rounded-2xl shadow-2xl py-4 px-4 mx-4 my-3">
                <TouchableOpacity>
                    <Text className="text-blue-50 font-extrabold text-xl">Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Profile;