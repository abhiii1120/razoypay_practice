import express from "express";
import morgan from "morgan";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/health',(_req,res) => {
    res.json({
        status:'ok',
    })
})

export default app;