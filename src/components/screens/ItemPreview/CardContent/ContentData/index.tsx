import style from './ContentData.module.scss'
import {DataColors} from "./DataColors";
import {DataActions} from "./DataActions";
import {DataSlider} from "./DataSlider";

interface TProps {
    
}

export const ContentData = () => {
    return(<div className={style.contentData}>
        <div className={style.contentData__price}>12 000<span className={style.contentData__symbol}>₽</span></div>
        <DataColors/>
        <DataActions/>
        <DataSlider/>
    </div>)
}