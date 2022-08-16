import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import {cartReducer} from "store/reducers/cartReducer"
import {shoesReducer} from "store/reducers/shoesReducer"

const reducers = combineReducers({cartReducer,shoesReducer})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers,composeEnhancers(
    applyMiddleware()
))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch