import React, {useEffect, useState} from "react"
import {Layout, List, Text} from "@ui-kitten/components";
import {Image, StyleSheet, View} from "react-native";
import Header from "../../Header";
import {weatherMars} from "../../../api/NasaApi";
import CardMars from "./CardMars";
import fakeDataNasa from "../../../api/FakeNasaApi.json";

const MarsPage = ({navigation}) => {

    /** Informations sur la call de mars **/
    const [data, setData] = useState(undefined);

    /**
     * Récupération de la météo de mars
     */
    useEffect(() => {
        weatherMars().then(result => {
            if (result.data !== undefined)
                setData(result.data)
            else
                setData(fakeDataNasa);
        })
    }, []);

    return <Layout style={styles.container}>

        {/** Navigation envoyée au header pour le retour **/}
        <Header navigation={navigation}/>

        <Layout style={styles.containerMars}>

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
                {data &&
                <View style={styles.informations}>
                    <List
                        data={data.sol_keys}
                        renderItem={render => <CardMars item={data[data.sol_keys[render.index]]}
                                                        title={data.sol_keys[render.index]} navigation={navigation}/>}
                    />
                </View>
                }
            </View>

        </Layout>

    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerMars: {
        flex: 1,
        margin: 20,
    },
    text: {
        margin: 20,
        marginTop: 30,
        paddingBottom: 2,
    },
    image: {
        width: "100%",
        height: "50%",
        marginTop: 10,
        marginBottom: 1,
        flex: 1,
    },
    box: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 0,
        marginTop: 0,
        flex: 2,
    },
    informations: {
        marginTop: 15,
        flex: 1,
    },
    card: {
        flex: 1,
    }
});

export default MarsPage