import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
import { default as theme } from './src/definitions/custom-theme.json';

/** Import des définitions **/
import * as eva from "@eva-design/eva";

/** Import des components **/
import NavBar from "./src/components/NavBar";

export default function App() {
    return (
        <>
            <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
                <NavBar/>
                <StatusBar style="auto"/>
            </ApplicationProvider>
        </>
    );
}