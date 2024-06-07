import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/header/Header";
import OrdersScreen from "../screens/ordersScreen/OrdersScreen";


const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {

    return (

        <Stack.Navigator
            initialRouteName="Ordenes"
            screenOptions={
                ({ navigation, route }) => ({
                    header: () => <Header title={route.name} navigation={navigation} />
                })
            }
        >
            <Stack.Screen
                name="Ordenes"
                component={OrdersScreen}

            />
        </Stack.Navigator>

    )
}

export default OrdersNavigator