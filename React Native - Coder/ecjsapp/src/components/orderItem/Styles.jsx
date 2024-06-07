import { StyleSheet } from "react-native";

const StyleOrderItem = StyleSheet.create({

    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    searchIcon: {
        marginLeft: 'auto',
    },
    createdAt:{
        fontFamily:'ComicNeue-Regular',
        marginBottom:5,
    },
    total:{
        fontFamily:'ComicNeue-Regular',
        fontSize:20,
        fontWeight:"bold"
    }

})

export default StyleOrderItem