import React from 'react';
import {SearchIcon} from "../definitions/Assets";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import RechercheNav from "./RechercheNav";

/** Constantes **/
const {Navigator, Screen} = createBottomTabNavigator();

/**
 * Composant principale qui gère la navigation
 */
const NavigatorApplication = () => (
    <NavigationContainer>
        <Navigator tabBar={props => <BottomTabBar {...props} />}>
            <Screen name={"Recherche"} component={RechercheNav}/>
        </Navigator>
    </NavigationContainer>
);

/**
 * Gestions des boutons, permet de faire les fonctionnalités
 */
const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title={"Recherche"} icon={SearchIcon}/>
    </BottomNavigation>
);

export default NavigatorApplication;