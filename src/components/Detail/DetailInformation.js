import React from "react"
import {Layout, Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";

const DetailInformation = ({current}) => {
    return <Layout level={"2"}>
        <View style={styles.row}>
            <Text category={"h6"}>Informations: </Text>
        </View>
        <View style={styles.row}>
            <Text>Indice UV : {current.uvi}</Text>
            <Text>Ressenti : {Math.floor(current.feels_like)}°C</Text>
        </View>
        <View style={styles.row}>
            <Text>Pression : {current.pressure}</Text>
            <Text>Humidité : {current.humidity}</Text>
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
    }
});

export default DetailInformation