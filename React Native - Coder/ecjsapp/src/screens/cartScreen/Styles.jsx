import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

const StyleCartScreen = StyleSheet.create({
    cartContainer:{
        flex: 1,
    },
    cartConfirm:{
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:25,
    },
    totalPrice:{
        fontSize:25,
        fontFamily:'ComicNeue-Regular'
    },
    confirmButton:{
        backgroundColor: colors.secondary,
        padding:10,
        borderRadius:10,
    },
    textConfirm:{
        fontFamily:'ComicNeue-Regular',
        fontSize:16,
        color: '#fff'

    }
  })


  export default StyleCartScreen