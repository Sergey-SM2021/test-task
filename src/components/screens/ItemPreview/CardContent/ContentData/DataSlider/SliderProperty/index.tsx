import style from './SliderItem.module.scss'
import {memo} from "react";

interface TProps {
    type:string
    value:string,
}

export const SliderProperty =memo( ({type,value}:TProps) => {
    return(<div className={style.sliderItem}>
        <div>{type}</div>
        <div>{value}</div>
    </div>)
})
