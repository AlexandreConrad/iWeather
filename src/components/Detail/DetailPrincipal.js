import React from "react";
import {Image, StyleSheet, View} from "react-native"
import {getMeteoIcon} from "../../api/WeatherMap";
import {Layout, Text} from "@ui-kitten/components";
import {toHoursMinute} from "../../util/date";

const DetailPrincipal = ({name, current, daily}) => {


    return <Layout style={styles.row} level={"2"}>
        <View style={styles.column}>
            <View style={styles.row}>
                <Image style={styles.image} source={{uri: getMeteoIcon(current.weather[0].icon)}}/>
                <Text style={{paddingRight: 30}}>{name}</Text>
            </View>
            <View style={styles.row}>
                <Text>{current.weather[0].description}</Text>
            </View>
        </View>
        <View style={styles.column}>
            <Text>{Math.floor(current.temp)}°C</Text>
            <Text>{toHoursMinute(new Date())}</Text>
            <Text>min : {Math.floor(daily[0].temp.min)}°C max : {Math.floor(daily[0].temp.max)}°C</Text>
        </View>
    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
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

export default DetailPrincipal