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
        <View style={[styles.container, containerStyle]}>
            <View style={styles.header}>
                <MaterialIcons name="wc" size={iconSize} color={focusedColor} style={styles.icon}/>
                <Text style={[styles.title, labelStyle]}>Select Gender</Text>
            </View>
            <View style={styles.tabsContainer}>
                {options.map((option) => {
                    const isSelected = gender === option;
                    return (
                        <Pressable
                            key={option}
                            onPress={() => onChangeGender(option)}
                            style={[
                                styles.tab,
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        marginRight: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 3,

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
