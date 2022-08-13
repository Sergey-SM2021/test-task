import {Counter} from "components/ui/Counter"
import style from "./DataActions.module.scss"
import cartIcon from "assets/Icons/CartIcon.svg"

interface TProps {

}

export const DataActions = () => {
    return(<div className={style.dataActions}>
        <Counter/>
        <div className={style.dataActions__link}>Купить в один клик</div>
        <div className={style.dataActions__link}>
            <img src={cartIcon} alt=""/>В корзину
        </div>
    </div>)
}