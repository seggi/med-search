import express, { Application } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";

import publicRoutes from "./api/routes/publicRoutes";
import dbInit from "./db/init";
import { DEBUG_ERROR_MESSAGE, DEBUG_MESSAGE } from "./constants/appText";


dbInit()

const nodeEnv: string = process.env.NODE_ENV || 'production';

export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express()
        this.settings()
        // this.authRoute()
        this.publicRoute()
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
    // authRoute() {
    //     this.app.use('/api/v1',)
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