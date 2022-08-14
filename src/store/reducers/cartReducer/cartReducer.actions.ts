import {IShoes} from "entity/shoes";
import {IAddItem, IRemoveItem} from "./cartReducer.types";

export const AddItem = (item:IShoes):IAddItem => ({payload:item,type:"ADD_ITEM"})

export const RemoveItem = (item:IShoes):IRemoveItem => ({payload:item,type:"REMOVE_ITEM"})