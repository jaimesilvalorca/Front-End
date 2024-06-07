import {Image,View } from 'react-native'
import Swiper from 'react-native-swiper'
import styles from './Styles'

const Carousel = ({images}) => {

  return (
    <Swiper style={styles.container} showsButtons={true} >
        {images.map((image,index)=>(
            <View key={index} style={styles.slide}>
                <Image source={{uri:image}} style={styles.image} />
            </View>

        ))}



    </Swiper>

    
  )
}

export default Carousel