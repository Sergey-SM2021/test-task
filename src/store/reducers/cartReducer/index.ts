import {IAction, IInitialState} from "./cartReducer.types"

const initialState:IInitialState = {
    items:[]
}

export const cartReducer = (state = initialState, {payload,type}: IAction) => {
    const newState = {...state, items: state.items.map(obj => ({...obj}))}
    switch (type) {
        case "ADD_ITEM":
            let curentItem = newState.items.find(el => el.id === payload.id && el.currentColor === payload.currentColor)
            if(curentItem){
                curentItem.count = curentItem.count + 1
            } else {
                newState.items.push({...payload,count:payload.count+1})
            }
            return newState
        case "REMOVE_ITEM":
            let currentItemToDel = newState.items.find(el => el.id === payload.id && el.currentColor === payload.currentColor)
            if (currentItemToDel){
                if(currentItemToDel.count > 1){
                    currentItemToDel.count = currentItemToDel.count - 1
                } else {
                    newState.items = newState.items.filter(el => (el.currentColor !== payload.currentColor && el.id === payload.id))
                }
            }
            return newState
    }
    return {...state}
}