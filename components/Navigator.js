import React from 'react'
import { StackNavigator } from 'react-navigation'
import Login from './screens/Login'
import Profile from './screens/Profile'

const Navigator = StackNavigator({
    Home: { screen: Login },
    Profile: { screen: Profile }},
    {
        navigationOptions: {
            header: false,
        }
    }

    
    
)

export default Navigator;