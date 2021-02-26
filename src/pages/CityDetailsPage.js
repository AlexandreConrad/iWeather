/** Import React **/
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, ScrollView, ActivityIndicator,View} from 'react-native';
import Image from 'react-native-remote-svg';

/** UI Kitten **/
import {Layout, Button, List} from "@ui-kitten/components";

/** Import de Redux **/
import {connect} from "react-redux";

/** Import helpers favoris **/
import {getWeatherMapByID,getWeatherMapName} from "../api/WeatherMap";
import utils from "../utils/utils";
import Assets from "../definitions/Assets";

const CityDetailsPage = ({navigation,route,favObjects,dispatch}) => {

    //Fonction pour le switch de boutton et la sauvegarde
    const saveCity = () => {
        console.log("fonction save")
        if (favObjects.findIndex(i => i === route.params.dataAPI.id) !== -1) {
            return (
                <Button
                    appearance='ghost'  accessoryLeft={Assets.HeartFull}
                    onPress={() => utils.unsaveObject(route.params.dataAPI.id,dispatch)}>
                </Button>
            );
        }
        return (
            <Button
                appearance='ghost'  accessoryLeft={Assets.HeartIcon}
                onPress={() => utils.saveObject(route.params.dataAPI.id,dispatch)}>
            </Button>
        );
    }

    return (
        <Layout style={styles.container}>
            <Text>{route.params.dataAPI.name}</Text>
            <Text>{route.params.dataAPI.main.temp}</Text>
            <Text>{route.params.dataAPI.weather[0].description}</Text>
            <Text>Humidité : {route.params.dataAPI.main.humidity}</Text>
            <Text>Pression : {route.params.dataAPI.main.pressure}</Text>
            <Text>Temp max : {route.params.dataAPI.main.temp_max}</Text>
            <Text>Temp min  : {route.params.dataAPI.main.temp_min}</Text>
            <Text>lat  : {route.params.dataAPI.coord.lat} lon  : {route.params.dataAPI.coord.lon}</Text>
            <Image source={require('../../public/animated/cloudy-day-1.svg')}/>
            <Layout>{saveCity()}</Layout>
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
