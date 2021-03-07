import React from "react"
import {Layout} from "@ui-kitten/components";
import {StyleSheet} from "react-native";
import {Grid, LineChart} from 'react-native-svg-charts'


const ActivitePage = () => {


    return <Layout styles={styles.container}>
    </Layout>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        margin: 20,
        marginTop: 10,
        marginBottom: 10,
        flex: 1
    },
    search: {
        marginTop: 20,
        flex: 1
    }
});

export default ActivitePage