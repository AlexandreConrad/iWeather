import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import favObjectsReducer from './reducers/favoriteCity';

const configPersist = {
    key: 'root',
    storage: AsyncStorage,
};

const reducerPersist = persistReducer(configPersist, favObjectsReducer);

export const Storage = createStore(reducerPersist);
export const Persistor = persistStore(Storage);