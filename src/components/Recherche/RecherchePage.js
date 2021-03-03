import React, {useEffect, useState} from "react"
import {StyleSheet} from 'react-native';
import {Button, Divider, Input, Layout, Text} from "@ui-kitten/components";
import {weatherSearchByCity} from "../../api/WeatherMap";
import RechercheCard from "./RechercheCard";

const RecherchePage = () => {

    const [city, setCity] = useState("");
    const [stateCode, setStateCode] = useState("");
    const [country, setCountry] = useState("");

    const [recherches, setRecherches] = useState([]);

    useEffect(() => {
        weatherSearchByCity(city, stateCode, country).then(result => {
            if (!result.error) {
                setRecherches(result.data.list)
            } else {
                setRecherches([])
            }
        })

    }, [city, stateCode, country]);

    return <Layout style={styles.container}>

        {/** Welcome Layout*/}
        <Layout style={styles.welcome}>
            <Text category={"h3"}>Welcome</Text>
        </Layout>

        <Divider/>

        {/** Search Layout */}
        <Layout>
            <Layout style={styles.row}>
                <Input
                    style={styles.input}
                    value={city}
                    onChangeText={nextValue => setCity(nextValue)}
                    placeholder={"Ville"}
                />
            </Layout>
            <Layout style={styles.row}>
                <Input
                    style={{...styles.input, flex: 2}}
                    value={stateCode}
                    onChangeText={nextValue => setStateCode(nextValue)}
                    placeholder={"Code Postal"}
                />
                <Input
                    style={styles.input}
                    value={country}
                    onChangeText={nextValue => setCountry(nextValue)}
                    placeholder={"Pays"}
                />
            </Layout>
            <Layout style={styles.row}>
                <Button style={styles.input}>
                    Rechercher
                </Button>
            </Layout>
        </Layout>

        <Divider/>

        <Layout style={styles.search} level={"2"}>
            {recherches.map((recherche, index) =>
                <RechercheCard
                    key={index}
                    recherche={recherche}
                />)}
        </Layout>
    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        padding: 4,
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
        flex: 1
    },
    search: {
        flex: 1
    }
});

export default RecherchePage