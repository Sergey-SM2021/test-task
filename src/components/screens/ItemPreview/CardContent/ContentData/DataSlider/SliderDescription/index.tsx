import {useItem} from "store/selectors";
import {memo} from "react";

export const SliderDescription = memo(() => {
    const {description} = useItem()
    return(<div>{description}</div>)
})