import style from './CardContent.module.scss'
import {ContentMedia} from "./ContentMedia";
import {ContentData} from "./ContentData";
import {memo} from "react";


export const CardContent =memo(() => {
    return(<div className={style.cardContent}>
        <ContentMedia/>
        <ContentData/>
    </div>)
})