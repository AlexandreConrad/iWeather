import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native"
import connect from "react-redux/lib/connect/connect";
import {Layout, List} from "@ui-kitten/components";
import MeteoCard from "../MeteoCard";
import {weatherSerarchByCityId} from "../../api/WeatherMap";
import Header from "../Header";

const FavorisPage = ({navigation, favorite}) => {

    const [recherches, setRecherches] = useState([]);

    useEffect(() => {
        setRecherches([]);
        favorite.forEach(fav => {
            weatherSerarchByCityId(fav).then(result => {
                setRecherches([...recherches, result.data])
            })
        })
    }, [favorite]);

    return <Layout style={styles.container}>
        <Header navigation={navigation}/>

        {/**Search card*/}
        <Layout style={styles.search} level={"2"}>
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

const mapStateToProps = state => {
    return {
        favorite: state.favorite
    }
};


export default connect(mapStateToProps)(FavorisPage)