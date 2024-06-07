import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


const stylesCartItem = StyleSheet.create({
    cartItemContainer:{
        flexDirection:'row',
        alignItems:'center',
        padding:20
    },
    cartContenContainer:{
        flexDirection:'row',
    },
    imageCartItem:{
        height:50,
        width:50,
        marginRight:10,
    },
    trashCart:{
        marginLeft:'auto',
    },
    cartTitle:{
        fontFamily:'ComicNeue-Regular',
        textTransform:'capitalize',
        fontSize:25
    },
    cartBrand:{
        fontFamily:'ComicNeue-Regular',
        textTransform:'capitalize',
        fontSize:16
    },
    cartPrice:{
        fontFamily:'ComicNeue-Regular',
        textTransform:'capitalize',
        fontSize:20,
        color:colors.primary
    }

})

export default stylesCartItem