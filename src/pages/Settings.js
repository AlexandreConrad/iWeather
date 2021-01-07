import React from 'react';
import {StyleSheet,View} from 'react-native';
import {Layout,Text,Button} from "@ui-kitten/components";

/** Import des componenets **/
import InputBox from "../components/InputBox";
import Switch from "../components/Switch";

/** Import des définitions **/
import Assets from "../definitions/Assets";

const SearchPage = () => {
    return (
        <Layout style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title} category='h2'>Settings</Text>
            </View>
        </Layout>
    );
}

export default SearchPage;

const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
});


