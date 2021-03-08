import {Card, Text} from "@ui-kitten/components";
import React from "react";
import {StyleSheet, View} from "react-native";

/**
 * Carte sur les actualités en france
 */
const CardActu = ({item}) => {

    return <Card style={styles.card}>
        <View style={styles.container}>

            <View style={styles.containerTop}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.containerBottom}>
                <Text>{item.description}</Text>
                <Text style={styles.author}>{item.author}</Text>
            </View>
        </View>
    </Card>
};

const styles = StyleSheet.create({
    card: {
        marginTop: 4
    },
    container: {
        flexDirection: "column"
    },
    containerTop: {
        flex: 1,
    },
    containerBottom: {
        flex: 1,
        marginTop: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    author: {
        fontWeight: "bold",

    }

});

export default CardActu