import React from "react"
import {Layout, Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";

/**
 * Informations de la météo du jour
 */
const DetailInformation = ({current}) => {
    return <Layout level={"2"}>
        <View style={styles.row}>
            <View style={styles.titles}>
                <Text style={styles.indicateurs}>Indice UV</Text>
                <Text style={styles.valeurs}>{current.uvi}</Text>
            </View>

            <View style={styles.titles}>
                <Text style={styles.indicateurs}>Ressenti</Text>
                <Text style={styles.valeurs}>{Math.floor(current.feels_like)} °C</Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.titles}>
                <Text style={styles.indicateurs}>Pression</Text>
                <Text style={styles.valeurs}>{current.pressure}</Text>
            </View>

            <View style={styles.titles}>
                <Text style={styles.indicateurs}>Humidité</Text>
                <Text style={styles.valeurs}>{current.humidity} %</Text>
            </View>
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
    titles: {
        margin: 7.5,
    },
    indicateurs: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    valeurs: {
        textAlign: 'center',
    },
});

export default DetailInformation