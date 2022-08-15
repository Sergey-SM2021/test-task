import style from './DataColors.module.scss'
import {useAppSelector} from "hooks/useAppSelector"
import cn from "classnames"
import {setCurrentColor} from "store/reducers/shoesReducer/shoesReducer.actions"
import {useAppDispatch} from "hooks/useAppDispatch"
import {memo} from "react";

export const DataColors =memo(() => {
    const dispatch = useAppDispatch()
    const {colors,currentColor} = useAppSelector(state => state.shoesReducer.item)
    const chooseColorHandler = (id:string) => {
      dispatch(setCurrentColor(id))
    }
    return(<div className={style.data__colors}>
        <div className={style.colors__title}>Цвет:</div>
        <div className={style.colors}>
            {colors.map(el => <div key={el.id} onClick={()=>{chooseColorHandler(el.id)}} style={{backgroundColor:el.color}} className={cn([style.colors__color,el.id===currentColor&&style.colors__color_active])}/>)}
        </div>
    </div>)
})
