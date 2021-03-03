import React from "react"
import RecherchePage from "../components/Recherche/RecherchePage";
import {createStackNavigator} from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator();

const RechercheNav = () => {
    return <Navigator initialRouteName="Recherche" headerMode={"none"}>
        <Screen name={"Recherche"} component={RecherchePage}/>
    </Navigator>
};

export default RechercheNav