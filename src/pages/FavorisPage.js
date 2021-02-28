/** Import React **/
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

/** Import UI Kitten **/
import {Layout, List} from "@ui-kitten/components";

/** Import Redux **/
import {connect} from "react-redux";

/** Import helpers / Utils **/
import utils from "../utils/utils";

/** Call API **/

import {getWeatherMapByID} from "../api/WeatherMap";
import ListItemCity from "../components/ListItemCity";

const FavorisPage = ({navigation, favObjects}) => {

    /** Constantes **/
    const [listFavoris, setListFavoris] = useState([]);

    /** Fonction qui mets à jour la liste au début de la page **/
    useEffect(() => {
        (async () => {
            await refreshList();
        })();
    }, [favObjects]);

    /** Mets la liste de favoris à jours **/
    const refreshList = async () => {
        let temp = [];
        try {
            for (const id of favObjects) {
                let response = await getWeatherMapByID(id);
                await temp.push(response.data);
            }
            setListFavoris(temp);
        } catch (error) {
            console.log("Erreur RefreshList");
        }
    }

    /** Navigations vers la Ville  **/
    const navigationOnClick = async (dataAPI) => {
        navigation.navigate("CityDetailsPage", {dataAPI});
    }

    /** Retourne mon composant aperçu d'une ville **/
    const myRenderItems = ({item}) => {
        console.log("navigationOnClick :", navigationOnClick);
        return (<ListItemCity dataAPI={item} callback={navigationOnClick} />);
    }

    return (
        <Layout style={styles.container}>
            <List
                data={listFavoris}
                keyExtractor={(item) => 'list-item-city-' + item.id}
                renderItem={myRenderItems}/>
        </Layout>
    );
}

export default connect(utils.mapStateToProp)(FavorisPage);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


