import {Card, Text} from "@ui-kitten/components";
import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {SCREEN_DETAIL} from "../definitions/ScreenName";
import {getMeteoIcon} from "../api/WeatherMap";

/**
 * Carte d'une ville
 * Commun à FavorisPage et RecherchePage
 */
const MeteoCard = ({item, navigation}) => {

    /** Déconstruction de l'objet item **/
    const {main, sys, name} = item;
    const weather = item.weather[0];

    return <Card style={styles.card} onPressIn={() => navigation.navigate(SCREEN_DETAIL, {research: item})}>
        <View style={styles.container}>
            <View style={styles.containerRight}>
                <Image
                    style={styles.image}
                    source={{uri: getMeteoIcon(weather.icon)}}
                />
                <Text style={styles.meteoText}>{Math.floor(main.temp)}°C</Text>
            </View>
            <View style={styles.containerLeft}>
                <Text>{sys.country} - {name}</Text>
            </View>
        </View>
    </Card>
};

const styles = StyleSheet.create({
    card: {
        marginTop: 10
    },
    container: {
        flexDirection: "row"
    },
    containerRight: {
        flex: 1,
        alignItems: "center"
    },
    containerLeft: {
        flex: 3,
        justifyContent: "center"
    },
    image: {
        width: 50,
        height: 50,
        flex: 1
    },
    meteoText: {
        flex: 1
    }
});


export default MeteoCard