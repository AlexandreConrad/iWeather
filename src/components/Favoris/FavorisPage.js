import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native"
import connect from "react-redux/lib/connect/connect";
import {Layout, List} from "@ui-kitten/components";
import MeteoCard from "../MeteoCard";
import {weatherSerarchByCityId} from "../../api/WeatherMap";
import Header from "../Header";

const FavorisPage = ({navigation, favorite}) => {

    /** Listes des recherches API pour les favoris **/
    const [recherches, setRecherches] = useState([]);

    /**
     * Récupération des villes en favoris avec l'id
     */
    useEffect(() => {
        setRecherches([]);
        favorite.forEach(fav => {
            weatherSerarchByCityId(fav).then(result => {
                setRecherches([...recherches, result.data])
            })
        })
    }, [favorite]);

    return <Layout style={styles.container}>

        {/** Header avec la flèches de retour */}
        <Header navigation={navigation}/>

        {/** Liste des villes favoris */}
        <Layout level={"2"}>
            <List
                style={{margin: 10}}
                data={recherches}
                renderItem={render => <MeteoCard item={render.item} navigation={navigation}/>}
            />
        </Layout>
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

/**
 * Récupération des favoris par redux (reducers)
 * Mise à disposition des ids des villes favorites dans un tableau dans le props
 */
const mapStateToProps = state => {
    return {
        favorite: state.favorite
    }
};


export default connect(mapStateToProps)(FavorisPage)