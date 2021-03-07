import React from 'react';
import {StarIcon, SearchIcon} from "../definitions/Icons";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import DetailPage from "../components/Detail/DetailPage";
import {SCREEN_DETAIL, SCREEN_FAVORIS, SCREEN_RECHERCHE} from "../definitions/ScreenName";
import RecherchePage from "../components/Recherche/RecherchePage";
import FavorisPage from "../components/Favoris/FavorisPage";

const {Navigator, Screen} = createBottomTabNavigator();

const NavigatorApplication = () => (
    <NavigationContainer>
        <Navigator tabBar={props => <BottomTabBar {...props}/>}>
            <Screen name={SCREEN_RECHERCHE} component={RecherchePage}/>
            <Screen name={SCREEN_FAVORIS} component={FavorisPage}/>
            <Screen name={SCREEN_DETAIL} component={DetailPage}/>
        </Navigator>
    </NavigationContainer>
);

const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title={SCREEN_RECHERCHE} icon={SearchIcon}/>
        <BottomNavigationTab title={SCREEN_FAVORIS} icon={StarIcon}/>
    </BottomNavigation>
);

export default NavigatorApplication;