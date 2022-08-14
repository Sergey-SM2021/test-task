import style from './HeaderCart.module.scss'
import cart from 'assets/Icons/CartIcon.svg'

import {useCartItems} from "../../../../../store/selectors";

export const HeaderCart = () => {
    const {length:count} = useCartItems()
    return (<span className={style.headerCart}>
        <img src={cart}/>
        <span className={style.cart__count}>{count}</span>
    </span>)
}