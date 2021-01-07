/** React **/
import React from 'react';
import {View} from 'react-native';

/** UI KItten **/
import {Layout, Text, Button} from "@ui-kitten/components";

/** Import des componenets **/
import InputBox from "../components/InputBox";

/** Import page **/
import SettingsPage from "./Settings";

/** Import des définitions **/
import Assets from "../definitions/Assets";
import StyleSearchPage from "../definitions/SearchPageStyle";

const SearchPage = () => {

    return (
        <Layout style={StyleSearchPage.container}>

            <View style={StyleSearchPage.header}>
                <Text style={StyleSearchPage.title} category='h2'>Emplacement</Text>
                <Button style={StyleSearchPage.buttonSetting} appearance='ghost' accessoryLeft={Assets.SettingsIcon}/>
            </View>

            <View style={StyleSearchPage.body}>
                <View style={StyleSearchPage.firstLineInputBox}>
                    <InputBox placeholder="Ville"/>
                </View>
                <View style={StyleSearchPage.secondLineInputBox}>
                    <InputBox style={StyleSearchPage.inputBox} placeholder="Code postal"/>
                    <InputBox style={StyleSearchPage.inputBox} placeholder="Pays"/>
                </View>

                <View style={StyleSearchPage.buttonLine}>
                    <Button style={StyleSearchPage.button} appearance='outline' accessoryLeft={Assets.SearchIcon}>
                        Rechercher
                    </Button>
                    <Button style={StyleSearchPage.button} appearance='outline' accessoryLeft={Assets.GeoIcon}>
                        Me Localiser
                    </Button>
                </View>

            </View>

        </Layout>
    );
}

export default SearchPage;

