import React from "react"
import {StyleSheet} from 'react-native';

import {Layout} from "@ui-kitten/components";
import Header from "../Header";

const HomePage = () => {
    return <>
        <Header title={"Recherche"}/>
        <Layout>

        </Layout>
    </>
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
});

export default HomePage