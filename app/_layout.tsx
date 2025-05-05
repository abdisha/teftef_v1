import {Stack} from "expo-router";
import './globals.css';

export default function RootLayout() {
    return <Stack
        initialRouteName="Welcome"
        screenOptions={{
            headerShown: false,
            contentStyle: {backgroundColor: 'white'},
            animation: 'slide_from_right',
            animationDuration: 300,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
        }}>
        <Stack.Screen name="Home" options={{
            title: 'Service',
            headerShown: false,
            headerBackVisible: false,
        }}/>
        <Stack.Screen name="Providers" options={{title: 'Provider'
            , headerShown: true,
            headerBackVisible: true,
            headerTintColor: '#3DA1FF',
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
            },
        }}/>
        <Stack.Screen name="[ProviderDetail]" options={{title: 'Provider Detail'
            , headerShown: true,
            headerBackVisible: true,
            headerTintColor: '#3DA1FF',
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
            },
        }}/>
        <Stack.Screen name="Profile" options={{
            title: 'Profile'
            , headerShown: true,
            headerBackVisible: true,
            headerTintColor: '#3DA1FF',
            headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        }}/>
    </Stack>;
}
