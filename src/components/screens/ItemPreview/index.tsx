import style from './ItemPreview.module.scss'
import {CardHeader} from "./CardHeader";
import {CardContent} from "./CardContent";
import {memo} from "react";

export const ItemPreview = memo(() => {
    return(<div className={style.card}>
        <CardHeader/>
        <CardContent/>
    </div>)
})