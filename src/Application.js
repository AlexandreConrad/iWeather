import {connect} from "react-redux";
import {ApplicationProvider} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import NavBar from "./navigations/NavBar";
import React from "react";

const Application = props => {
    return <ApplicationProvider {...eva} theme={props.light ? eva.light : eva.dark}>
        <NavBar/>
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