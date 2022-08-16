import {IAction, IInitialState} from "./shoesReducer.types"

import item1 from "assets/Media/Shoes/Item1.svg"
import item2 from "assets/Media/Shoes/Item2.svg"
import item3 from "assets/Media/Shoes/Item3.svg"
import item4 from "assets/Media/Shoes/Item4.svg"

const InitialState:IInitialState = {
    item:
        {
            count:0,
            id:"opk89ud8hkncyudtydd5cd4c4332ds3s",
            currentColor:"0",
            price: 12000,
            title:'Nike Air Force Travis Scott',
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tincidunt ex. Integer mi odio, posuere a varius non, fringilla ut turpis. Morbi erat leo, tincidunt a vulputate ac, pellentesque sit amet justo. Ut suscipit consequat porttitor. Fusce tincidunt turpis quis erat porta sagittis. Proin interdum efficitur ligula, ac mollis neque luctus at. Etiam fermentum ligula at mi convallis sodales.",
            property:{
                "Категория:":"Кроссовки",
                "Производитель:":"Nike",
                "Гарантия  :":"2 года"},
            reviews:[],
            colors:[
                {color:'#39393A',id:'0'},
                {color:'#B9B3B0',id:'1'},
                {color:'#5D70CE',id:'2'},
                {color:'#FF9200',id:'3'},
            ],
            media:[
                {picture:item1,id:'0'},
                {picture:item2,id:'1'},
                {picture:item3,id:'2'},
                {picture:item4,id:'3'},
            ],
        }
}

export const shoesReducer = (state = InitialState, action: IAction) => {
    switch (action.type)
    {
        case "SET_CURRENT_COLOR":
            const newState = {...state}
            newState.item = {...state.item}
            newState.item.currentColor = action.payload
            return newState
        default:
            return {...state}
    }
}