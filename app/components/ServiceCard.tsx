import {View, StyleSheet, Pressable, Image, Text, Alert, ImageProps, TouchableNativeFeedback} from "react-native";

interface ServiceCardProps {
    serviceName: string;
    serviceDescription: string[];
    totalServiceProvider: number;
    image: ImageProps;
    onPress?: () => void;
}

const ServiceCard = ({serviceName, serviceDescription, totalServiceProvider, image, onPress}: ServiceCardProps) => {
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#a7d7fa', false,)}

            onPress={onPress}>
            <View   className="flex flex-row py-6 bg-base100 px-2 justify-center items-center mt-2 shadow-2xl rounded-2xl">
                <Image className="h-24 w-24 mx-2" source={image}/>
                <View className="ml-2 flex-1 justify-center items-start">
                    <Text className="font-semibold text-2xl p-2 text-primary">{serviceName}</Text>
                    <View className=" flex flex-row ">
                        {serviceDescription.map((description, index) => (
                            <Text key={index} className="mx-1 px-3 py-1 bg-gray-200 rounded-full">{description}</Text>
                        ))}
                    </View>

                    <Text className="font-medium text-lg p-2"> {totalServiceProvider}+ Provider</Text>
                </View>
            </View>

        </TouchableNativeFeedback>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        }
        ,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        borderRadius: 12,
        marginBottom: 20,
        width: '100%',
        shadowColor: '#000',
        zIndex: 5,
    },
    image: {
        objectFit: 'contain',
        width: 90,
        height: 80,
        borderRadius: 25,
        marginRight: 10,
    },
    describeText: {
        fontSize: 12,
        borderColor: '#ffffff',
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 3,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: 'rgb(185,221,250)',
        color: '#fff',
        textAlign: 'center',
    }
})
export default ServiceCard;