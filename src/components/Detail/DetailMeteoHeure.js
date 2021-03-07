import React, {useEffect, useState} from "react";
import {Image, StyleSheet, View} from "react-native"
import {Layout, Text} from "@ui-kitten/components";
import {getMeteoIcon} from "../../api/WeatherMap";
import {toHours} from "../../util/date";
import {Grid, LineChart} from "react-native-svg-charts";

const DetailMeteoHeure = ({hourly}) => {

    /**
     * Récupération de la température des 5 prochaines heures
     */
    const getData = () => {
        const data = [];
        for(let i = 0; i < 5; i++) {
            data.push(hourly[i].temp)
        }
        return data
    };

    return <Layout level={"2"}>
        <View style={styles.row}>
            {[1, 2, 3, 4, 5].map(index => <View key={index} style={styles.column}>
                <Text>{toHours(new Date(hourly[index].dt * 1000))}H</Text>
                <Image style={styles.image} source={{uri: getMeteoIcon(hourly[index].weather[0].icon)}}/>
                <Text>{Math.floor(hourly[index].temp)}°C</Text>
            </View>)}
        </View>

        <LineChart
            style={{height: 50}}
            data={getData()}
            svg={{stroke: 'rgb(134, 65, 244)'}}
        />

    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    column: {
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    image: {
        height: 40,
        width: 40
    }
});

export default DetailMeteoHeure