import {Card, Text} from "@ui-kitten/components";
import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {toHoursMinute, toMonthDayYears} from "../../../util/date";

/**
 * Carte d'un sol sur mars
 */
const CardMars = ({item,title}) => {

    /** Déconstruction de l'objet item **/
    console.log(item);

    return <Card style={styles.card}>
        <View style={styles.container}>

            <View style={styles.containerTop}>
                <Text>Sol {title}</Text>
                <Text>{toMonthDayYears(new Date(item.First_UTC))}</Text>
            </View>

            <View style={styles.containerBottom}>
                <Text>Pression maximal : {item.PRE.mx}</Text>
                <Text>Pression minimal: {item.PRE.mn}</Text>
            </View>
        </View>
    </Card>
};

const styles = StyleSheet.create({
    card: {
        marginTop: 10
    },
    container: {
        flexDirection: "column"
    },
    containerTop: {
        flex: 1,
    },
    containerBottom: {
        flex: 1,
        marginTop: 5,
    },
});


export default CardMars