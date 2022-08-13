import style from './DataColors.module.scss'
import cn from 'classnames'

export const DataColors = () => {
    return(<div className={style.data__colors}>
        <div className={style.colors__title}>Цвет:</div>
        <div className={style.colors}>
            <div className={cn([style.colors__color,style['colors__color_grey-dark']])}/>
            <div className={cn([style.colors__color,style.colors__color_grey])}/>
            <div className={cn([style.colors__color,style.colors__color_blue])}/>
            <div className={cn([style.colors__color,style.colors__color_orange])}/>
        </div>
    </div>)
}
