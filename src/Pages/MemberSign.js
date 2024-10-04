import React , {useState} from "react";
import { Alert, View } from "react-native";

import Input from './input';
import Button from "./Button";

function MemberSign({navigation}) {  
    const [userName , setUserName] = useState('')
    const [userSurname , setUserSurname] = useState('')
    const [userAge , setUserAge] = useState('')
    const [userMail , setUserMail] = useState('')

    function handleSubmit(){
      
        if(!userName || !userSurname || !userAge || !userMail){
            Alert.alert("İncibaş Fitness Salonu" , "Bilgiler boş bırakılamaz!")
            return;
        }

       

        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
        }
       navigation.navigate('MemberResultScreen' , {user});
    }


    return (
        <View>
            <Input label="üye Adi" placeholder="üye ismini giriniz..." 
            onChangeText={setUserName}/> 
            <Input label="üye Soyadı" placeholder="üye soyadını giriniz..." 
            onChangeText={setUserSurname} />
            <Input label="üye Yaş" placeholder="üye yaşını giriniz..."
            onChangeText={setUserAge} />
            <Input label="üye E Posta" placeholder="üye E-posta giriniz..." 
            onChangeText={setUserMail} />
            <Button text="Kaydı Tamamla" OnPress={handleSubmit}/>
        </View>
    );
}

export default MemberSign;