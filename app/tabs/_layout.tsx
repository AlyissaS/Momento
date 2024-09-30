import React from "react";
import {Tabs} from 'expo-router';
import TabBar from '@/components/TabBar';

export default function RootLayout() {
return(
        <Tabs tabBar={props=><TabBar {...props}/>}>
            <Tabs.Screen name="dashboard" options={{headerShown:false,}}/>
            <Tabs.Screen name="memories" options={{headerShown:false,}}/>
            <Tabs.Screen name="chat" options={{headerShown:false,}}/>
            <Tabs.Screen name="questions" options={{headerShown:false,}}/>
        </Tabs>
)
}