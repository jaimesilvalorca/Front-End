import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CategoriesScreen from "../screens/categoriesScreen/CategoriesScreen"
import ProductDetailScreen from "../screens/productDetailScreen/ProductDetailScreen"
import ProductsByCategoryScreen from "../screens/productsByCategoryScreen/ProductsByCategoryScreen"
import Header from "../components/header/Header"

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    
    return (
        
            <Stack.Navigator>
                <Stack.Screen
                    name="Categorias"
                    component={CategoriesScreen}
                    options={{
                        headerShown:false
                    }}

                />
                <Stack.Screen
                    name="Productos"
                    component={ProductsByCategoryScreen}
                    options={{
                        headerShown:false
                    }}
                    

                />
                <Stack.Screen
                    name="Detalle"
                    component={ProductDetailScreen}
                    options={{
                        headerShown:false
                    }}

                />
            </Stack.Navigator>
    )
}

export default ShopNavigator