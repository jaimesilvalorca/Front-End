import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/header/Header";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import ImageSelectorScreen from "../screens/imageSelector/ImageSelectorScreen";

const Stack = createNativeStackNavigator();


const ProfileNavigator = () => {
    return (

        <Stack.Navigator
            initialRouteName="Perfil"
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation} />
                })
            }
        >
            <Stack.Screen
                name="Perfil"
                component={ProfileScreen}

            />

            <Stack.Screen
                name="Seleccionar Imagen"
                component={ImageSelectorScreen}

            />
        </Stack.Navigator>

    )
}

export default ProfileNavigator