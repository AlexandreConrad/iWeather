import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Layout} from "@ui-kitten/components";
import Switch from "../components/Switch.js";

const Test = () => {
    return (
        <Layout style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
        </Layout>
    );
}

export default Test;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


