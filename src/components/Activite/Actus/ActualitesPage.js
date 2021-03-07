import React from "react"
import {Button, Layout,Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import Header from "../../Header";

const ActualitesPage = ({navigation}) => {

    return <Layout style={styles.container} >

        {/** Navigation envoyée au header pour le retour **/}
        <Header navigation={navigation}/>

        <Layout>
            <Text>Actus</Text>
        </Layout>

    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ActualitesPage