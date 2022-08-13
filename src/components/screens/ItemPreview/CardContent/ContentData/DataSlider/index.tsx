import style from './DataSlider.module.scss'
import {SliderItem} from "./SliderItem";

export const DataSlider = () => {
    return(<div className={style.dataSlider}>
        <ul className={style.dataSlider__header}>
            <li>Описание</li>
            <li>Характеристики</li>
            <li>Отзывы</li>
        </ul>
        <div className={style.dataSlider__content}>
            <SliderItem/>
            <SliderItem/>
            <SliderItem/>
        </div>
    </div>)
}