import React from 'react';
import {Pressable, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";


interface GenderTabInputProps {
    gender: string;
    onChangeGender: (gender: string) => void;
    containerStyle?: ViewStyle;
    tabStyle?: ViewStyle;
    labelStyle?: TextStyle;
    iconSize?: number;
    focusedColor?: string;
    defaultColor?: string;
    options?: string[]; // Optionally customize gender choices
}

const defaultOptions = ['Male', 'Female', 'Other'];

const GenderTabInput: React.FC<GenderTabInputProps> = ({
                                                           gender,
                                                           onChangeGender,
                                                           containerStyle,
                                                           tabStyle,
                                                           labelStyle,
                                                           iconSize = 24,
                                                           focusedColor = '#4e4c4c',
                                                           defaultColor = '#353535',
                                                           options = defaultOptions,
                                                       }) => {
    return (
        <View className="w-full h-24 my-2" style={[ containerStyle]}>
            <View className="flex-row items-center">
                <MaterialIcons name="wc" className="text-gray-500" size={iconSize} />
                <Text className="text-gray-500 font-semibold" style={[labelStyle]}>Select Gender</Text>
            </View>
            <View className="bg-gray-100 w-full items-center rounded-xl px-3  h-14 text-xl  flex-row mt-2">
                {options.map((option) => {
                    const isSelected = gender === option;
                    return (
                        <Pressable
                            key={option}
                            onPress={() => onChangeGender(option)}
                            className="flex-1 items-center justify-center py-3.5 rounded-xl shadow-2xl"
                            style={[

                                tabStyle,
                                isSelected && {
                                    borderColor: '#4c4c4d',
                                    backgroundColor: '#fff', // slight transparent background
                                },
                            ]}
                        >
                            <Text
                                style={{
                                    color: isSelected ? focusedColor : defaultColor,
                                    fontWeight: isSelected ? 'bold' : 'normal',
                                }}
                            >
                                {option}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        backgroundColor: '#fff'
    },

    tab: {
        flex: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        paddingVertical: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GenderTabInput;
