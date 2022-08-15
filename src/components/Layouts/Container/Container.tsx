import {memo, PropsWithChildren} from "react";
import style from "./Container.module.scss";

export const Container = memo(({children}:PropsWithChildren) => {
    return (<div className={style.container}>{children}</div>)
})