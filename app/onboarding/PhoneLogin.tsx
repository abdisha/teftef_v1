import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {CountryButton, CountryPicker} from "react-native-country-codes-picker";


const PhoneLogin = () => {
    const route = useRouter();
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+251');

    return (
        <View className={"flex-1  items-center "}>
            <Image
                source={require('@/assets/images/logo_with_text.png')}
                className="w-32 h-32 mb-4 mt-6 "
            />
            <View className={"flex-1  mt-36 w-full   items-center  z-20"}>
                <View className={"items-start "}>
                    <Text className="text-3xl font-bold text-textSecondary  mb-2">Phone</Text>
                    <Text className="text-lg text-gray-600 mb-2">{"Provide your current phone number, this \n" +
                        "will be used as identification."}</Text>

                </View>
                <View className="flex flex-row justify-between w-3/4 items-center ">
                    <TouchableOpacity
                        onPress={() => setShow(true)}
                        className="bg-gray-200 w-20  h-14  justify-center items-center  rounded-2xl"
                    >
                        <Text style={{
                            color: 'black',
                            fontSize: 20
                        }}>
                            {countryCode}
                        </Text>
                    </TouchableOpacity>
                    <CountryPicker
                        show={show}
                        style={{
                            // Styles for whole modal [View]
                            modal: {
                                height: 500,
                            }}}
                        inputPlaceholder={'Select your country'}
                        // when picker button press you will get the country object with dial code
                        pickerButtonOnPress={(item) => {
                            setCountryCode(item.dial_code);
                            setShow(false);
                        }} lang={''}

                        ListHeaderComponent={ListHeaderComponent}/>
                    <TextInput keyboardType="number-pad"
                               className=" w-3/4 h-14 text-xl  bg-gray-200 text-left px-5 rounded-2xl mb-2"
                               placeholder="Entry you phone number"/>
                </View>
                <TouchableOpacity
                    className="bg-primary text-white items-center  w-3/4 m-2.5 py-2 rounded-full"
                    onPress={() => route.navigate('/onboarding/CodeVerification')}>
                    <Text className="text-lg text-base100 font-semibold py-2">Send Code</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
};

export default PhoneLogin;
function ListHeaderComponent({countries, lang, onPress}) {
    return (
        <View
            style={{
                paddingBottom: 20,
            }}
        >
            <Text>
                Popular countries
            </Text>
            {countries?.map((country, index) => {
                return (
                    <CountryButton key={index} item={country} name={country?.name?.[lang || 'en']} onPress={() => onPress(country)} />
                )
            })}
        </View>
    )
}