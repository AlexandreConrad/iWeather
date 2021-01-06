import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab, Icon} from '@ui-kitten/components';

/** Import des components **/
import Test from "./Test";
import TestBis from "./TestBis";

/** Constantes **/
const { Navigator, Screen } = createBottomTabNavigator();

const SearchIcon = (props) => (
    <Icon {...props} name='search'/>
);

const globeIcon = (props) => (
    <Icon {...props} name='globe-2-outline'/>
);

const PinIcon = (props) => (
    <Icon {...props} name='pin-outline'/>
);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Menu' icon={SearchIcon}/>
        <BottomNavigationTab title='Favoris' icon={globeIcon}/>
        <BottomNavigationTab title='Activités' icon={PinIcon}/>
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