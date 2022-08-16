export interface IColors {
    id:string
    color:string
}

export interface IMedia {
    id:string
    picture:string
}

export interface IReviews {
    
}

export type IProperty = Record<string, string>

export interface IShoes{
    count: number
    id:string
    currentColor:string
    title: string
    property: IProperty
    description: string
    reviews: Array<IReviews>
    colors: Array<IColors>
    media: Array<IMedia>
    price: number
}