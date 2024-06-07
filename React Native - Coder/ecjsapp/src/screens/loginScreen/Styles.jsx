import { StyleSheet } from "react-native"
import { colors } from "../../global/colors"

const StyleLoginScreen = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        gap:10
    },
    btn:{
        padding:15,
        backgroundColor:colors.third,
        borderRadius:8,
        margin:5
    },
    btnText:{
        color:'white',
        fontFamily:'ComicNeue-Bold',   
        fontSize:15
    },
    altContainer:{
        flexDirection:'row',
        gap:5,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    subtitle:{
        color:'white',
        fontFamily:'ComicNeue-Bold',  
        fontSize: 12,
    },
    subtitleLink:{
        fontFamily:'ComicNeue-Light',
        color:'white',
        fontSize:11,
        textDecorationLine:'underline'
    }
  })


  export default StyleLoginScreen