import style from './SliderItem.module.scss'

interface TProps {
    type:string
    value:string,
}

export const SliderProperty = ({type,value}:TProps) => {
    return(<div className={style.sliderItem}>
        <div>{type}</div>
        <div>{value}</div>
    </div>)
}
