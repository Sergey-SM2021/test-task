import {Card} from "../../../../ui/Card"
import style from './ContentMedia.module.scss'
import item1 from 'assets/Media/Shoes/Item1.svg'
import item2 from 'assets/Media/Shoes/Item2.svg'
import item3 from 'assets/Media/Shoes/Item3.svg'
import item4 from 'assets/Media/Shoes/Item4.svg'

export const ContentMedia = () => {
    return(<div className={style.cardContent__media}>
        <Card mediaPath={item1}/>
        <div className={style['cardContent__media-variants']}>
            <Card mediaPath={item2} isSmall={true}/>
            <Card mediaPath={item3} isSmall={true}/>
            <Card mediaPath={item4} isSmall={true}/>
        </div>
    </div>)
}