import React from 'react';
import {SearchIcon} from "../definitions/Icons";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import DetailPage from "../components/Detail/DetailPage";
import {SCREEN_DETAIL, SCREEN_RECHERCHE} from "../definitions/ScreenName";
import RecherchePage from "../components/Recherche/RecherchePage";

/** Constantes **/
const {Navigator, Screen} = createBottomTabNavigator();

/**
 * Composant principale qui gère la navigation
 */
const NavigatorApplication = () => (
    <NavigationContainer>
        <Navigator tabBar={props => <BottomTabBar {...props}/>}>
            <Screen name={SCREEN_RECHERCHE} component={RecherchePage}/>
            <Screen name={SCREEN_DETAIL} component={DetailPage}/>
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
        <BottomNavigationTab title={SCREEN_RECHERCHE} icon={SearchIcon}/>
    </BottomNavigation>
);

export default NavigatorApplication;