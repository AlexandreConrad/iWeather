import React from "react"
import HomePage from "../components/Home/HomePage";
import {createStackNavigator} from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator();

const RechercheNav = props => {
    return <Navigator initialRouteName="Recherche" headerMode={"none"}>
        <Screen name={"Recherche"} component={HomePage}/>
    </Navigator>
};

export default RechercheNav