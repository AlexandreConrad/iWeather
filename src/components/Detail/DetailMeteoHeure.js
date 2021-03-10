import React from "react";
import {Image, StyleSheet, View, ScrollView} from "react-native"
import {Layout, Text} from "@ui-kitten/components";
import {getMeteoIcon} from "../../api/WeatherMap";
import {toHours} from "../../util/date";
import {LineChart} from "react-native-svg-charts";

/**
 * Météo dans les 24 prochaines heures
 */
const DetailMeteoHeure = ({hourly}) => {

    /**
     * Récupération de la température des 24 prochaines heures
     */
    const getData = () => {
        const data = [];
        for (let i = 0; i < 24; i++) {
            data.push(hourly[i].temp);
        }
        return data;
    };

    /**
     * ScrollBar horizontal
     */
    const render = () => {

        //Gestion du CSS Custom
        let items = [];
        for (let index = 0; index < 24; index++) {
            let marginLeft = 0;
            let marginRight = 7.5;
            if (index === 0) {
                marginLeft = 15;
            } else if (index === 23) {
                marginRight = 15;
            }

            /** Retourne la liste des 24 prochaines heures **/
            items.push(
                <View key={index} style={{...styles.column, marginLeft: marginLeft, marginRight: marginRight}}>
                    <Text>{toHours(new Date(hourly[index].dt * 1000))}H</Text>
                    <Image style={styles.image} source={{uri: getMeteoIcon(hourly[index].weather[0].icon)}}/>
                    <Text>{Math.floor(hourly[index].temp)}°C</Text>
                </View>)
        }
        return items
    }

    return <Layout level={"2"}>
        <ScrollView horizontal={true}>
            <View>
                <View style={{...styles.row, zIndex: 2}}>
                    {render()}
                </View>

                <LineChart
                    style={styles.graphiques}
                    data={getData()}
                    svg={{stroke: 'rgb(134, 65, 244)'}}
                />
            </View>
        </ScrollView>

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
    },
    graphiques: {
        height: 50,
        zIndex: 1,
        marginTop: -50,
        opacity: 0.5,
    }
});

export default DetailMeteoHeure