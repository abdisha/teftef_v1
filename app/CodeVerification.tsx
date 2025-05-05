import React, {useRef, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import{useRouter} from "expo-router";
const CodeVerification = () => {
    const codeInput = new Array(4).fill("-");
    const [code, setCode] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const refElement = useRef<TextInput>(null);
    const router = useRouter();

    const handleOnChange = () => {
        setIsInputFocused(true);
        refElement?.current?.focus();

    }
    const handleOnChangeText = (value: string) => {

        if (value.length > 4) {
            setCode(value.slice(0, 3) + value.charAt(value.length - 1))
            return;
        }
        setCode(value)

    }
    const inputText = (index: number) => {
        if (isInputFocused && index === code.length-1) {
            return <Text className="border border-primary w-16 h-14  p-4 font-extrabold text-center rounded-2xl mb-2" onPress={handleOnChange} key={index}
                         >{code[index] ?? "-"}</Text>
        }
        return <Text className="border w-16 h-14  p-4 font-extrabold text-center rounded-2xl mb-2" onPress={handleOnChange} key={index} >{code[index] ?? "-"}</Text>
    }
    return (
        <View className={"flex-1  items-center "}>
            <Image
                source={require('@/assets/images/code_inserting.png')}
                className="w-80 h-80 mb-4  "
            />
            <View className={"flex-1   w-full   items-center  z-20"}>
                <View className={"items-center "}>
                    <Text className="text-3xl font-bold text-textSecondary  mb-2">Verify your Phone</Text>
                    <Text className="text-lg text-center text-gray-600 mb-2">{"Enter the 4 digit code we sent \n" +
                        "you via SMS."}</Text>

                </View>
                <View className="flex flex-row justify-between w-72 items-center ">
                    {codeInput.map((_, index) => (
                        inputText(index)
                    ))}

                </View>


                <TextInput className="opacity-0 w-0 h-0"
                           ref={refElement}
                           value={code}
                           onBlur={() => setIsInputFocused(false)}
                           returnKeyType={"done"}
                           textContentType={'oneTimeCode'}
                           keyboardType="numeric"
                           onChangeText={handleOnChangeText}
                           placeholder="Entry you phone number"/>

                <Text className="text-lg text-gray-600 ">{"Didn't receive the code? \n" +
                    "Check your phone number or \n" +
                    "send again"}</Text>

                <TouchableOpacity
                    className="text-white items-center  w-3/4 m-2.5  rounded-full"
                    onPress={()=>router.push("/Registration")}>
                    <Text

                        className="text-lg text-primary font-semibold ">Send again</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default CodeVerification;
