import { View, Text } from 'react-native'
import styles from './Styles'

const Card = ({children,style}) => {
  return (
    <View style={{...styles.container,...style}}>
      {children}
      
    </View>
  )
}

export default Card