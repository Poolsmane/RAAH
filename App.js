import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    GetStarted,
    Home,
    Login,
    OTPVerification,
    OnboardingStarter,
    Register,
    ResetPassword,
    SuccessVerification,
} from './screens'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BottomTabNavigation from './navigation/BottomTabNavigation'

SplashScreen.preventAutoHideAsync()
const Stack = createNativeStackNavigator()

export default function App() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null)

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true')
                setIsFirstLaunch(true)
            } else {
                setIsFirstLaunch(false)
            }
        })
    }, [])

    const [fontsLoaded] = useFonts({
        black: require('./assets/fonts/Poppins-Black.ttf'),
        bold: require('./assets/fonts/Poppins-Bold.ttf'),
        medium: require('./assets/fonts/Poppins-Medium.ttf'),
        regular: require('./assets/fonts/Poppins-Regular.ttf'),
        semiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null
    }

    return (
        <NavigationContainer onReady={onLayoutRootView}>
            <Stack.Navigator
                initialRouteName={
                    isFirstLaunch ? 'OnboardingStarter' : 'GetStarted'
                }
            >
                <Stack.Screen
                    name="OnboardingStarter"
                    component={OnboardingStarter}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BottomTabNavigation"
                    component={BottomTabNavigation}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="OTPVerification"
                    component={OTPVerification}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SuccessVerification"
                    component={SuccessVerification}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="GetStarted"
                    component={GetStarted}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
