import {ISetCurrentColor} from "./shoesReducer.types";

export const setCurrentColor = (id:string):ISetCurrentColor => ({
    payload:id,
    type:"SET_CURRENT_COLOR"
})