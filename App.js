import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ApplicationProvider,IconRegistry} from '@ui-kitten/components';
import { default as theme } from './src/definitions/custom-theme.json';

/** Import des définitions **/
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from '@ui-kitten/eva-icons';

/** Import des components **/
import NavBar from "./src/components/NavBar";

export default function App() {

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
                <NavBar/>
                <StatusBar style="auto"/>
            </ApplicationProvider>
        </>
    );
}