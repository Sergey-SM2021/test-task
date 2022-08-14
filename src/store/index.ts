import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import {cartReducer} from "store/reducers/cartReducer"
import {shoesReducer} from "store/reducers/shoesReducer"

const reducers = combineReducers({cartReducer,shoesReducer})


export const store = createStore(reducers)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch