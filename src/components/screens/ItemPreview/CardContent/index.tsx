import style from './CardContent.module.scss'
import {ContentMedia} from "./ContentMedia";
import {ContentData} from "./ContentData";


export const CardContent = () => {
    return(<div className={style.cardContent}>
        <ContentMedia/>
        <ContentData/>
    </div>)
}