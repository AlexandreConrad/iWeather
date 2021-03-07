import React, {useEffect, useState} from "react"
import {StyleSheet, View} from 'react-native';
import {Button, Input, Layout, List} from "@ui-kitten/components";
import {weatherSearchByCity} from "../../api/WeatherMap";
import MeteoCard from "../MeteoCard";
import Header from "../Header";
import * as Location from 'expo-location'

/**
 * Page de recherche
 */

const RecherchePage = props => {

    /** Constantes de la page **/
    const [city, setCity] = useState("");
    const [stateCode, setStateCode] = useState("");
    const [country, setCountry] = useState("");
    const [recherches, setRecherches] = useState([]);

    /**
     * Appeler au chargement de la page si les dépendances ont été changées
     **/
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

    /**
     * Permet la géolocalisation
     **/
    const getLocation = () => {
        (async () => {
            // Demande d'accès à la localisation
            let {status} = await Location.requestPermissionsAsync();
            if (status === "granted") {
                //Récupération de la position
                Location.getCurrentPositionAsync({}).then(result => {
                    console.log(result);
                    setCity(result.city);
                    setStateCode(result.postalCode);
                });
            }
        })()
    };

    return <Layout style={styles.container}>

        {/** Bandeau du nom de l'application **/}
        <Header/>

        {/** Zone de saisie de recherche **/}
        <Layout>
            <View style={styles.row}>
                <Input
                    style={styles.input}
                    value={city}
                    onChangeText={nextValue => setCity(nextValue)}
                    placeholder={"Ville"}
                />
            </View>
            <View style={styles.row}>
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
            </View>
            <View style={styles.row}>
                <Button style={styles.input} onPressIn={getLocation}>
                    Me géolocaliser
                </Button>
            </View>
        </Layout>

        {/** Liste des propositions **/}
        <Layout style={styles.search} level={"2"}>
            <List
                style={{margin: 10}}
                data={recherches}
                renderItem={render => <MeteoCard item={render.item} navigation={props.navigation}/>}
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