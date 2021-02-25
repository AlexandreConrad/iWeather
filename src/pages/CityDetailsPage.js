/** Import React **/
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, ScrollView, ActivityIndicator,View} from 'react-native';

/** UI Kitten **/
import {Layout, Button, List} from "@ui-kitten/components";

/** Import de Redux **/
import {connect} from "react-redux";

/** Import helpers favoris **/
import {getWeatherMapByID,getWeatherMapName} from "../api/WeatherMap";
import utils from "../utils/utils";

const CityDetailsPage = ({navigation,route,favObjects,dispatch}) => {

    return (
        <Layout style={styles.container}>
            <Text>Test fav</Text>
        </Layout>
    );
}

export default connect(utils.mapStateToProp)(CityDetailsPage);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
