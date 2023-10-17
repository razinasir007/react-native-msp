import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../dashboard';
import { Contact } from '../contact';
import { Appointments } from '../appointments';
import {Image} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import { Settings } from '../settings';
export const Home = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Dashboard} options={{  tabBarIcon: ({ color, size }) => (
                <Icon name='dashboard' size={20} color='black' />
              ),}} />
            <Tab.Screen name="Contact" component={Contact} options={{  tabBarIcon: ({ color, size }) => (
                <Icon name='phone' size={20} color='black' />
              ),}} />
            <Tab.Screen name="Appointments" component={Appointments} options={{  tabBarIcon: ({ color, size }) => (
                <Icon name='calendar' size={20} color='black' />
              ),}} />
            <Tab.Screen name="Settings" component={Settings} options={{  tabBarIcon: ({ color, size }) => (
                <Icon name='gears' size={20} color='black' />
              ),}}/>
        </Tab.Navigator>
    )
}
