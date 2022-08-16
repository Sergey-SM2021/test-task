import { Card } from "components/ui/Card"
import style from './ContentMedia.module.scss'
import { useAppDispatch } from "hooks/useAppDispatch";
import { setCurrentColor } from "store/reducers/shoesReducer/shoesReducer.actions";
import { useItem } from "store/selectors";
import cn from "classnames";
import { memo } from "react";
import { useSwipeable } from "react-swipeable";

export const ContentMedia = memo(() => {
    const { innerWidth } = window
    const { currentColor, media, id, colors } = useItem()
    const dispatch = useAppDispatch()
    const PictureClickHandler = (id: string) => {
        dispatch(setCurrentColor(id))
    }
    const swipeHandler = useSwipeable({
        onSwipedLeft:()=>{
            let currentCollorIndex = colors.findIndex(el => el.id === currentColor)
            currentCollorIndex++
            if(currentCollorIndex < colors.length){
                dispatch(setCurrentColor(colors[currentCollorIndex].id))
            }
        },
        onSwipedRight:()=>{
            let currentCollorIndex = colors.findIndex(el => el.id === currentColor)
            currentCollorIndex--
            if(currentCollorIndex >= 0){
                dispatch(setCurrentColor(colors[currentCollorIndex].id))
            }
        }
    })
    return (<div className={style.ContentMedia}>
        <div className={style.ContentMedia__id}>{id}</div>
        <div {...swipeHandler}>
            <Card mediaPath={media.find(m => m.id === currentColor)!.picture} />
        </div>
        {
            innerWidth > 425 ?
                <div className={style['ContentMedia__variants']}>
                    {media
                        .filter(m => m.id !== currentColor)
                        .map(el => <Card key={el.id} onClick={() => PictureClickHandler(el.id)} mediaPath={el.picture}
                            isSmall={true} />)}
                </div> :
                <div className={style.ContentMedia__points}>
                    {media
                        .map(el => <div key={el.id} className={cn([style.ContentMedia__point, el.id === currentColor && style.ContentMedia__point_active])} onClick={() => PictureClickHandler(el.id)} />)
                    }
                </div>
        }
    </div>)
})