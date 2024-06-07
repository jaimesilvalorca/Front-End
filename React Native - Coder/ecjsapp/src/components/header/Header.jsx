import { Text, View, TouchableOpacity } from 'react-native'
import styles from './Styles'
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { deleteSession } from '../../db';
import { logout } from '../../features/authSlice'
import { MaterialIcons } from '@expo/vector-icons';




const Header = ({ title, navigation }) => {

  const email = useSelector(state => state.authReducer.user)
  const localId = useSelector(state => state.authReducer.localId)

  const dispatch = useDispatch()

  const onLogout = () => {

    dispatch(logout())
    const deletedSession = deleteSession(localId)
    console.log("Sesion elimnada", deletedSession)



  }

  return (
    <View style={styles.headerContainer}>
      {
        navigation.canGoBack()
          ?
          <TouchableOpacity onPress={navigation.goBack}>
            <AntDesign name="leftcircleo" size={24} color="white" />
          </TouchableOpacity>
          :
          <View style={styles.viewNull}></View>
      }

      <View style={styles.viewTitle}>
        <Text style={styles.headerTitle}>{title}</Text>


      </View>
      {
        email
        &&
        <TouchableOpacity style={styles.logout} onPress={onLogout}>
          <MaterialIcons name="exit-to-app" size={24} color="white" />

        </TouchableOpacity>
      }

    </View>
  )
}

export default Header

