import React from "react";
import {Image, StyleSheet, View} from "react-native"
import {Layout, Text} from "@ui-kitten/components";
import {toDay} from "../../util/date";
import {getMeteoIcon} from "../../api/WeatherMap";
import {LineChart} from "react-native-svg-charts";

/**
 *  Graphique de la météo de la semaine
 * **/
const DetailMeteoSemaine = ({daily}) => {

    /**
     * Récupération de toutes les températures minimales de la semaine
     */
    const getTempMin = () => {
        const data = [];
        daily.forEach(jour => {
            data.push(jour.temp.min);
        });
        return data
    };

    /**
     * Récupération des températures maximales de la semaine
     */
    const getTempMax = () => {
        const data = [];
        daily.forEach(jour => {
            data.push(jour.temp.max);
        });

        return data
    };

    return <Layout level={"2"}>
        <View style={styles.row}>
            {daily.map((jour, index) =>
                <View style={{alignItems: "center"}} key={index}>
                    <Text>{toDay(new Date(jour.dt * 1000))}</Text>
                    <Image style={styles.image} source={{uri: getMeteoIcon(jour.weather[0].icon)}}/>
                    <Text>{Math.floor(jour.temp.day)}°C</Text>
                </View>
            )}
        </View>

        <LineChart
            style={{height: 50}}
            data={getTempMax()}
            svg={{stroke: 'rgb(134, 65, 244)'}}
        />

        <LineChart
            style={{height: 50}}
            data={getTempMin()}
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

export default DetailMeteoSemaine