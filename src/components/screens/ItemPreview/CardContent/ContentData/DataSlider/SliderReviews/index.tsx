import style from './SliderItem.module.scss'
import {useAppSelector} from "hooks/useAppSelector";

export const SliderReviews = () => {
    const {reviews} = useAppSelector(state => state.shoesReducer.item)
    if (reviews.length === 0){
        return <>Пока нет отзывов</>
    }
    return(<>{reviews}</>)
}