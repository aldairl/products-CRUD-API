import 'dotenv/config'

export const PORT = process.env.PORT ?? '5000'
export const MONGO_URL = process.env.MONGO_URL ?? 'mongodb://localhost:27017'