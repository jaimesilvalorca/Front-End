import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import cart_data from "../../data/cart_data.json"
import CartItem from '../../components/cartItem/CartItem'
import styles from './Styles'
import { clearCart } from '../../features/cartSlice'
import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from "react-redux"
import { usePostOrderMutation } from '../../services/shopService'

const CartScreen = ({ navigation }) => {

  const cartItems = useSelector(state => state.cartReducer.items)
  const total = useSelector(state => state.cartReducer.total)
  const localId = useSelector(state => state.authReducer.localId)
  const dispatch = useDispatch();

  const renderCartItem = ({ item }) => (
    <CartItem item={item} />
  )

  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = () => {
    console.log(result)
    triggerPost({ total, cartItems, localId: localId, updateAt: Date.now(), orderId: Math.ceil(Math.random(1, 10) * 1000) })
    navigation.navigate("Categorias")

  }

  const deleteCart = () => {
    dispatch(clearCart()); 
  };

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total:${total}</Text>

        
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={deleteCart}
        >
          <Text style={styles.textConfirm}>Eliminar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={confirmCart}
        >
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>

      </View>
    </View>



  )
}

export default CartScreen