
import express, {Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Pool } from "pg";




const app: Application = express()
dotenv.config();



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get("/", (req: Request, res: Response) => {
    res.send("Med-Search App is Running")
})

const PORT = process.env.PORT 

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432")
  });

  
  const connectToDB = async () => {
    try {
      await pool.connect();
    } catch (err) {
      console.log(err);
    }
  };
  
connectToDB();

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})