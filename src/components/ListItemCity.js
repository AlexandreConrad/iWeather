/** Import React **/
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

/** Import UI Kitten **/
import {Layout, Text} from "@ui-kitten/components";

/**
 *  Carte apercu de la ville
 **/
const ListItemCity = ({dataAPI, callback}) => {

    console.log("dataAPI :", dataAPI);
    console.log("callback :", callback);

    return (
        <TouchableOpacity onPress={() => callback(dataAPI)}>
            <Layout style={styles.container}>
                <View style={styles.allCard}>
                    <View style={styles.rightCard}>
                        <Text>Test</Text>
                    </View>
                </View>
            </Layout>
        </TouchableOpacity>
    );
}

export default ListItemCity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '100%',
    },
    rightCard: {
        marginLeft: 10,
    },
    allCard: {
        display: "flex",
        backgroundColor: "#eee",
    },

});
