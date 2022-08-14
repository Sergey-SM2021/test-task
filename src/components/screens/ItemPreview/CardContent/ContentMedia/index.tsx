import {Card} from "../../../../ui/Card"
import style from './ContentMedia.module.scss'
import item1 from 'assets/Media/Shoes/Item1.svg'
import item2 from 'assets/Media/Shoes/Item2.svg'
import item3 from 'assets/Media/Shoes/Item3.svg'
import item4 from 'assets/Media/Shoes/Item4.svg'
import {useAppSelector} from "hooks/useAppSelector";
import {useAppDispatch} from "hooks/useAppDispatch";
import {setCurrentColor} from "../../../../../store/reducers/shoesReducer/shoesReducer.actions";
import {useItem} from "../../../../../store/selectors";

export const ContentMedia = () => {
    const {currentColor,media,id} =useItem()
    const dispatch = useAppDispatch()
    const PictureClickHandler = (id:string) => {
        dispatch(setCurrentColor(id))
    }
    return(<div className={style.ContentMedia}>
        <div className={style.ContentMedia__id}>{id}</div>
        <Card mediaPath={media.find(m => m.id === currentColor).picture}/>
        <div className={style['ContentMedia__variants']}>
            {media.filter(m => m.id !== currentColor).map(el => <Card onClick={()=>PictureClickHandler(el.id)} mediaPath={el.picture} isSmall={true}/>)}
        </div>
    </div>)
}