import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function First({ navigation }) {
    function switchPage(){
        navigation.navigate('MemberSignScreen')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>İncibas Fitness Salonu</Text>
            <Button title="Uye Kaydi Olustur... " onPress={switchPage}/>
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0", // Arka plan rengi
    },
    text: {
        fontSize: 24, // Yazı boyutu
        fontWeight: "bold", // Yazı kalınlığı
        color: "#333", // Yazı rengi
    },
});

export default First;
