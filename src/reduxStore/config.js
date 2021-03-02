import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import favObjectsReducer from './reducers/favoriteCity';
import system from "./reducers/system"

const configPersist = {
    key: 'root',
    storage: AsyncStorage,
};

const reducerPersist = persistReducer(
    configPersist,
    combineReducers({
        favObjectsReducer,
        system
    })
);

export const Storage = createStore(reducerPersist);
export const Persistor = persistStore(Storage);