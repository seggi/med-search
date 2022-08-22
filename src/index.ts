import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./api/routes";
import dbInit from "./db/init";

dbInit()

const PORT = process.env.PORT 
const startUpAppMessage = `Welcome to Med-Search App API! \n Access our Endpoint at http://localhost:${PORT}/api/v1`
const debugMessage = "Server is running on http://localhost:";
const debugErrorMessage = "Error occurred:"

export const App = () => {
    const app: Application = express()
    dotenv.config();
    
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true}))
    
    app.get("/", (req: Request, res: Response) => {
        res.status(200).send(`${startUpAppMessage}`)
    })
    
    app.use('/api/v1', routes)

    return app
}


export const start = () => {
    const app = App()

    try {
        app.listen(PORT, () => {
            console.log(`${debugMessage} ${PORT}`)
        })
        
    } catch (error: any) {
        console.log(`${debugErrorMessage} ${error.message}`)
    }
}

start()