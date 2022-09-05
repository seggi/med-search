import { tokenGuard } from './api/middleware/tokenGuard';
import express, { Application } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";

import publicRoutes from "./api/routes/publicRoutes";
import dbInit from "./db/init";
import { DEBUG_ERROR_MESSAGE, DEBUG_MESSAGE } from "./constants/appText";

dbInit()

export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express()
        this.settings()
        this.publicRoute()
        // this.privateRoute()
    }

    settings() {
        this.app.set('port', this.port || 4040);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true}))
        this.app.use(cors())
    }

    // Unprotected Routes
    publicRoute() {
        this.app.use('/api/v1',  publicRoutes)
    }

    // Protected Routes
    // privateRoute() {
        // this.app.use(tokenGuard())
        // this.app.use('/api/v2',  publicRoutes)
    // }

    async listen() {
        
        try {
            this.app.listen(this.app.get('port'));
            console.log(DEBUG_MESSAGE, this.app.get('port'))
        } catch (error: any) {
            console.log(`${DEBUG_ERROR_MESSAGE} ${error.message}`)
        }
    }
}