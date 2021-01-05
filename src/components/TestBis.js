import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {Layout} from "@ui-kitten/components";

const TestBis = () => {
    return (
        <Layout style={styles.container}>
            <Text>Changement de page !</Text>
        </Layout>
    );
}

export default TestBis;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

