import React, {useEffect, useState} from "react"
import {StyleSheet, View} from 'react-native';
import {Button, Input, Layout, List} from "@ui-kitten/components";
import {weatherSearchByCity} from "../../api/WeatherMap";
import MeteoCard from "../MeteoCard";
import Header from "../Header";
import * as Location from 'expo-location'
import Geocode from "react-geocode";
import AnimatedView from '../Animations/AnimatedView'
Geocode.setApiKey(`AIzaSyCcCihkFq_XO1uFXI_0f0LA5i9EAByoOjM`);

/**
 * Page de recherche
 */
const RecherchePage = props => {

    /** Constantes de la page **/
    const [city, setCity] = useState("");
    const [stateCode, setStateCode] = useState("");
    const [country, setCountry] = useState("");
    const [recherches, setRecherches] = useState([]);

    /** Recherche de la liste des villes avec des informations sur la météo **/
    const fetchWeather = async (city, stateCode, country) => {
        const result = await weatherSearchByCity(city, stateCode, country)

        if (!result.error) {
            setRecherches(result.data.list)
        } else {
            setRecherches([])
        }
    }

    /** Mise à jour de la ville **/
    const updateCity = async (city) => {
        setCity(city)
        await fetchWeather(city, stateCode, country)
    }

    /** Mise à jour du pays **/
    const updateCountry = async (country) => {
        setCountry(country)
        await fetchWeather(city, stateCode, country)
    }

    /** Mise à jour du code postal **/
    const updateStateCode = async (stateCode) => {
        setStateCode(stateCode)
        await fetchWeather(city, stateCode, country)
    }

    /**
     *  Retourne la ville et le pays à partir d'une position GPS ( latitude et longitude )
     **/
    const getGeolocation = async (latitude, longitude) => {
        const response = await Geocode.fromLatLng(latitude, longitude);
        let city, postal, country;
        for (let i = 0; i < response.results[0].address_components.length; i++) {
            for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                switch (response.results[0].address_components[i].types[j]) {
                    case "locality":
                        city = response.results[0].address_components[i].long_name;
                        break;
                    case "postal_code":
                        postal = response.results[0].address_components[i].long_name;
                        break;
                    case "country":
                        country = response.results[0].address_components[i].long_name;
                        break;
                }
            }
        }
        return {city, postal, country}
    }


    /**
     * Permet la géolocalisation
     **/
    const getLocation = async () => {
        // Demande d'accès à la localisation
        let {status} = await Location.requestPermissionsAsync();
        if (status === "granted") {
            //Récupération de la position
            const result = await Location.getCurrentPositionAsync({});
            const {city, postal, country} = await getGeolocation(result.coords.latitude, result.coords.longitude)
            setCity(city);
            setCountry(country);
            setStateCode(postal)
            await fetchWeather(city, stateCode, country);
        }
    };

    return <Layout style={styles.container}>

        {/** Bandeau du nom de l'application **/}
        <Header title={'iWeather'}/>

        {/** Zone de saisie de recherche **/}
        <Layout>
            <View style={styles.row}>
                <Input
                    style={styles.input}
                    value={city}
                    onChangeText={nextValue => updateCity(nextValue)}
                    placeholder={"Ville"}
                />
            </View>
            <View style={styles.row}>
                <Input
                    style={styles.input}
                    value={stateCode}
                    onChangeText={nextValue => updateStateCode(nextValue)}
                    placeholder={"Code Postal"}
                />
                <Input
                    style={styles.input}
                    value={country}
                    onChangeText={nextValue => updateCountry(nextValue)}
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
                renderItem={({item, index}) =>
                    <AnimatedView delay={index * 50} key={new Date()}>
                        <MeteoCard
                            item={item}
                            navigation={props.navigation}/>
                    </AnimatedView>}
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
