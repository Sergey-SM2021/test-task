import {useAppSelector} from "hooks/useAppSelector";

export const SliderDescription = () => {
    const {description} = useAppSelector(state => state.shoesReducer.item)
    return(<>{description}</>)
}