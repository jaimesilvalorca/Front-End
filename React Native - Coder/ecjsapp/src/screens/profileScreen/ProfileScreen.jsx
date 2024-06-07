import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import user_data from '../../data/user_data.json'
import styles from './Styles'
import { useSelector } from 'react-redux'
import LocationSelector from '../../components/locationSelector/LocationSelector'


const ProfileScreen = ({ navigation }) => {

    const image = useSelector(state => state.authReducer.profilePicture)

    const location = useSelector(state => state.authReducer.location)

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Pressable
                        onPress={() => navigation.navigate('Seleccionar Imagen')}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8'
                            },
                            styles.imageContainer,
                        ]}>
                        {
                            image
                                ?
                                <Image
                                    source={{ uri: image }}
                                    style={styles.profilePicture}
                                    resizeMode='contain'
                                />
                                :
                                <Image
                                    source={require('../../../assets/user.png')}
                                    style={styles.profilePicture}
                                    resizeMode='contain'
                                />

                        }


                    </Pressable>


                </View>
                <View style={styles.userDataContainer}>
                    <Text style={styles.userTitle}>{user_data.name}</Text>
                    <Text style={styles.userData}>{user_data.role}</Text>
                    <Text style={styles.userData}>Nivel: {user_data.level}</Text>
                    <Text style={styles.userData}>Dirección: {user_data.address}</Text>
                    <Text style={styles.userData}>{user_data.city}</Text>
                </View>

            </View>
            {
                location.address &&
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>Ultima ubicacion guardada: </Text>
                    <Text style={styles.addressDescription}>{location.address}</Text>
                </View>
            }
            <LocationSelector />
        </>
    )
}

export default ProfileScreen

