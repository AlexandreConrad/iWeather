/** React **/
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

/** UI KItten **/
import {Layout, Text, Button, Input} from "@ui-kitten/components";

/** Import des componenets **/
import InputBox from "../components/InputBox";

/** Import page **/
import SettingsPage from "./Settings";

/** Import des définitions **/
import Assets from "../definitions/Assets";
import StyleSearchPage from "../definitions/SearchPageStyle";

/** Call API **/
import {getWeatherMapName} from "../api/WeatherMap";

const SearchPage = () => {

    /** Constantes **/
    const [country , setCountry] = useState(false);
    const [postalCode , setPostalCode ] = useState([]);
    const [city, setCity] = useState("");

    const searchCity = async() =>{
        console.log(city);
        let response = await getWeatherMapName(city);
        console.log(response.data);
    }

    return (
        <Layout style={StyleSearchPage.container}>

            <View style={StyleSearchPage.header}>
                <Text style={StyleSearchPage.title} category='h2'>Emplacement</Text>
                <Button style={StyleSearchPage.buttonSetting} appearance='ghost' accessoryLeft={Assets.SettingsIcon}/>
            </View>

            <View style={StyleSearchPage.body}>
                <View style={StyleSearchPage.firstLineInputBox}>
                    <Input placeholder="Ville" onChangeText={(text) => setCity(text)}/>
                </View>
                <View style={StyleSearchPage.secondLineInputBox}>
                    <Input style={StyleSearchPage.inputBox} placeholder="Code postal" onChangeText={(text) => setPostalCode(text)}/>
                    <Input style={StyleSearchPage.inputBox} placeholder="Pays" onChangeText={(text) => setCountry(text)}/>
                </View>

                <View style={StyleSearchPage.buttonLine}>
                    <Button style={StyleSearchPage.button} appearance='outline' accessoryLeft={Assets.SearchIcon}
                        onPress={() => {searchCity()}}>
                        Rechercher
                    </Button>
                    <Button style={StyleSearchPage.button} appearance='outline' accessoryLeft={Assets.GeoIcon}>
                        Me Localiser
                    </Button>
                </View>

            </View>

        </Layout>
    );
}

export default SearchPage;

