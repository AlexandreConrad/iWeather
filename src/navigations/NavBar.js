/** Import React **/
import React from 'react';

/** React navigator **/
import { createStackNavigator } from '@react-navigation/stack';

/** Import Définitions **/
import Assets from "../definitions/Assets";
import {StyleHeader} from "../definitions/SearchPageStyle";

/** Import des components **/
import SearchPage from "../pages/SearchPage";
import ListCity from "../pages/FavorisPage.js";
import Test from "../pages/Test";
import CityDetailsPage from "../pages/CityDetailsPage";

/** Import UIKITTEN**/
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import ListItemCity from "../components/ListItemCity";

/** Constantes **/
const { Navigator, Screen } = createBottomTabNavigator();
const SearchNavigation = createStackNavigator();
const FavNavigation = createStackNavigator();

/**
 * Gestions de la page principale
 */
function HomePageScreen() {
    return (
        <SearchNavigation.Navigator initialRouteName="ViewHomePage">
            <SearchNavigation.Screen
                name="ViewHomePage"
                component={SearchPage}
                options={{
                    title: 'Emplacement',
                    headerStyle: {
                        backgroundColor: '#222b45',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <SearchNavigation.Screen
                name="CityDetailsPage"
                component={CityDetailsPage}
                options={{
                    title: 'Recherche',
                    headerStyle: {
                        backgroundColor: '#222b45',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </SearchNavigation.Navigator>
    )
};

/***
 * Gestions de la page favori
 */
function FavPageScreen() {
    return (
        <FavNavigation.Navigator
            initialRouteName="ViewFavPage"
        >
            <FavNavigation.Screen
                name="ViewFavPage"
                component={ListCity}
                options={{
                    title: 'Favoris',
                    headerStyle: {
                        backgroundColor: '#222b45',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </FavNavigation.Navigator>
    )
};

/***
 * Gestions de les activités
 */
function ActivityPageScreen() {
    return (
        <FavNavigation.Navigator
            initialRouteName="ViewFavPage"
        >
            <FavNavigation.Screen
                name="ViewFavPage"
                component={Test}
                options={{
                    title: 'Activités',
                    headerStyle: {
                        backgroundColor: '#222b45',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </FavNavigation.Navigator>
    )
};

/**
 * Visuel des buttons
 */
const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Recherche' icon={Assets.SearchIcon}/>
        <BottomNavigationTab title='Favoris' icon={Assets.globeIcon}/>
        <BottomNavigationTab title='Activités' icon={Assets.PinIcon}/>
    </BottomNavigation>
);

/**
 * Fonction qui déclare les composants
 */
const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Recherche' component={HomePageScreen}/>
        <Screen name='Favoris' component={FavPageScreen}/>
        <Screen name='Activités' component={ActivityPageScreen}/>
    </Navigator>
);

/**
 * Composant principale qui gère la navigation
 * Premier appelé
 */
const NavigatorApplication = () => (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
);

export default NavigatorApplication;
