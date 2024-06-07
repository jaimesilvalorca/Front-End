import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles'
import { useDispatch } from 'react-redux'
import { setProductIdSelected,setProductSelected } from '../../features/shopSlice'

const ProductItem = ({ product, navigation }) => {

  const dispatch = useDispatch()

  return (
    <TouchableOpacity onPress={() => {
      //dispatch(setProductIdSelected(product.id))
      dispatch(setProductSelected(product.id))
      navigation.navigate('Detalle', product.id)
    }
    } style={styles.containerProductItem}>
      <Text style={styles.productTitle}>
        {product.title}
      </Text>
      <Image
        style={styles.productImage}
        resizeMode='cover'
        source={{ uri: product.thumbnail }}

      />

    </TouchableOpacity>
  )
}

export default ProductItem