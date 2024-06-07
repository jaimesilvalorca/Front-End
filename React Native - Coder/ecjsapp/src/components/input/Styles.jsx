import { StyleSheet } from "react-native"
import { colors } from '../../global/colors'


const StyleInput = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        width: '70%'
    },
    input: {
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
        width: '90%',
        backgroundColor: colors.third,
        color: "white",
        padding: 8
    },
    label: {
        fontFamily: 'ComicNeue-Bold',
        color: 'white',
        paddingLeft: 5,
        marginBottom: 4
    },
    error: {
        padding: 10,
        color: "white"
    }
})


export default StyleInput