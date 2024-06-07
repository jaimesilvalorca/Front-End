import { Text, View, TouchableOpacity } from "react-native"
import Card from "../card/Card"
import styles from './Styles'
import { Feather } from '@expo/vector-icons';



const OrderItem = ({order,setOrderId, setModalVisible}) => {
  console.log("orderitem",order.updateAt)
  console.log(order.orderId)
  let date = new Date(order.updateAt)
  date = date.toLocaleString()
  console.log(date)
  return (
    <Card style={styles.cartItemContainer}>
      <View>
        <Text style={styles.createdAt}>
          Creada el {date}
        </Text>
        <Text style={styles.total}>
          Total:{order.total}
        </Text>
      </View>
      <TouchableOpacity style={styles.searchIcon} onPress={()=>{
        setOrderId(order.orderId)
        setModalVisible(true)
        }}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>

    </Card>
  )
}

export default OrderItem