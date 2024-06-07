import { Text, TouchableOpacity, View,Image} from 'react-native'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Styles'
import * as ImagePicker from 'expo-image-picker'
import {useDispatch,useSelector} from 'react-redux'
import { setProfilePicture } from '../../features/authSlice';

import { usePutProfilePictureMutation } from '../../services/shopService';


const ImageSelectorScreen = ({navigation}) => {

  const [image, setImage] = useState()

  const localId = useSelector(state=>state.authReducer.localId)

  const verifyCameraPermissions = async () => {
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted){
      return false
    }
    console.log("permisos otorgados")
    return true

   }

   

  const pickImage = async () => { 

    const isCameraOk = await verifyCameraPermissions()
    if(isCameraOk){
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing:true,
        aspect: [1,1],
        base64:true,
        quality:0.2
      })
      if(!result.canceled){
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }else{
      console.log('No se han otorgado los permisos de camara')
    }

  }

  const dispatch = useDispatch()

  const [triggerSaveProfilePicture, result] = usePutProfilePictureMutation()

  const confirmImage = () =>{
    dispatch(setProfilePicture(image))
    triggerSaveProfilePicture({image,localId})
    navigation.goBack()

  }
  

  return (
    <View style={styles.container}>
      {
        image
          ?
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn} onPress={pickImage}>
                <Text style={styles.textBtn}>Tomar otra</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.btn, ...styles.btnConfirm }} onPress={confirmImage}>
                <Text style={styles.textBtn}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={styles.noImageContainer}>
            <MaterialIcons name="no-photography" size={200} color="gray" />
            <TouchableOpacity style={styles.btn} onPress={pickImage}>
              <Text style={styles.textBtn}>Abrir camara</Text>
            </TouchableOpacity>
          </View>
      }
    </View>
  )
}

export default ImageSelectorScreen

