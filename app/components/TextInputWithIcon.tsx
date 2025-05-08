import React, { useState } from 'react';
import { View, TextInput,Text, StyleSheet, TextInputProps, ViewStyle, TextStyle } from 'react-native';
import {Entypo, FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons";


// Define allowed icon families
type IconFamily = 'MaterialIcons' | 'FontAwesome' | 'Ionicons' | 'Entypo';

interface TextInputWithIcon extends TextInputProps {
  iconName: any;
  iconFamily?: IconFamily;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  iconSize?: number;
  label: string;
  focusedColor?: string;
  defaultColor?: string;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
}

const TextInputWithIcon: React.FC<TextInputWithIcon> = ({
                                                          placeholder,
                                                          iconName,
                                                          iconFamily = 'MaterialIcons',
                                                          value,
                                                          onChangeText,
                                                          secureTextEntry = false,
                                                          containerStyle,
                                                          inputStyle,
                                                          iconSize = 24,
                                                          label,
                                                          focusedColor = '#007AFF',
                                                          defaultColor = '#aaa',
                                                          returnKeyType = 'done',
                                                          ...rest
                                                        }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Map iconFamily to actual component
  const getIconComponent = () => {
    switch (iconFamily) {
      case 'FontAwesome':
        return FontAwesome;
      case 'Ionicons':
        return Ionicons;
      case 'Entypo':
        return Entypo;
      case 'MaterialIcons':
      default:
        return MaterialIcons;
    }
  };

  const IconComponent = getIconComponent();

  return (
      <View className="my-2">

        <Text className="font-semibold text-gray-500">{label}</Text>
        <View className="bg-gray-100 w-full items-center rounded-xl px-3  h-14 text-xl  flex-row mt-2
        " style={[containerStyle, isFocused && {borderColor: focusedColor, borderWidth: 1}]}>
          <IconComponent
              name={iconName}
              size={iconSize}
              color={isFocused ? focusedColor : defaultColor}
              style={styles.icon}
          />
          <TextInput
              style={[styles.textInput, inputStyle]}
              placeholder={placeholder}
              placeholderTextColor={defaultColor}
              value={value}
              returnKeyType={returnKeyType}
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...rest} // Allow all other TextInput props
          />
        </View>

      </View>
  )
}, styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default TextInputWithIcon;
