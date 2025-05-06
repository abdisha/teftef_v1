import {Stack} from "expo-router";

const OnboardingLayout = () => {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#FFFFFF'
                },
                animation: 'ios_from_right',
                animationDuration: 300,
                headerTintColor: '#fff',
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
        >
            <Stack.Screen name="CodeVerification"  options={{
                contentStyle: {
                    backgroundColor: '#FFFFFF'
                }
            }}/>

        </Stack>
    )
}
export default OnboardingLayout;