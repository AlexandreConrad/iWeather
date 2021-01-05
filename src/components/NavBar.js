import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';

/** Import des components **/
import Test from "./Test";
import TestBis from "./TestBis";

/** Constantes **/
const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Menu'/>
        <BottomNavigationTab title='Favoris'/>
        <BottomNavigationTab title='Activités'/>
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Menu' component={Test}/>
        <Screen name='Favoris' component={TestBis}/>
        <Screen name='Activités' component={TestBis}/>
    </Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
);

export default AppNavigator;