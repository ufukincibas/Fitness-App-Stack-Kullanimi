
import React from 'react'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Pages/WelcomePage';
import MemberSign from './Pages/MemberSign';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
 }}>
        
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="MemberSignScreen" component={MemberSign} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;