import {useItem} from "../../../../../../../store/selectors";

export const SliderDescription = () => {
    const {description} = useItem()
    return(<div>{description}</div>)
}