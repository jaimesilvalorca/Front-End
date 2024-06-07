import React, { useState } from 'react'
import {Text, TextInput, View } from 'react-native'
import styles from './Styles'


const Input = ({ label, isSecureEntry = false, error = "",onChange}) => {

    const [input, setInput] = useState()

    const onHandleChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput

                style={styles.input}
                onChangeText={onHandleChangeText}
                secureTextEntry={isSecureEntry}
                value={input}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>



    )
}

export default Input