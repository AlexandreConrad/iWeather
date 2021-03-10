import React from 'react';
import {SearchIcon, StarIcon, NewsIcon, MarsIcon} from "../definitions/Icons";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {SCREEN_DETAIL, SCREEN_FAVORIS, SCREEN_RECHERCHE, SCREEN_NEWS, SCREEN_MARS} from "../definitions/ScreenName";
import RecherchePage from "../components/Recherche/RecherchePage";
import FavorisPage from "../components/Favoris/FavorisPage";
import NewsPage from "../components/News/NewsPage";
import MarsPage from "../components/Mars/MarsPage";
import DetailPage from "../components/Detail/DetailPage";

/**
 * Compomenent qui enregistre les écrans de l'application
 */

const {Navigator, Screen} = createBottomTabNavigator();

/**
 * Premier composant appelé
 * Permet d'enregistrer tous nos écrans de l'application
 */
const NavigatorApplication = () => (
    <NavigationContainer>
        <Navigator tabBar={props => <BottomTabBar {...props}/>}>
            <Screen name={SCREEN_RECHERCHE} component={RecherchePage}/>
            <Screen name={SCREEN_FAVORIS} component={FavorisPage}/>
            <Screen name={SCREEN_NEWS} component={NewsPage}/>
            <Screen name={SCREEN_MARS} component={MarsPage}/>
            <Screen name={SCREEN_DETAIL} component={DetailPage}/>
        </Navigator>
    </NavigationContainer>
);

/**
 * Menu de navigation en bas de l'application
 */
const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title={SCREEN_RECHERCHE} icon={SearchIcon}/>
        <BottomNavigationTab title={SCREEN_FAVORIS} icon={StarIcon}/>
        <BottomNavigationTab title={SCREEN_NEWS} icon={NewsIcon}/>
        <BottomNavigationTab title={SCREEN_MARS} icon={MarsIcon}/>
    </BottomNavigation>
);

export default NavigatorApplication;