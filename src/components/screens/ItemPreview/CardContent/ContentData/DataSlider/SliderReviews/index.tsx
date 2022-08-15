import style from './SliderItem.module.scss'
import {useAppSelector} from "hooks/useAppSelector";
import {memo} from "react";

export const SliderReviews = memo(() => {
    const {reviews} = useAppSelector(state => state.shoesReducer.item)
    if (reviews.length === 0){
        return <>Пока нет отзывов</>
    }
    return(<>{reviews}</>)
})