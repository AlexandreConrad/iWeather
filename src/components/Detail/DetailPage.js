import React, {useEffect, useState} from "react"
import {StyleSheet, View} from 'react-native';
import {Button, Layout} from "@ui-kitten/components";
import Header from "../Header";
import {weatherDetailCity} from "../../api/WeatherMap";
import DetailPrincipal from "./DetailPrincipal";
import DetailMeteoHeure from "./DetailMeteoHeure";
import DetailInformation from "./DetailInformation";
import DetailSoleil from "./DetailSoleil";
import DetailMeteoSemaine from "./DetailMeteoSemaine";
import {connect} from "react-redux";
import {addToFavorite, removeToFavorite} from "../../reduxStore/actions/favorite";

const DetailPage = ({route, navigation, favorite, addToFavorite, removeToFavorite}) => {

    /** Constantes **/
    const research = route.params.research; // Récupération de notre item
    const isInFavorite = favorite.indexOf(research.id) !== -1; // Vérification s'il fait partis des favoris
    const [result, setResult] = useState({});
    const {current, daily, hourly} = result;

    /**
     * Récupération des détails de toute la page
     */
    useEffect(() => {
        weatherDetailCity(research.coord.lat, research.coord.lon).then(result => {
            setResult(result.data)
        })
    }, [research.coord.lat, research.coord.lon]);

    const handleAddToFavorite = () => {
        addToFavorite(research.id)
    };

    const handleRemoveToFavorite = () => {
        removeToFavorite(research.id)
    };

    /**
     * Permet de mettre en attente l'affichage si le call API n'est pas fini
     */
    if (!current) {
        return <Layout/>
    }

    return <Layout style={styles.container}>

        {/** Navigation envoyée au header pour le retour **/}
        <Header navigation={navigation}/>

        {/** Gestion du bouton favoris **/}
        {!isInFavorite && <Button onPressIn={handleAddToFavorite}>Ajouter aux favoris</Button>}
        {isInFavorite && <Button onPressIn={handleRemoveToFavorite}>Supprimer des favoris</Button>}

        <DetailPrincipal name={research.name} current={current} daily={daily}/>
        <DetailMeteoHeure hourly={hourly}/>
        <DetailInformation current={current}/>
        <DetailSoleil current={current}/>
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

const mapStateToProps = state => {
    return {
        favorite: state.favorite
    }
};

/**
 * Dispatch permet la rechercher dans le reducer.
 * addToFavorite est remplacé par actions
 */
const mapDispatchToProps = dispatch => {
    return {
        addToFavorite: cityId => dispatch(addToFavorite(cityId)),
        removeToFavorite: cityId => dispatch(removeToFavorite(cityId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)