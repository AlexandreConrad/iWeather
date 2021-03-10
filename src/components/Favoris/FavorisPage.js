import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native"
import connect from "react-redux/lib/connect/connect";
import {Layout, List, Text} from "@ui-kitten/components";
import MeteoCard from "../MeteoCard";
import {weatherSerarchByCityId} from "../../api/WeatherMap";
import Header from "../Header";
import AnimatedView from "../Animations/AnimatedView";

const FavorisPage = ({navigation, favorite}) => {

    /** Listes des recherches API pour les favoris **/
    const [recherches, setRecherches] = useState([]);

    /**
     * Récupération des villes en favoris avec l'id
     */
    useEffect(() => {
        const temp = []
        if (favorite.length === 0) {
            setRecherches([])
        } else {
            for (let fav of favorite) {
                weatherSerarchByCityId(fav).then(({data}) => {
                    temp.push(data)
                    setRecherches(temp)
                });
            }
        }
    }, [favorite]);

    return <Layout style={styles.container}>

        {/** Header avec la flèches de retour */}
        <Header title={'iWeather'}/>

        {/** Liste des villes favoris */}
        <Layout level={'2'} style={{flex: 1}}>
            {recherches.length > 0 &&
            <List
                style={{margin: 15}}
                data={recherches}
                renderItem={({item, index}) =>
                    <AnimatedView delay={index * 50} key={new Date()}>
                        <MeteoCard item={item} navigation={navigation}/>
                    </AnimatedView>}
            />}
            {recherches.length === 0 &&
            <Text style={{textAlign: 'center', marginTop: 15}}>Commencez par ajouter une ville</Text>}
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