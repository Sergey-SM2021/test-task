import style from './HeaderCart.module.scss'
import cart from 'assets/Icons/CartIcon.svg'
import {useAppSelector} from "hooks/useAppSelector"

export const HeaderCart = () => {
    const count = useAppSelector(state => state.cartReducer.items.length)
    return (<span className={style.headerCart}>
        <img src={cart}/>
        <span className={style.cart__count}>{count}</span>
    </span>)
}