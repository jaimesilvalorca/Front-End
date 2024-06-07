import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'
import { StyleSheet } from 'react-native';
import { colors } from '../global/colors';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import OrdersNavigator from './OrdersNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen
                name="ShopStack"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="shop" size={24} color={focused ? "white" : "#ccc"} />
                    )
                }}
            />
            <Tab.Screen
                name="CartStack"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="shoppingcart" size={24} color={focused ? "white" : "#ccc"} />
                    )
                }}
            />
            <Tab.Screen
                name="OrderStack"
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="reorder" size={24} color={focused ? "white" : "#ccc"} />
                    )
                }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="user-o" size={24} color={focused ? "white" : "#ccc"} />
                    )
                }}
            />
        </Tab.Navigator>
    )

}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
    }

})