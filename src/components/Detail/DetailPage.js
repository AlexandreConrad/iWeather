import React, {useEffect, useState} from "react"
import {StyleSheet, View} from 'react-native';
import {Layout} from "@ui-kitten/components";
import Header from "../Header";
import {weatherDetailCity} from "../../api/WeatherMap";
import DetailPrincipal from "./DetailPrincipal";
import DetailMeteoHeure from "./DetailMeteoHeure";
import DetailInformation from "./DetailInformation";
import DetailSoleil from "./DetailSoleil";
import DetailMeteoSemaine from "./DetailMeteoSemaine";

const DetailPage = ({route, navigation}) => {
    const research = route.params.research;

    const [result, setResult] = useState({});
    const {current, daily, hourly} = result;


    useEffect(() => {
        weatherDetailCity(research.coord.lat, research.coord.lon).then(result => {
            setResult(result.data)

        })
    }, [research.coord.lat, research.coord.lon]);

    if (!current) {
        return <Layout/>
    }

    return <Layout style={styles.container}>
        <Header navigation={navigation}/>
        <DetailPrincipal name={research.name} current={current} daily={daily}/>
        <View style={styles.space}/>
        <DetailMeteoHeure hourly={hourly}/>
        <View style={styles.space}/>
        <DetailInformation current={current}/>
        <View style={styles.space}/>
        <DetailSoleil current={current}/>
        <View style={styles.space}/>
        <DetailMeteoSemaine daily={daily}/>
    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    space: {
        marginTop: 20
    }
});

export default DetailPage