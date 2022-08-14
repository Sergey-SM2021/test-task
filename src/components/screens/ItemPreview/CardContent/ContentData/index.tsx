import style from './ContentData.module.scss'
import {DataColors} from "./DataColors"
import {DataActions} from "./DataActions"
import {DataSlider} from "./DataSlider"
import {useAppSelector} from "../../../../../hooks/useAppSelector"

interface TProps {
    
}

export const ContentData = () => {
    const {price} = useAppSelector(state => state.shoesReducer.item)
    return(<div className={style.contentData}>
        <div className={style.contentData__price}>{price}<span className={style.contentData__symbol}>₽</span></div>
        <DataColors/>
        <DataActions/>
        <DataSlider/>
    </div>)
}