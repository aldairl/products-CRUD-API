import {Schema} from "mongoose"

export interface History {
    productId: Schema.Types.ObjectId
    changedField: string
    previousValue: string
    newValue: string
    updatedAt?: Date
}