import {Stack} from "expo-router";

const HomeLayout = () => {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                headerShown: false,
                contentStyle: {backgroundColor: 'white'},
                animation: 'ios_from_right',
                animationDuration: 300,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
        >

            <Stack.Screen name="Providers"  options={{
                title: 'Providers',
                headerShown: true,
                headerTitle: 'Profile',
                headerTintColor:'#3DA1FF',
                headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                contentStyle: {
                    backgroundColor: '#F9FAFB'
                },

            }}/>

            <Stack.Screen name="[ProviderDetail]"  options={{
                title: 'Provider Detail',
                headerShown: true,
                headerTitle: 'Provider Detail',
                headerTintColor:'#3DA1FF',
                headerTitleStyle:{
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                contentStyle: {
                    backgroundColor: '#F9FAFB'
                },

            }}/>

        </Stack>
    )
}

export default HomeLayout;