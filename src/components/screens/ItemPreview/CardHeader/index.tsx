import style from './CardHeader.module.scss'
import NikeLogo from 'assets/NikeLogo.svg'

import {HeaderCart} from "./HeaderCart";
import {useItem} from "../../../../store/selectors";

export const CardHeader = () => {
    const {title} = useItem()
    return(<div className={style.cardHeader}>
        <img src={NikeLogo} className={style.cardHeader__logo}/>
        <div className={style.cardHeader__title}>{title}</div>
        <HeaderCart/>
    </div>)
}