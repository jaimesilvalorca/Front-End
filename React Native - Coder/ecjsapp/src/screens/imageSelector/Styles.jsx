import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


const StylesImageSelectorScreen = StyleSheet.create({
    noImageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
  
    },
    btn: {
      backgroundColor: colors.primary,
      padding: 10,
      borderRadius: 5,
      marginTop: 50,
    },
    textBtn: {
      color: '#fff'
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
    },
    image: {
      width: 250,
      height: 250,
      borderRadius: 250,
    },
    btnContainer: {
      flexDirection: 'row',
      gap: 10,
    },
    btnConfirm: {
      backgroundColor: colors.success,
      paddingHorizontal: 50
    }
  })

  export default StylesImageSelectorScreen