import { FlatList, Pressable, Text, View } from "react-native";
import OrderItem from "../../components/orderItem/OrderItem";
import order_data from '../../data/orders_data.json'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from "../../services/shopService";
import { Modal } from "react-native";
import styles from "./Styles"


const OrdersScreen = () => {

    const localId = useSelector(state => state.authReducer.localId)
    const { data, isLoading, error } = useGetOrdersQuery(localId)
    const [orderData, setOrderData] = useState([])
    const [orderId, setOrderId] = useState("")
    const [orderSelected, setOrderSelected] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        if (data) {
            const orderData = Object.values(data)
            setOrderData(orderData)
        }
    }, [data, isLoading])

    useEffect(() => {
        const orderSelected = orderData.find(order => order.orderId === orderSelected)
        setOrderSelected(orderSelected)
    }, [orderSelected])



    const renderOrderItem = ({ item }) => {

        return (
            <OrderItem order={item} setOrderId={setOrderId} setModalVisible={setModalVisible} />
        )
    }

    return (
        <>
            <FlatList
                data={orderData}
                renderItem={renderOrderItem}
            />
            <Modal visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{orderId}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}>
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default OrdersScreen