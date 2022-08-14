import {Counter} from "components/ui/Counter"
import style from "./DataActions.module.scss"
import cartIcon from "assets/Icons/CartIcon.svg"
import {useAppDispatch} from "hooks/useAppDispatch";
import {AddItem} from "store/reducers/cartReducer/cartReducer.actions";
import {useAppSelector} from "hooks/useAppSelector";

interface TProps {

}

export const DataActions = () => {
    const {item} = useAppSelector(state => state.shoesReducer)
    const dispatch = useAppDispatch()
    const handlerAddINCart = () => {
        dispatch(AddItem(item))
    }
    return(<div className={style.dataActions}>
        <Counter/>
        <div className={style.dataActions__link}>Купить в один клик</div>
        <div className={style.dataActions__link} onClick={handlerAddINCart}>
            <img src={cartIcon} alt=""/>В корзину
        </div>
    </div>)
}