import {Stack} from "expo-router";

const ProfileLayout = () => {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                headerTitle: 'Profile',
                headerTintColor:'#3DA1FF',
                headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerShown: true,
                contentStyle: {
                    backgroundColor: '#FFFFFF'
                },
                animation: 'default',
                animationDuration: 300,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
        >
            <Stack.Screen name="ServiceEdit"  options={{
                title: 'Service Edit',
                headerShown: true,
                headerTitle: 'Service Edit',
                headerTintColor:'#3DA1FF',
                headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize: 20,
                },
            }}/>
        </Stack>
    )
}

export default ProfileLayout;