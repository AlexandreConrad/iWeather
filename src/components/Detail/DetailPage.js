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
import {HeartFillIcon, HeartOutlineIcon} from '../../definitions/Icons';

/**
 * Page de détails d'une ville
 */
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

    return <Layout style={styles.container} level={"2"}>

        {/** Navigation envoyée au header pour le retour **/}
        <Header title={research.name} navigation={navigation}/>

        <View style={styles.header}>
            <DetailPrincipal current={current} daily={daily}/>
            <View style={{justifyContent: 'center'}}>
                {!isInFavorite && <Button accessoryLeft={HeartOutlineIcon} size={'giant'} appearance='ghost'
                                          onPressIn={handleAddToFavorite}>Ajouter</Button>}
                {isInFavorite && <Button accessoryLeft={HeartFillIcon} size={'giant'} appearance='ghost'
                                         onPressIn={handleRemoveToFavorite}>Retirer</Button>}
            </View>
        </View>

        <View style={styles.module}>
            <DetailMeteoHeure hourly={hourly}/>
        </View>

        <View style={styles.module}>
            <DetailInformation current={current}/>
        </View>

        <View style={styles.module}>
            <DetailSoleil current={current}/>
        </View>

        <View style={styles.module}>
            <DetailMeteoSemaine daily={daily}/>
        </View>
    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    space: {
        marginTop: 20
    },
    header: {
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    module: {
        marginBottom: 15,
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