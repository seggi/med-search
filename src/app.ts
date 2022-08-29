import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";

import publicRoutes from "./api/routes/publicRoutes";
import dbInit from "./db/init";


dbInit()

const nodeEnv: string = process.env.NODE_ENV || 'production';


// const startUpAppMessage = `Welcome to Med-Search App API! \n Access our Endpoint at http://localhost:${PORT}/api/v1`
// const debugMessage = "Server is running on http://localhost:";
// const debugErrorMessage = "Error occurred:"


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
        this.app.listen(this.app.get('port'));
        console.log('server started on port', this.app.get('port'))
    }
}