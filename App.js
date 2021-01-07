/** Import Expo et React **/
import { StatusBar } from 'expo-status-bar';
import React from 'react';

/** Import UI Kitten **/
import {ApplicationProvider,IconRegistry} from '@ui-kitten/components';
import { default as theme } from './src/definitions/custom-theme.json';
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from '@ui-kitten/eva-icons';

/** Import des components **/
import NavBar from "./src/components/NavBar";

/** Constantes pour les préferences **/
const loadingTasks = [
    () =>
        AsyncStorage.getItem('theme').then((result) => {
            if (result === null) {
                return ['theme', 'light'];
            } else {
                return ['theme', result];
            }
        }),
];

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

/** Main
 export default () => (
 <MyAppLoading tasks={loadingTasks}>
 {(props) => <App {...props} />}
 </MyAppLoading>
 );**/