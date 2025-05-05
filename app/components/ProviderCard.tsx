//provider card
import {View, Text, Image, Pressable, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
interface ProviderCardProps {
    providerName: string;
    providerDescription: string;
    providerRating: number;
    providerLocation: string;
    image: any;
    onPress?: () => void;
}


const ProviderCard = ({
                          providerName,
                          providerDescription,
                          providerRating,
                          providerLocation,
                          image,
                            onPress
                      }: ProviderCardProps) => {

    return (
        <View   style={{flex: 1, backgroundColor: '#8f8787', borderRadius: 10, marginBottom: 10}}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#a7d7fa', false,)}
                onPress={onPress}>


                <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, padding: 15}}>
                    <View style={{marginRight: 10}}>
                        <Image source={image} style={styles.image}/>
                    </View>
                    <View>
                        <Text style={styles.provider} numberOfLines={1} ellipsizeMode={"tail"}>{providerName}</Text>
                        <Text style={styles.description} numberOfLines={2}
                              ellipsizeMode={"tail"}>{providerDescription}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <MaterialIcons name='star' style={{width: 15, height: 15, marginRight: 5}}/>
                                <Text style={{fontSize: 14, color: '#999'}}>{providerRating}</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <MaterialIcons name='location-on' style={{width: 15, height: 15, marginRight: 5}}/>
                                <Text style={{fontSize: 14, color: '#999'}}>{providerLocation}</Text>
                            </View>
                        </View>

                    </View>

                </View>

            </TouchableNativeFeedback>
        </View>

    );
}
export default ProviderCard;

const styles = StyleSheet.create({
    provider: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#349CFF',
        marginBottom: 5,
        width: 200,
    },
    description: {
        width: 200,
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    rating: {
        fontSize: 14,
        color: '#999',
        marginBottom: 5,
    },
    location: {
        fontSize: 14,
        color: '#999',
    },
    image: {
        objectFit: 'contain',
        width: 80,
        height: 80,
        borderRadius: 50,
        marginBottom: 5,
    },
});