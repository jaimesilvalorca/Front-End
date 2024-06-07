import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/header/Header";
import SignupScreen from "../screens/signupScreen/SignupScreen";
import LoginScreen from "../screens/loginScreen/LoginScreen";

const Stack = createNativeStackNavigator();


const AuthNavigator = () => {
    return (

        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation} />
                })
            }
        >
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
            />
                        <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
        </Stack.Navigator>

    )
}

export default AuthNavigator