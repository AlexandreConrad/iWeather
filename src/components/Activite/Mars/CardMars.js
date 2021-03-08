import {Card, Text} from "@ui-kitten/components";
import React from "react";
import {StyleSheet, View} from "react-native";
import {toMonthDayYears} from "../../../util/date";

/**
 * Carte d'un sol sur mars
 */
const CardMars = ({item,title}) => {

    /** Déconstruction de l'objet item **/
    const data = item;

    return <Card style={styles.card}>
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text>Sol {title}</Text>
                <Text>{toMonthDayYears(new Date(data.First_UTC))}</Text>
            </View>

            <View style={styles.containerBottom}>
                <Text>Pression maximal : {Math.floor(data.PRE.mx)}</Text>
                <Text>Pression minimal: {Math.floor(data.PRE.mn)}</Text>
            </View>
        </View>
    </Card>
};

const styles = StyleSheet.create({
    card: {
        marginTop: 2,
        flex: 1,
    },
    container: {
        flexDirection: "row",
        flex: 1,
    },
    containerTop: {
        flex: 1,
    },
    containerBottom: {
        flex: 2,
    },
});


export default CardMars