import React from "react"
import {Layout, Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import {toHoursMinute} from "../../util/date";
import {ProgressCircle} from "react-native-svg-charts";

/**
 * Progress bar du soleil
 */
const DetailSoleil = ({current}) => {

    /** Variables **/
    const actual = new Date();
    const sunrise = new Date(current.sunrise * 1000);
    const sunset = new Date(current.sunset * 1000);
    let percent;

    /** Calcul le pourcentage du soleil a afficher **/
    if (actual > sunset) {
        percent = 1
    } else if (actual < sunrise) {
        percent = 0
    } else {
        const diffSunsetToActual = sunset.getTime() - actual.getTime();
        const diffSunsetToSunrise = sunset.getTime() - sunrise.getTime();
        percent = 1 - (diffSunsetToActual / diffSunsetToSunrise)
    }

    return (<Layout level={"2"} style={styles.container}>
        <View style={{marginBottom: -100}}>
            <ProgressCircle
                style={{height: 200}}
                progress={percent}
                progressColor={'orange'}
                startAngle={-Math.PI * 0.5} // Début du cercle
                endAngle={Math.PI * 0.5}    // Fin du cercle
            />
        </View>
        <View style={{...styles.row, justifyContent: "center"}}>
            <Text style={{textAlign: 'center', width: 50}}>{toHoursMinute(sunrise)}</Text>
            <View style={{width: 140}}/>
            <Text style={{textAlign: 'center', width: 50}}>{toHoursMinute(sunset)}</Text>
        </View>
    </Layout>)
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