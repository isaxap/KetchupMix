import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {applyMiddleware, compose} from 'redux'
import rootReducer from '../redux/rootReducer'

const persistConfig = {
  key: 'root',
  storage
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware: ', store.getState())
  return result
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(loggerMiddleware)))
  let persistor = persistStore(store)
  return {store, persistor}
}

export default configureStore
