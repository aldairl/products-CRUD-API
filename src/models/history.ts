import { Schema, model } from 'mongoose'
import { History } from '../interfaces/history'

const HistorySchema = new Schema<History>(
    {
        productId: { type: Schema.Types.ObjectId, ref: 'product', required: true },
        changedField: { type: String, required: true },
        newValue: { type: String, required: true },
        previousValue: { type: String, required: true }
    },
    {
        timestamps: true
    }
)

export default model<History>('history', HistorySchema)