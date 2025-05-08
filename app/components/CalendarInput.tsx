import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  Platform,
  Pressable,
  Text
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {MaterialIcons} from "@expo/vector-icons";

interface CalendarInputProps extends Omit<TextInputProps, 'onChangeText' | 'value'> {
  placeholder?: string;
  date: Date | null;
  onChangeDate: (date: Date) => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  iconSize?: number;
  focusedColor?: string;
  defaultColor?: string;
  minimumDate?: Date;
  maximumDate?: Date;

  label: string;
  returnKeyType?: 'done' | 'next' | 'go' | 'search' | 'send';
}

const CalendarInput: React.FC<CalendarInputProps> = ({
  placeholder,
  date,
  onChangeDate,
  containerStyle,
  inputStyle,
  iconSize = 24,
  focusedColor = '#007AFF',
  defaultColor = '#aaa',
  minimumDate,
  maximumDate,
    label,
    returnKeyType="done",
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const formattedDate = date ? date.toLocaleDateString() : '';

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      onChangeDate(selectedDate);
    }
  };

  return (
    <View className="my-2">
      <Text className="font-semibold text-gray-500">{label}</Text>
      <Pressable
        onPress={() => {
          setIsFocused(true);
          setShowPicker(true);
        }}
        className="bg-gray-100 w-full items-center rounded-xl px-3  h-14 text-xl  flex-row mt-2"
        style={[containerStyle, isFocused && { borderColor: focusedColor,borderWidth:1 }]}
      >
        <MaterialIcons
          name="calendar-today"
          size={iconSize}
          color={isFocused ? focusedColor : defaultColor}
          style={styles.icon}
        />
        <TextInput
          style={[styles.textInput, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={defaultColor}
          value={formattedDate}
          returnKeyType={returnKeyType}
          editable={false} // Disable typing
          pointerEvents="none"
          {...rest}
        />
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'spinner'}
          onChange={handleDateChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
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

export default CalendarInput;
