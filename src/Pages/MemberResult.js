import React from "react";
import { StyleSheet, Text, View } from "react-native";

function MemberResult({route}){
    const {user} = route.params;
   
    return(
        <View style={styles.container}>
         <Text style={styles.title}>Kayıt Tamamlandı !</Text>
            <Text style={styles.label}>Üye adı : <Text style={styles.value}>{user.userName}</Text></Text>
            <Text style={styles.label}>Üye Soyadı :<Text style={styles.value}>{user.userSurname}</Text></Text>
            <Text style={styles.label}>Üye Yaşı :<Text style={styles.value}>{user.userAge}</Text></Text>
            <Text style={styles.label}>Üye Maili :<Text style={styles.value}>{user.userMail}</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#0D47A1', // Yeşil bir renk tonu ekledim
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    value: {
        fontWeight: 'normal',
        color: '#555',
    },
})





export default MemberResult;