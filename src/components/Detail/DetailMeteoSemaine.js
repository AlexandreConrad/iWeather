import React from "react";
import {Image, ScrollView, StyleSheet, View, Dimensions} from "react-native"
import {Layout, Text} from "@ui-kitten/components";
import {toDay} from "../../util/date";
import {getMeteoIcon} from "../../api/WeatherMap";
import {LineChart} from "react-native-svg-charts";

/**
 *  Graphique de la météo de la semaine
 **/
const DetailMeteoSemaine = ({daily}) => {

    /**
     * Récupération de toutes les températures minimales de la semaine
     */
    const getTempMin = () => {
        const data = [];
        daily.slice(1, 6).forEach(jour => {
            data.push(jour.temp.min);
        });
        return data
    };

    /**
     * Récupération des températures maximales de la semaine
     */
    const getTempMax = () => {
        const data = [];
        daily.slice(1, 6).forEach(jour => {
            data.push(jour.temp.max);
        });

        return data
    };

    /**
     * Retourne la météo des 7 prochains jours
     */
    const render = () => {

        //CSS Custom
        let items = []
        let index = 0
        for (let jour of daily.slice(1, 8)) {
            let marginLeft = 0
            let marginRight = 10
            if (index === 0) {
                marginLeft = 15
            } else if (index === 6) {
                marginRight = 15
            }

            items.push(
                <View style={{alignItems: "center", marginLeft: marginLeft, marginRight: marginRight}} key={index++}>
                    <Text style={{textTransform: 'uppercase'}}>{toDay(new Date(jour.dt * 1000))}</Text>
                    <Image style={styles.image} source={{uri: getMeteoIcon(jour.weather[0].icon)}}/>
                    <Text>{Math.floor(jour.temp.day)}°C</Text>
                </View>)
        }
        return items
    }

    const {width} = Dimensions.get('window');

    return <Layout level={"2"}>
        <ScrollView horizontal={true}>
            <View style={{minWidth: width}}>
                <View style={{...styles.row, zIndex: 2}}>
                    {render()}
                </View>

                <View style={{marginTop: -50, zIndex: 1, opacity: 0.5}}>
                    <LineChart
                        style={{height: 50}}
                        data={getTempMax()}
                        svg={{stroke: 'rgb(134, 65, 244)'}}
                    />

                    <LineChart
                        style={{height: 50, marginTop: -50}}
                        data={getTempMin()}
                        svg={{stroke: 'rgb(134, 65, 244)'}}
                    />
                </View>
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
    }
});

export default DetailMeteoSemaine
