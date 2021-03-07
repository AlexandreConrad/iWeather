import React, {useEffect, useState} from "react"
import {Button, Layout,Text} from "@ui-kitten/components";
import {Image, StyleSheet, View} from "react-native";
import Header from "../../Header";
import {weatherMars} from "../../../api/NasaApi";
import CardMars from "./CardMars";
import fakeDataNasa from "../../../api/FakeNasaApi.json";

const MarsPage = ({navigation}) => {

    /** Informations sur la call de mars **/
    const [data, setdata] = useState([]);

    /**
     * Récupération de la météo de mars
     */
    useEffect(() => {
        weatherMars().then(result => {
            if(result == undefined)
                setdata(result.data);
            else
                setdata(fakeDataNasa);
        })
    }, [data]);

    return <Layout style={styles.container} >

        {/** Navigation envoyée au header pour le retour **/}
        <Header navigation={navigation}/>

        <Layout>

            {/** Informations générale **/}
            <View style={styles.text}>
                <Text>
                    A l'aide du rover InSight Mars, la NASA nous donnes des températures météorologiques sur mars !
                </Text>
                <Text>
                    Voici les dernières mesures envoyées à la Terre :
                </Text>
            </View>
            <View style={styles.box}>
                <Image
                    style={styles.image}
                    source={require('../../../../public/rover.jpg')}
                />

                {/** Informations sur Mars **/}
                <View style={styles.informations}>
                    <Text>Informations sur mars :</Text>
                    <CardMars item={data[804]} title={"804"}/>
                </View>
            </View>

        </Layout>

    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        margin : 20,
        marginTop: 30,
        paddingBottom: 2,
    },
    image: {
        width: "100%",
        height: "50%",
        marginTop: 10,
        marginBottom: 1,
    },
    box: {
        margin: 20,
        marginBottom: 0,
    },
    informations: {
        marginTop : 15,
    }
});

export default MarsPage