import React from 'react';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {IconRegistry} from '@ui-kitten/components';
import {Provider} from "react-redux";
import {Persistor, Storage} from "./src/reduxStore/config";
import {PersistGate} from 'redux-persist/integration/react';
import Application from "./src/Application";

const App = () => {
    {/**  Page principale **/}
    return <>
        <IconRegistry icons={[EvaIconsPack]}/>
        <Provider store={Storage}>
            <PersistGate loading={null} persistor={Persistor}>
                <Application/>
            </PersistGate>
        </Provider>
    </>
};

export default App