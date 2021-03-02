import React from 'react';

import {StatusBar} from 'expo-status-bar';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

import NavBar from "./src/navigations/NavBar";
import {Provider} from "react-redux";
import {Persistor, Storage} from "./src/reduxStore/config";
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {

    /** Variables pour le darkMode**/
    const light = Storage.getState().system.light;

    return (
        <>
            <IconRegistry icons={[EvaIconsPack]}/>
            <ApplicationProvider {...eva} theme={light ? eva.light : eva.dark}>
                <Provider store={Storage}>
                    <PersistGate loading={null} persistor={Persistor}>
                        <NavBar/>
                        <StatusBar style="auto"/>
                    </PersistGate>
                </Provider>
            </ApplicationProvider>
        </>
    );
}