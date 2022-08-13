import style from './Counter.module.scss'
import cn from "classnames";

export const Counter = () => {
    return(<div className={style.counter}>
        <button className={cn([style.counter__button,style.counter__button_left])}>-</button>
        <div>1</div>
        <button className={cn([style.counter__button,style.counter__button_right])}>+</button>
    </div>)
}