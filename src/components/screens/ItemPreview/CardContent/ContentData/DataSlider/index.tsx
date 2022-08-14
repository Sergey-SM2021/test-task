import style from './DataSlider.module.scss'
import {SliderProperty} from "./SliderProperty"
import {SliderReviews} from "./SliderReviews"
import {useAppSelector} from "hooks/useAppSelector"
import {useState} from "react"
import cn from "classnames"
import {SliderDescription} from "./SliderDescription"

enum ISlider {
    "description" = "description",
    "property" = "property",
    "reviews" = "reviews"
}

export const DataSlider = () => {
    const [currentSlide,setCurrentSlide] = useState<ISlider>(ISlider.property)
    const {property} = useAppSelector(state => state.shoesReducer.item)
    const linkHandler = (type:ISlider) => {
        setCurrentSlide(type)
    }
    return(<div className={style.dataSlider}>
        <ul className={style.dataSlider__header}>
            <li onClick={()=>{linkHandler(ISlider.description)}} className={cn([style.header__link,currentSlide === 'description' && style.header__link_active])}>Описание</li>
            <li onClick={()=>{linkHandler(ISlider.property)}} className={cn([style.header__link,currentSlide === 'property' && style.header__link_active])}>Характеристики</li>
            <li onClick={()=>{linkHandler(ISlider.reviews)}} className={cn([style.header__link,currentSlide === 'reviews' && style.header__link_active])}>Отзывы</li>
        </ul>
        <div className={style.dataSlider__content}>
            {
                currentSlide === 'property' ?
                Object.keys(property).map((el,index)=>(<SliderProperty key={el} type={el} value={Object.values(property)[index]} />)):
                    currentSlide === 'reviews' ? <SliderReviews/> : <SliderDescription/>
            }
        </div>
    </div>)
}