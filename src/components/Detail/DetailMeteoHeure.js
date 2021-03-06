import React from "react";
import {Image, StyleSheet, View} from "react-native"
import {Layout, Text} from "@ui-kitten/components";
import {getMeteoIcon} from "../../api/WeatherMap";
import {toHours} from "../../util/date";

const DetailMeteoHeure = ({hourly}) => {

    return <Layout level={"2"}>

        <View style={styles.row}>
            {[1, 2, 3, 4, 5].map(index => <View key={index} style={styles.column}>
                <Text>{toHours(new Date(hourly[index].dt * 1000))}H</Text>
                <Image style={styles.image} source={{uri: getMeteoIcon(hourly[index].weather[0].icon)}}/>
                <Text>{Math.floor(hourly[index].temp)}°C</Text>
            </View>)}
        </View>

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