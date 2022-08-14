import {ADD_ITEM, REMOVE_ITEM} from "./cartReducer.constants"
import {IShoes} from "entity/shoes"

export type IAction = IAddItem | IRemoveItem

export interface IInitialState {
    items:Array<IShoes>
}

// actions

export interface IAddItem{
    payload:IShoes
    type:ADD_ITEM
}

export interface IRemoveItem{
    payload:IShoes
    type:REMOVE_ITEM
}
