import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


const StylesProfileScreen = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
        gap: 20,
        alignItems: 'flex-start'
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    userDataContainer: {
        marginTop: 10,
    },
    userTitle: {
        fontFamily: 'ComicNeue-Bold',
        fontSize: 24,
    },
    imageContainer: {
        borderRadius: 100,
    },
    userData: {
        fontFamily: 'ComicNeue-Light',
        fontSize: 18
    },
    addressContainer:{
        alignItems:'center',
        gap:5,
        padding:10,
        margin:10,
        borderRadius:10,
        backgroundColor:colors.third
    },
    addressTitle:{
        fontFamily:'ComicNeue-Bold',
        fontSize:14,
        color:'white'
    },
    addressDescription:{
        fontFamily:'ComicNeue-Light',
        color:'white'
    }
})

export default StylesProfileScreen