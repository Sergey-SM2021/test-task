import style from './Card.module.scss'
import cn from 'classnames'

interface TProps {
    mediaPath: string
    isSmall?: boolean
    onClick?: () => void
}

export const Card = ({mediaPath,isSmall,onClick}:TProps) => {
    return(<div onClick={onClick} className={cn(isSmall?[style.card_small,style.card]:style.card)}>
        <img src={mediaPath}/>
    </div>)
}