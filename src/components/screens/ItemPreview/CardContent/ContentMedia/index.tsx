import {Card} from "../../../../ui/Card"
import style from './ContentMedia.module.scss'
import item1 from 'assets/Media/Shoes/Item1.svg'
import item2 from 'assets/Media/Shoes/Item2.svg'
import item3 from 'assets/Media/Shoes/Item3.svg'
import item4 from 'assets/Media/Shoes/Item4.svg'
import {useAppDispatch} from "hooks/useAppDispatch";
import {setCurrentColor} from "store/reducers/shoesReducer/shoesReducer.actions";
import {useItem} from "store/selectors";
import cn from "classnames";
import {memo} from "react";

export const ContentMedia = memo(() => {
    const {innerWidth} = window
    const {currentColor, media, id} = useItem()
    const dispatch = useAppDispatch()
    const PictureClickHandler = (id: string) => {
        dispatch(setCurrentColor(id))
    }
    return (<div className={style.ContentMedia}>
        <div className={style.ContentMedia__id}>{id}</div>
        <Card mediaPath={media.find(m => m.id === currentColor).picture}/>
        {
            innerWidth > 425 ?
                <div className={style['ContentMedia__variants']}>
                    {media
                        .filter(m => m.id !== currentColor)
                        .map(el => <Card key={el.id} onClick={() => PictureClickHandler(el.id)} mediaPath={el.picture}
                                         isSmall={true}/>)}
                </div>:
                <div className={style.ContentMedia__points}>
                    {media
                        .map(el => <div key={el.id} className={cn([style.ContentMedia__point,el.id === currentColor&&style.ContentMedia__point_active])} onClick={() => PictureClickHandler(el.id)} />)
                    }
                </div>
        }
    </div>)
})