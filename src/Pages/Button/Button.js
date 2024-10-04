import React from "react";
import { TouchableOpacity , Text, View } from "react-native";
import styles from './Button.styles';


const Button = ({text , OnPress}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={OnPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Button;