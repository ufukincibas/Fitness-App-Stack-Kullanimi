import React from "react";
import { View , Text , TextInput } from "react-native";
import styles from './input.styles';

function Input({label , onChangeText , placeholder}){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput placeholder={placeholder} 
            onChangeText={onChangeText} 
            style={styles.input_container}
            />
        </View>
    )
}

export default Input;