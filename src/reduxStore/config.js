import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import favorite from './reducers/favorite';
import system from "./reducers/system"

const configPersist = {
    key: 'root',
    storage: AsyncStorage,
};

const reducerPersist = persistReducer(
    configPersist,
    combineReducers({
        favorite,
        system
    })
);

export const Storage = createStore(reducerPersist);
export const Persistor = persistStore(Storage);