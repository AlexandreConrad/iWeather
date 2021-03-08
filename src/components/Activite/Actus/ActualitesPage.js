import React, {useEffect, useState} from "react"
import {Layout, List, Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import Header from "../../Header";
import {actusApi} from "../../../api/ActualiteApi";
import fakeActu from "../../../api/FakeActuApi.json";
import CardActu from "./CardActu";

/**
 * Page bonus sur les actualités en France
 * @param navigation
 */
const ActualitesPage = ({navigation}) => {

    /** Informations sur la call des actus **/
    const [data, setData] = useState(undefined);

    /**
     * Récupération des actualités
     */
    useEffect(() => {
        actusApi().then(result => {
            if(result.data !== undefined)
                setData(result.data.data);
            else
                setData(fakeActu.data);
        })
    }, []);

    if(!data)
        return <Layout/>

    return <Layout style={styles.container} >

        {/** Navigation envoyée au header pour le retour **/}
        <Header navigation={navigation}/>

        {/** Liste des actualités **/}
        <Layout>
            <List
                data={data}
                renderItem={render => <CardActu item={render.item} navigation={navigation}/>}
            />
        </Layout>

    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ActualitesPage