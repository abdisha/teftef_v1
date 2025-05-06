import {Stack} from "expo-router";
import './globals.css';

export default function RootLayout() {
    return <Stack
        initialRouteName="onboarding"
        screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: '#FFFFFF'},
            animation: 'ios_from_right',
            animationDuration: 300,
             headerTintColor: '#fff',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
        }}
    >
    </Stack>;
}
