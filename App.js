import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MessageListScreen from './screens/MessageListScreen';
import SendMessageScreen from './screens/SendMessageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MessageList">
        <Stack.Screen name="MessageList" component={MessageListScreen} options={{ title: 'Mensagens' }} />
        <Stack.Screen name="SendMessage" component={SendMessageScreen} options={{ title: 'Enviar Mensagem' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}