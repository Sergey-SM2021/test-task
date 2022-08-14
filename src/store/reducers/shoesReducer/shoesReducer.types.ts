import {SET_CURRENT_COLOR} from "./shoesReducer.constants";
import {IShoes} from "../../../entity/shoes";

export interface ISetCurrentColor {
    payload:string
    type:SET_CURRENT_COLOR
}

export interface IInitialState{
    item:IShoes
}

export type IAction = ISetCurrentColor