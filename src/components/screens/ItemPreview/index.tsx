import style from './ItemPreview.module.scss'
import {CardHeader} from "./CardHeader";
import {CardContent} from "./CardContent";

export const ItemPreview = () => {
    return(<div className={style.card}>
        <CardHeader/>
        <CardContent/>
    </div>)
}