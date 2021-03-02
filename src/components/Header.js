import React from "react";

import {Layout, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {MoonIcon, SunIcon} from "../definitions/Assets";

import {connect} from "react-redux";
import {setLight} from "../reduxStore/actions/system";

/**
 *  Page de gestion du Header de l'application
 *  Permet la gestion du darkMode et nom de l'application
 */

const Header = props => {

    /** Gestion du darkMode**/
    const icon = props.light ? MoonIcon : SunIcon;

    return <Layout>
        <TopNavigation
            title={props.title}
            alignment={"center"}
            accessoryRight={() => <TopNavigationAction icon={icon} onPressIn={() => props.setLight(!props.light)}/>}
        />
    </Layout>
};

/**
 * Fonction qui permet d'ajouter à notre props le darkMode selectionné avant
 * @param state (State de redux)
 * @returns {{light: *}}
 */
const mapStateToProps = state => {
    return {
        light: state.system.light
    };
};

/**
 * Fonction qui permet de changer le darkMode dans le redux
 * @param dispatch
 * @returns {{setLight: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => {
    return {
        setLight: light => dispatch(setLight(light))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header)