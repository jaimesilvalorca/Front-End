import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'

const {width} = Dimensions.get('window')
const stylesCarousel = StyleSheet.create({

    container:{
        height:300
    },
    slide:{
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:width,
        height:300
    }



})

export default stylesCarousel