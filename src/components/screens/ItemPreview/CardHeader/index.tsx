import style from './CardHeader.module.scss'
import NikeLogo from 'assets/NikeLogo.svg'
import CartIcon from 'assets/Icons/CartIcon.svg'

export const CardHeader = () => {
    return(<div className={style.cardHeader}>
        <img src={NikeLogo} className={style.cardHeader__logo}/>
        <div className={style.cardHeader__title}>Nike Air Force Travis Scott</div>
        <img className={style.cardHeader__cart} src={CartIcon}/>
    </div>)
}