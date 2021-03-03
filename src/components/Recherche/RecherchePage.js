import React, {useEffect, useState} from "react"
import {StyleSheet} from 'react-native';
import {Button, Input, Layout, List} from "@ui-kitten/components";
import {weatherSearchByCity} from "../../api/WeatherMap";
import RechercheCard from "./RechercheCard";

const RecherchePage = () => {

    const [city, setCity] = useState("");
    const [stateCode, setStateCode] = useState("");
    const [country, setCountry] = useState("");

    const [recherches, setRecherches] = useState([]);

    useEffect(() => {
        if (city !== "" || stateCode !== "" || country !== "")
            weatherSearchByCity(city, stateCode, country).then(result => {
                if (!result.error) {
                    setRecherches(result.data.list)
                } else {
                    setRecherches([])
                }
            })

    }, [city, stateCode, country]);

    return <Layout style={styles.container}>

        {/** Zone de recherche */}
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

        <Layout style={styles.search} level={"2"}>
            <List
                style={{margin: 10}}
                data={recherches}
                renderItem={RechercheCard}
            />
        </Layout>
    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        margin: 20,
        marginTop: 10,
        marginBottom: 10,
        flex: 1
    },
    search: {
        marginTop: 20,
        flex: 1
    }
});

export default RecherchePage