import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';

/** Import des components **/
import SearchPage from "../pages/SearchPage";
import TestBis from "../pages/TestBis";
import Test from "../pages/Test";

/** Import Assets **/
import Assets from "../definitions/Assets";

/** Constantes **/
const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Recherche' icon={Assets.SearchIcon}/>
        <BottomNavigationTab title='Favoris' icon={Assets.globeIcon}/>
        <BottomNavigationTab title='Activités' icon={Assets.PinIcon}/>
    </BottomNavigation>
);

const TabNavigator = () => {
    return (
        <Navigator tabBar={props => <BottomTabBar {...props} />}>
            <Screen name='Recherche' component={SearchPage}/>
            <Screen name='Favoris' component={TestBis}/>
            <Screen name='Activités' component={Test}/>
        </Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
};

export default AppNavigator;