import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Card from '../card/Card';
import styles from './Styles';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(removeItem({ id: item.id }));
    };

    return (
        <Card style={styles.cartItemContainer}>
            <Image
                style={styles.imageCartItem}
                resizeMode='cover'
                source={{ uri: item.thumbnail }}
            />
            <View>
                <Text style={styles.cartTitle}>{item.title}</Text>
                <Text style={styles.cartBrand}>{item.brand}</Text>
                <Text style={styles.cartPrice}>{item.price}</Text>
                <Text style={styles.cartPrice}>Cantidad: {item.quantity}, Total: ${item.price * item.quantity}</Text>
            </View>
            <TouchableOpacity style={styles.trashCart} onPress={handleRemoveItem}>
                <Feather name="trash" size={24} color="black" />
            </TouchableOpacity>
        </Card>
    );
}

export default CartItem;
