import React from "react";
import {Image, StyleSheet, View} from "react-native"
import {getMeteoIcon} from "../../api/WeatherMap";
import {Layout, Text} from "@ui-kitten/components";

/**
 * Premier bloc de la page en détails
 */
const DetailPrincipal = ({current, daily}) => {

    return <Layout level={"2"}>
        <View style={{flexDirection: 'column'}}>
            <View style={styles.row}>
                <Image style={styles.image} source={{uri: getMeteoIcon(current.weather[0].icon)}}/>
                <Text style={{fontSize: 38}}>{Math.floor(current.temp)}°</Text>
            </View>
            <View style={styles.informations}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16}}>Min. {Math.floor(daily[0].temp.min)}°</Text>
                    <Text style={{marginHorizontal: 7.5, fontSize: 16}}>|</Text>
                    <Text style={{fontSize: 16}}>Max. {Math.floor(daily[0].temp.max)}°</Text>
                </View>
            </View>
        </View>
    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    image: {
        height: 80,
        width: 80,
    },
    informations: {
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop: -15,
    }
});

export default DetailPrincipal