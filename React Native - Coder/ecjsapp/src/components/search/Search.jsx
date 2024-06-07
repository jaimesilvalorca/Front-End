import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons,Entypo } from '@expo/vector-icons'
import styles from './Styles'

const Search = ({onSearchHandlerEvent}) => {

    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState('')

    const onSearchHandler = () =>{
        const regEx = /[^\w\s]/
        if(regEx.test(searchInput)){
            setError("Sólo se admiten letras y numeros")
            setSearchInput('')
        }else{
            setError('')
            onSearchHandlerEvent(searchInput)
        }
    }
    const onResetSearchHandler = () =>{
        setSearchInput('')
        onSearchHandlerEvent(searchInput)
        
        
        

    }

    return (
        <>

        <View style={styles.searchContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={setSearchInput}
                placeholder='Buscar....'
                value={searchInput}
            />
            <TouchableOpacity onPress={()=>{onSearchHandler(searchInput)}}>
                <EvilIcons name='search' size={24} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onResetSearchHandler}>
                <Entypo name='cross' size={24} color={"black"} />

            </TouchableOpacity>
        </View>
        {
            error
            ?
            <View>
                <Text>
                    {error}
                </Text>
            </View>
            :
            null
        }
        </>
    )
}

export default Search

