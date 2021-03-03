import React from "react";

import {connect} from "react-redux";
import {ApplicationProvider} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import Navigation from "./navigations/Navigation";

import {StatusBar} from "expo-status-bar"; // Permet de cacher la barre du téléphone

const Application = props => {
    return <ApplicationProvider {...eva} theme={props.light ? eva.light : eva.dark}>
        <StatusBar hidden={true}/>
        <Navigation/>
    </ApplicationProvider>
};

/**
 * Fonction qui permet d'ajouter à notre props le darkMode selectionné avant
 * @param state (State de redux)
 * @returns {{light: *}}
 */
const mapStateToProps = state => {
    return {
        light: state.system.light
    }
};

export default connect(mapStateToProps)(Application)