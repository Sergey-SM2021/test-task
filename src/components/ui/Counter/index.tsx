import style from './Counter.module.scss'
import cn from "classnames";
import {memo} from "react";

import {useAppSelector} from "hooks/useAppSelector";
import {useAppDispatch} from "hooks/useAppDispatch";
import {AddItem, RemoveItem} from "store/reducers/cartReducer/cartReducer.actions";
import {useCount} from "store/selectors";

export const Counter = memo(() => {
    const dispatch = useAppDispatch()
    const {item} = useAppSelector(state => state.shoesReducer)
    const count = useCount()
    const handlerAdd = () => {
        dispatch(AddItem(item))
    }
    const handlerRemove = () => {
        dispatch(RemoveItem(item))
    }
    return(<div className={style.counter}>
        <button onClick={handlerRemove} className={cn([style.counter__button,style.counter__button_left])}>-</button>
        <div>{count}</div>
        <button onClick={handlerAdd} className={cn([style.counter__button,style.counter__button_right])}>+</button>
    </div>)
})