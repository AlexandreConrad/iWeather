import React from "react"
import {StyleSheet} from 'react-native';
import {Layout} from "@ui-kitten/components";
import Header from "../Header";

const DetailPage = props => {
    const detail = props.route.params.detail;

    return <Layout style={styles.container}>
        <Header navigation={props.navigation}/>

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

export default DetailPage