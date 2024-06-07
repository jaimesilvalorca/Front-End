import { ActivityIndicator, Image, Text, TouchableOpacity, View, useWindowDimensions,ScrollView } from 'react-native'
import styles from './Styles'
import products_data from '../../data/products_data.json'
import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import {useSelector, useDispatch} from 'react-redux'
import { setProductSelected } from '../../features/shopSlice'
import Carousel from '../../components/carousel/Carousel'
import { addItem } from '../../features/cartSlice'


const ProductDetailScreen = ({ navigation,route}) => {
  // const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(true)
  const { height, width } = useWindowDimensions()
  console.log(route)

  const productId = route.params
  const productSelected = useSelector(state=>state.shopReducer.productSelected)

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true)
  }, [height])

  useEffect(() => {
    setIsLoading(!isLoading)
  }, [productId])

  const dispatch = useDispatch()

  const onAddToCart = () =>{
    dispatch(addItem({...productSelected,quantity:1}))
  }



  return (
    <>
    <Header title="Detail" navigation={navigation} />
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <>
            <ScrollView >
              <Carousel images={productSelected.images} />
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{productSelected.title}</Text>
                <Text style={styles.description}>{productSelected.description}</Text>
                <Text style={styles.price}>$ {productSelected.price}</Text>
                <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={onAddToCart}>
                  <Text style={styles.buyText}>Agregar al carrito</Text>
                </TouchableOpacity>
                
              </View>
            </ScrollView>
          </>

      }
    </>
  )
}

export default ProductDetailScreen

