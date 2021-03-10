import React from "react";
import {Layout, Text, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {BackIcon,MoonIcon, SunIcon} from "../definitions/Icons";
import {connect} from "react-redux";
import {setLight} from "../reduxStore/actions/system";

/**
 *  Page de gestion du Header de l'application
 *  Permet la gestion du darkMode et nom de l'application
 */

const Header = props => {

    /** Constantes **/
    const {light, setLight, navigation} = props;

    /** Gestion du darkMode**/
    const iconLight = light ? MoonIcon : SunIcon;

    const goBack = () => {
        if (navigation) {
            navigation.goBack()
        }
    };

    const turnLight = () => {
        setLight(!light)
    };

    /** Affichage
     *  // Gestion du bouton retour à l'aide de la navigation, si la props navigations est présent, on affiche un retour
     * **/
    return <Layout>
        <TopNavigation
            title={<Text category={"h4"}>{props.title}</Text>}
            alignment={"center"}
            accessoryLeft={navigation ? () => <TopNavigationAction icon={BackIcon} onPressIn={goBack}/> : undefined}
            accessoryRight={() => <TopNavigationAction icon={iconLight} onPressIn={turnLight}/>}
        />
    </Layout>
};

/**
 * Fonction qui permet d'ajouter à notre props le darkMode selectionné avant
 * @param state (State de redux)
 */
const mapStateToProps = state => {
    return {
        light: state.system.light
    };
};

/**
 * Fonction qui permet de changer le darkMode dans le redux
 * @param dispatch
 */
const mapDispatchToProps = dispatch => {
    return {
        setLight: light => dispatch(setLight(light))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header)