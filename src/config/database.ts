import mongoose from 'mongoose'
import { MONGO_URL } from './environment';

export const connectDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URL, {})
        console.log('[DB] Database connected successfully!')

    } catch (error) {
        console.log('[Error] Can not connect database =>', error)
        throw new Error("Error conecting database");
    }
}