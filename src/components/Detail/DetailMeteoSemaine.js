import React from "react";
import {Image, StyleSheet, View} from "react-native"
import {Layout, Text} from "@ui-kitten/components";
import {toDay} from "../../util/date";
import {getMeteoIcon} from "../../api/WeatherMap";

const DetailMeteoSemaine = ({daily}) => {

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