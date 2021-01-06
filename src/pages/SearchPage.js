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
                <Text style={styles.title} category='h2'>Emplacement</Text>
                <Button style={styles.buttonSetting} appearance='ghost' accessoryLeft={Assets.StarIcon}/>
            </View>

            <View style={styles.body}>
                <Switch/>
                <InputBox placeholder="Ville"/>
                <InputBox placeholder="Code postal"/>
                <InputBox placeholder="Pays"/>
            </View>
        </Layout>
    );
}

export default SearchPage;

const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
    header :{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop : 60,

    },
    body :{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    title: {
        flex:1,
        marginLeft : 25,
    },
    buttonSetting: {
        width : 50,
        height : 50,
        marginLeft: 50,
    },
});


