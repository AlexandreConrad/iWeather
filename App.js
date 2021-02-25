/** Import Expo et React **/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/** Import UI Kitten **/
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import theme from './src/definitions/custom-theme.json';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';

/** Import des components **/
import NavBar from "./src/navigations/NavBar";

/** Redux **/
import {Provider} from "react-redux";
import {Persistor,Storage} from "./src/reduxStore/config";
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {

    return (
        <>
            <IconRegistry icons={[EvaIconsPack]} />
            <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
                <Provider store={Storage} >
                    <PersistGate loading={null} persistor={Persistor}>
                        <NavBar/>
                        <StatusBar style="auto" />
                    </PersistGate>
                </Provider>
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