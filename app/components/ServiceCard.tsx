import { View, StyleSheet, Pressable, Image, Text, Alert, ImageProps } from "react-native";

interface ServiceCardProps {
    serviceName: string;
    serviceDescription: string[];
    totalServiceProvider: number;
    image: ImageProps;
    onPress?: () => void;
}
const ServiceCard = ({ serviceName, serviceDescription, totalServiceProvider, image, onPress }: ServiceCardProps) => {
    return (

        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={image} />
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#349CFF' }}>{serviceName}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 10 }}>
                    {serviceDescription.map((description, index) => (
                        <Text key={index} style={styles.describeText}>{description}</Text>
                    ))}
                </View>

                <Text style={{ fontSize: 14, color: '#999', borderRadius: 10, }}>provider {totalServiceProvider}</Text>
            </View>
        </Pressable>

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