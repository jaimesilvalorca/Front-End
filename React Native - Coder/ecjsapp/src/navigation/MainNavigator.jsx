import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'
import {useSelector,useDispatch} from 'react-redux'
import { useGetProfilePictureQuery, useGetUserLocationQuery } from '../services/shopService'
import { useEffect } from 'react'
import { setProfilePicture, setUser, setUserLocation } from '../features/authSlice'
import { fetchSession } from '../db'

const MainNavigator = ()=>{
    const user = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)

    const {data,error,isLoading} = useGetProfilePictureQuery(localId)

    const {data:locationData, error:locationError, isLoading:isLocationLoading} = useGetUserLocationQuery(localId);

    const dispatch = useDispatch()
    
    useEffect(() => {
        if(data){
            dispatch(setProfilePicture(data.image))

        }

        if(locationData){
            dispatch(setUserLocation(locationData))
        }

    }, [data,locationData,isLoading,isLocationLoading])

    useEffect(()=>{
        (async ()=>{
            try {
                const session = await fetchSession()
                console.log("Sesion del usuario",session)
                if(session?.rows.length){
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
                
            } catch (error) {

                console.log("error al obtener datos de usuario: ",error)
                
            }
        })()
    },[])
    

    return (
        <NavigationContainer>
            {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}

        </NavigationContainer>
    )

}

export default MainNavigator