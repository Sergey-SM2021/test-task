import style from './ContentData.module.scss'
import {DataColors} from "./DataColors"
import {DataActions} from "./DataActions"
import {DataSlider} from "./DataSlider"
import {useItem} from "store/selectors"
import {memo} from "react";

interface TProps {
    
}

export const ContentData = memo(() => {
    const {price} = useItem()
    return(<div className={style.contentData}>
        <div className={style.contentData__price}>{price}<span className={style.contentData__symbol}>₽</span></div>
        <DataColors/>
        <DataActions/>
        <DataSlider/>
    </div>)
})