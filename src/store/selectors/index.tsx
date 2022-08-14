import {useAppSelector} from "hooks/useAppSelector"

export const useItem = () => useAppSelector(store => store.shoesReducer.item)

export const useCartItems = () => useAppSelector(store => store.cartReducer.items)

export const useCount = () => {
    const item = useItem()
    const cartItems = useCartItems()

    const found = (cartItems.find(el => el.currentColor === item.currentColor && el.id === item.id))
    if (!found){
        return 0
    } else {
        return found.count
    }
}