import { Text, TouchableOpacity, View } from 'react-native'
import styles from './Styles'
import Card from '../card/Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../../features/shopSlice'

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('Productos', { category })
      dispatch(setCategorySelected(category))
    }
    }
    >
      <Card style={styles.cardContainer} >
        <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default CategoryItem
