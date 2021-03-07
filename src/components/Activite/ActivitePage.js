import React from "react"
import {Button, Layout,Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import Header from "../Header";
import {SCREEN_ACTUALITES, SCREEN_MARS} from "../../definitions/ScreenName";


const ActivitePage = ({navigation}) => {

    return <Layout style={styles.container} >

        {/** Bandeau du nom de l'application **/}
        <Header/>

        <Layout style={styles.select}>
            <View>
                <Text>Liste des actualités en France</Text>
                <Button onPressIn={() => navigation.navigate(SCREEN_ACTUALITES)} style={styles.input}> Actualités </Button>
            </View>
            <View>
                <Text>Température sur Mars</Text>
                <Button onPressIn={() => navigation.navigate(SCREEN_MARS)} style={styles.input}> Mars </Button>
            </View>

        </Layout>

    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    select:{
        flexDirection: "column",
        marginTop: "50%",
        margin : 30,
    },
    input: {
        marginTop : 20,
        marginBottom :20,
    },
});

export default ActivitePage