import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign , Ionicons } from '@expo/vector-icons';

import PayButton from './components/PayButton/index';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

const Tab = createBottomTabNavigator(); //Create instance, just to make everything easy

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings: {
        lib: AntDesign,
        name: 'setting',
    }
};

export default function Navigation(){
    return(
        <Tab.Navigator 
            screenOptions={({ route, navigation }) => ({
                 tabBarIcon: ({color, size, focused }) => {
                     if(route.name === 'Pay'){
                         return (
                         <PayButton 
                            onPress={() => navigation.navigate('Pay')}
                            focused={focused}
                         />
                         );
                     }
                    const {lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />;
                 },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor:'#e4e8ed',
                    borderTopColor: 'rgba(255,255,255,0.2)',
                },
                activeTintColor: '#0D0C0C'
            }}
            >
            <Tab.Screen
                name='Home' 
                component={HomeScreen}
                options={{
                    title: 'Inicio', //Otherwise, it will display 'Home'
                }}
             />
            <Tab.Screen 
                name='Wallet'
                component={WalletScreen}
                options={{
                    title: 'Carteira'
                }}
            />
            <Tab.Screen
                name='Pay' 
                component={PayScreen}
                options={{
                    title: '',
                }}
             />
             <Tab.Screen
                name='Notifications' 
                component={HomeScreen}
                options={{
                    title: 'Notificacoes'
                }}
             />
             <Tab.Screen
                name='Settings' 
                component={HomeScreen}
                options={{
                    title: 'Ajustes'
                }}
             />
        </Tab.Navigator>
    );
}