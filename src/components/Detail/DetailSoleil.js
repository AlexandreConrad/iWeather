import React from "react"
import {Layout, Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import {toHoursMinute} from "../../util/date";

/**
 * Progress bar du soleil
 */
const DetailSoleil = ({current}) => {

    /** Variables **/
    const actual = new Date();
    const sunrise = new Date(current.sunrise * 1000);
    const sunset = new Date(current.sunset * 1000);
    let percent;

    /** Progress bar à 100% car fin de journée **/
    if (actual > sunset) {
        percent = 100
    } else if (actual < sunrise) { /** Avant le lever du jour **/
        percent = 0
    } else { /** Calcul du pourcentage **/
        const diffSunsetToActual = sunset.getTime() - actual.getTime();
        const diffSunsetToSunrise = sunset.getTime() - sunrise.getTime();
        percent = Math.floor((diffSunsetToActual / diffSunsetToSunrise) * 100)
    }

    return <Layout level={"2"} style={styles.container}>
        <View style={styles.row}>
            <Text category={"h6"}>Soleil</Text>
        </View>
        <View style={styles.row}>
            <View style={{width: `${percent}%`, height: 10, backgroundColor: "orange"}}/>
            <View style={{width: `${100 - percent}%`, height: 10, backgroundColor: "gray"}}/>
        </View>
        <View style={{...styles.row, justifyContent: "space-between"}}>
            <Text>{toHoursMinute(sunrise)}</Text>
            <Text>{toHoursMinute(sunset)}</Text>
        </View>

    </Layout>
};

const styles = StyleSheet.create({
    row: {
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    }
});

export default DetailSoleil