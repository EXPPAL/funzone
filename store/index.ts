import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    Persistor,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'funzone',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
}));

type Store = EnhancedStore & {
    _persistor: Persistor
}

// config the store
const store = configureStore({
    reducer: persistedReducer,
})

const storeWithPersistor: Store = {
    ...store,
    _persistor: persistStore(store)
}

export default storeWithPersistor