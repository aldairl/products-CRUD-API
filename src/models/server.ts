import express, { Application } from 'express'
import cors from 'cors'

import { PORT } from '../config/environment'
import indexRoutes from '../routers'
import { connectDatabase } from '../config/database';

class Server {

    private app: Application
    private port: string

    constructor() {
        this.app = express()
        this.port = PORT

        // Initial methods
        this.middlewares()
        this.routes()
        this.connectDB()
    }

    async connectDB(){
        await connectDatabase()
    }

    middlewares() {
        // cors
        this.app.use(cors())
        // read JSON
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/api', indexRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('[Server] Server is running on port', this.port)
        })
    }

}

export default Server